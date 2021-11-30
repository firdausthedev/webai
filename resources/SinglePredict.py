from flask_restful import Resource
import os
import numpy as np
from keras_preprocessing import image
from tensorflow import keras

model = keras.models.load_model('test_model')

execution_path = os.getcwd()


class SinglePredict(Resource):
    def get(self, name):
        test_image = image.load_img(
            'upload/' + name, target_size=(128, 128))
        test_image = image.img_to_array(test_image)/255

        test_image = np.expand_dims(test_image, axis=0)
        result = model.predict(test_image)

        return {'success': True, "image": name, "data": {
            'axes': "%.4f" % (result[0][0]*100),
            'pistols': "%.4f" % (result[0][1]*100),
            'scissors': "%.4f" % (result[0][2]*100),
            'wrench': "%.4f" % (result[0][3]*100)
        }}, 200
