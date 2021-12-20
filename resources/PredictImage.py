from flask_restful import Resource
import pickle
from PIL import Image
import numpy as np
from numpy import asarray

def stride(img):
      height, weight = img.shape
    
      for i in range(height - 2):
        for j in range(weight - 2):
          # 3x3 filter
          region = img[i:(i + 3), j:(j + 3)]
          yield region, i, j
    
def f_prop(input, filters):


      height, weight = input.shape
      output = np.zeros((height - 2, weight - 2, 8))

      for region, i, j in stride(input):
        output[i, j] = np.sum(region * filters, axis=(1, 2))

      return output

def max_f(input):


    height, width, num_filters = input.shape
    output = np.zeros((height // 2, width // 2, num_filters))

    for region, i, j in max_stride(input):
      output[i, j] = np.amax(region, axis=(0, 1))

    return output

def max_stride(img):

    height, width, _ = img.shape
    new_height = height // 2
    new_width = width // 2

    for i in range(new_height):
      for j in range(new_width):
        region = img[(i * 2):(i * 2 + 2), (j * 2):(j * 2 + 2)]
        yield region, i, j

def soft_f(input, weights, biases):
 

    input = input.flatten()


    totals = np.dot(input, weights) + biases
    total_last = totals

    exp = np.exp(total_last)
    return exp / np.sum(exp, axis=0)


class PredictImage(Resource):
    def get(self, name, model):
        load_weight = pickle.load(open("trained_model/" + model, 'rb'))
        filters = load_weight[0]
        weights = load_weight[1]
        biases = load_weight[2]
        t_img = Image.open("upload/"+name).convert('L')
        t_img = t_img.resize((28, 28))
        t_img = asarray(t_img)
        
        out = f_prop((t_img / 255) - 0.5, filters)
        out = max_f(out)
        
        out = soft_f(out,weights, biases)
        # print(out)
        
        return {"success": True, "prob": {
            "model" : out[0],
            "model2" : out[1]
            }}, 200 
        
