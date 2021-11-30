from flask_restful import Resource
import os
import numpy as np
from keras_preprocessing import image
from tensorflow import keras

model = keras.models.load_model('test_model')
WEAPONS = ["axes", "pistols", "scissors", "wrench"]


class MultiPredict(Resource):
    def get(self, timestamp):
        entries = os.listdir('upload/multi/' + timestamp)
        data = []
        for file in entries:
            test_image = image.load_img(
                'upload/multi/' + timestamp + '/' + file, target_size=(128, 128))
            test_image = image.img_to_array(test_image)/255
            test_image = np.expand_dims(test_image, axis=0)
            result = model.predict(test_image)

            data.append(
                {
                    "item": WEAPONS[np.argmax(result[0])],
                    "probabilities": "%.4f" % (result[0].max()*100),
                    "file": str(file)
                })

        return data, 200
