import numpy as np


class MaxPooling:
    
  def stride(self, img):

    height, width, _ = img.shape
    new_height = height // 2
    new_width = width // 2

    for i in range(new_height):
      for j in range(new_width):
        region = img[(i * 2):(i * 2 + 2), (j * 2):(j * 2 + 2)]
        yield region, i, j

  def f_prop(self, input):

    self.last_input = input

    height, width, num_filters = input.shape
    output = np.zeros((height // 2, width // 2, num_filters))

    for region, i, j in self.stride(input):
      output[i, j] = np.amax(region, axis=(0, 1))

    return output

  def b_prop(self, grad_loss):
   
    grad_input = np.zeros(self.last_input.shape)

    for region, i, j in self.stride(self.last_input):
      height, width, filter = region.shape
      amax = np.amax(region, axis=(0, 1))

      for i2 in range(height):
        for j2 in range(width):
          for f2 in range(filter):
            if region[i2, j2, f2] == amax[f2]:
              grad_input[i * 2 + i2, j * 2 + j2, f2] = grad_loss[i, j, f2]

    return grad_input