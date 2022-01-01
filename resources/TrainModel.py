from flask_restful import Resource
import pickle
from PIL import Image
import numpy as np
from numpy import asarray
from zipfile import ZipFile
import os
import shutil

from .Convolution import Convolution
from .MaxPooling import MaxPooling
from .SoftMax import Softmax

# extract and delete the zip files


def extractZip(model1, model2):
    zf = ZipFile("dataset/"+model1, "r")
    zf.extractall('dataset')
    zf = ZipFile("dataset/"+model2, "r")
    zf.extractall('dataset')
    zf.close()
    os.remove("dataset/"+model1)
    os.remove("dataset/"+model2)

# split into train and test folder


def split_folder(model, indexFolder, x, y, xt, yt):

    # remove the model extension and get the name
    folder = os.path.splitext(model)[0]
    os.makedirs("dataset/" + folder + "/train_set")
    os.makedirs("dataset/" + folder + "/test_set")

    source_dir = 'dataset/' + folder
    target_train_dir = "dataset/" + folder + "/train_set"
    target_test_dir = "dataset/" + folder + "/test_set"

    file_names = os.listdir('dataset/' + folder)
    file_names.remove("train_set")
    file_names.remove("test_set")

    # rename each files in folder
    for index, file in enumerate(file_names):
        os.rename(os.path.join(source_dir, file), os.path.join(
            source_dir, folder.join([str(index), os.path.splitext(file)[1]])))

    file_names = os.listdir(source_dir)
    file_names.remove("train_set")
    file_names.remove("test_set")

    for index, file_name in enumerate(file_names):
        if index < 800:
            # move the file into train set folder
            shutil.move(os.path.join(source_dir, file_name), target_train_dir)
            # convert the image into grayscale
            img = Image.open(target_train_dir + "/" + file_name).convert('L')
            # resize the image
            img = img.resize((64, 64))
            # convert img into numpy array and add to x_train list
            x.append(asarray(img))

            if (indexFolder == 0):
                y.append(0)
            else:
                y.append(1)
        else:
            shutil.move(os.path.join(source_dir, file_name), target_test_dir)
            img = Image.open(target_test_dir + "/" + file_name).convert('L')
            img = img.resize((64, 64))
            xt.append(asarray(img))
            if (indexFolder == 0):
                yt.append(0)
            else:
                yt.append(1)


class TrainModel(Resource):
    def get(self, model1, model2):

        # extract files
        try:
            extractZip(model1, model2)
        except:
            return {"success": False, "message": "Something went wrong"}, 406

        x_train = []
        y_train = []
        x_test = []
        y_test = []
        acc_history = []
        loss_history = []

        split_folder(model1, 0,  x_train, y_train, x_test, y_test)
        split_folder(model2, 1,  x_train, y_train, x_test, y_test)

        # convert labels into numpy array
        nx_train = np.asarray(x_train)
        ny_train = np.asarray(y_train)
        nx_test = np.asarray(x_test)
        ny_test = np.asarray(y_test)

        conv = Convolution(11)
        pool = MaxPooling()
        softmax = Softmax(31 * 31 * 11, 2)

        def forward(image, label):
            output = conv.f_prop((image / 255) - 0.5)
            output = pool.f_prop(output)
            output = softmax.f_prop(output)

            loss = -np.log(output[label])
            accuracy = 1 if np.argmax(output) == label else 0

            return output, loss, accuracy

        def train(im, label, lr=.005):
            output, loss, acc = forward(im, label)

            gradient = np.zeros(2)
            gradient[label] = -1 / output[label]

            gradient = softmax.b_prop(gradient, lr)
            gradient = pool.b_prop(gradient)
            gradient = conv.b_prop(gradient, lr)

            return loss, acc

        # train model
        isLooping = True

        for epoch in range(1):
            print('--- Epoch %d ---' % (epoch + 1))

            permutation = np.random.permutation(len(nx_train))
            nx_train = nx_train[permutation]
            ny_train = ny_train[permutation]

            loss = 0
            num_correct = 0

            for i, (im, label) in enumerate(zip(nx_train, ny_train)):

                if not isLooping:
                    break

                if i % 100 == 99:
                    print(
                        'Step %d Average Loss %.3f | Accuracy: %d%%' %
                        (i + 1, loss / 100, num_correct)
                    )
                    acc_history.append(num_correct)
                    loss_history.append(loss/100)

                    # early stopping
                    if 0.05 <= loss / 100 <= 0.10 and num_correct >= 90:
                        isLooping = False
                        break

                    loss = 0
                    num_correct = 0
                    break

                l, acc = train(im, label)
                loss += l
                num_correct += acc

        # accuracy test
        def predict_test(limit):
            acc = 0

            for index, img in enumerate(nx_test[:limit]):
                out = conv.f_prop((img / 255) - 0.5)
                out = pool.f_prop(out)
                out = softmax.f_prop(out)

                exp = 0
                if(out[0] > out[1]):
                    exp = 0
                else:
                    exp = 1

                a_output = 0 if ny_test[index] == 0 else 1

                if(a_output == exp):
                    acc += 1
                print("Accuracy: ", (acc/limit)*100)

            return (acc/limit)*100

        saved_list = [conv.get_filters(), softmax.get_weights(
        ), softmax.get_biases(), predict_test(20), acc_history, loss_history]
        pickle.dump(saved_list, open('trained_model/trained.pkl', 'wb'))

        shutil.rmtree("dataset")
        return {"success": True, "filename": "trained"}, 200
