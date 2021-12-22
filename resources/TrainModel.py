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
def extractZip (model1, model2):
    zf = ZipFile("dataset/"+model1, "r")
    zf.extractall('dataset')
    zf = ZipFile("dataset/"+model2, "r")
    zf.extractall('dataset')
    zf.close()
    os.remove("dataset/"+model1)
    os.remove("dataset/"+model2)

# split into train and test folder    
def split_folder(dataset, indexFolder, x, y, xt, yt):
    source_dir = 'dataset/' + dataset
    target_train_dir = "dataset/" + dataset +"/train_set"
    target_test_dir = "dataset/" + dataset +"/test_set"

    # move files to train set folder
    file_names = os.listdir(source_dir)
    file_names.remove("train_set")
    file_names.remove("test_set")

    # renaming file names
    for index, file in enumerate(file_names):
        os.rename(os.path.join(source_dir, file), os.path.join(source_dir, dataset.join([str(index), os.path.splitext(file)[1]])))

    file_names = os.listdir(source_dir)
    file_names.remove("train_set")
    file_names.remove("test_set")

    # file_names = sorted(file_names,key=lambda x: int(os.path.splitext(x)[0]))


    for index, file_name in enumerate(file_names):
        if index < 800 :
          shutil.move(os.path.join(source_dir, file_name), target_train_dir)
          img = Image.open(target_train_dir +"/" + file_name).convert('L')
          img = img.resize((28,28))
          x.append(asarray(img))
          if (indexFolder == 0):
            y.append(0)
          else:
            y.append(1)
        else :
          shutil.move(os.path.join(source_dir, file_name), target_test_dir)
          img = Image.open(target_test_dir +"/" + file_name).convert('L')
          img = img.resize((28,28))
          xt.append(asarray(img))
          if (indexFolder == 0):
            yt.append(0)
          else:
            yt.append(1)





class TrainModel(Resource):
    def get(self, model1, model2):
        
        x_train = []
        y_train = []
        x_test = []
        y_test = []
      
        # extract files
        try:
            extractZip(model1, model2) 
        except:
            return {"success": False, "message": "Something went wrong"}, 406
        
                
        os.remove("dataset/.gitignore")
        
        # get list of names
        folder_list = os.listdir("dataset/")
        
        for folder in folder_list:
            os.makedirs("dataset/" + folder +"/train_set")
            os.makedirs("dataset/" + folder +"/test_set")
        
        try:
            for index, folder in enumerate(folder_list):
                split_folder(folder, index, x_train, y_train, x_test, y_test)
        except :
            return {"success": False, "message": "Something went wrong"}, 406
        # split folder into training and test set
      
     
        
        # convert labels into numpy array
        nx_train = np.asarray(x_train)
        ny_train = np.asarray(y_train)
        nx_test = np.asarray(x_test)
        ny_test = np.asarray(y_test)
        

        conv = Convolution(8)                  
        pool = MaxPooling()                  
        softmax = Softmax(13 * 13 * 8, 2) 
        
        def forward(image, label):
            output = conv.f_prop((image / 255) - 0.5)
            output = pool.f_prop(output)
            output = softmax.f_prop(output)

            loss = -np.log(output[label])
            accuracy = 1 if np.argmax(output) == label else 0

            return output, loss, accuracy
        
        def train(im, label, lr=.005):
            output, loss, acc = forward(im, label)

            gradient = np.zeros(10)
            gradient[label] = -1 / output[label]

            gradient = softmax.b_prop(gradient, lr)
            gradient = pool.b_prop(gradient)
            gradient = conv.b_prop(gradient, lr)

            return loss, acc
        
      
        # cnn.accurate_test(nx_test, ny_test)
        for epoch in range(11):
          print('--- Epoch %d ---' % (epoch + 1))
          
          #shuffle the train and test list
          permutation = np.random.permutation(len(nx_train))
          nx_train = nx_train[permutation]
          ny_train = ny_train[permutation]
          
          
          loss = 0
          num_correct = 0
          for i, (im, label) in enumerate(zip(nx_train, ny_train)):
            if i % 100 == 99:
                  print('Step %d Average Loss %.3f | Accuracy: %d%%' %(i + 1, loss / 100, num_correct))
                  loss = 0
                  num_correct = 0
                  
            l, acc = train(im, label)
            loss += l
            num_correct += acc
        
        saved_list = [conv.get_filters(), softmax.get_weights(), softmax.get_biases()]
        pickle.dump( saved_list , open( 'trained_model/trained.pkl' , 'wb' ) )

        print(saved_list)
        # delete dataset after finish training
        for index, folder in enumerate(folder_list):
            shutil.rmtree("dataset/" + folder)
        
        print(len(nx_train))
        return {"success": True, "filename": "trained"}, 200
      
        
        
