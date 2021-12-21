import numpy as np

class Convolution:
    
  def __init__(self, num_filters):
    self.num_filters = num_filters

    # filters is 3x3 3d array with random values
    self.filters = np.random.randn(num_filters, 3, 3) / 9

  def get_filters(self):
    return self.filters

  def stride(self, img):
      height, weight = img.shape
    
      for i in range(height - 2):
        for j in range(weight - 2):
          # 3x3 filter
          region = img[i:(i + 3), j:(j + 3)]
          yield region, i, j
    
  def f_prop(self, input):

      self.last_input = input

      height, weight = input.shape
      output = np.zeros((height - 2, weight - 2, self.num_filters))

      for region, i, j in self.stride(input):
        output[i, j] = np.sum(region * self.filters, axis=(1, 2))

      return output

  def b_prop(self, grad_loss, lr):

      grad_filters = np.zeros(self.filters.shape)

      for region, i, j in self.stride(self.last_input):
        for f in range(self.num_filters):
          grad_filters[f] += grad_loss[i, j, f] * region

      # Update filters
      self.filters -= lr * grad_filters
      return None