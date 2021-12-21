import numpy as np

class Softmax:
    
  def __init__(self, input_len, nodes):
    self.weights = np.random.randn(input_len, nodes) / input_len
    self.biases = np.zeros(nodes)
  
  def get_weights(self):
    return self.weights

  def get_biases(self):
    return self.biases


  def f_prop(self, input):
 
    self.last_input_shape = input.shape

    input = input.flatten()
    self.last_input = input

    input_len, nodes = self.weights.shape

    totals = np.dot(input, self.weights) + self.biases
    self.total_last = totals

    exp = np.exp(totals)
    return exp / np.sum(exp, axis=0)

  def b_prop(self, grad_loss, lr):
    
    for i, gradient in enumerate(grad_loss):
      if gradient == 0:
        continue

      total_exp = np.exp(self.total_last)

      S = np.sum(total_exp)

      grad_out_t = -total_exp[i] * total_exp / (S ** 2)
      grad_out_t[i] = total_exp[i] * (S - total_exp[i]) / (S ** 2)

      grad_total_weight = self.last_input
      grad_total_bias = 1
      grad_total_i = self.weights

      grad_t = gradient * grad_out_t

      grad_weight = grad_total_weight[np.newaxis].T @ grad_t[np.newaxis]
      grad_bias = grad_t * grad_total_bias
      grad_input = grad_total_i @ grad_t

      self.weights -= lr * grad_weight
      self.biases -= lr * grad_bias

      return grad_input.reshape(self.last_input_shape)