from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect
from resources.SinglePredict import SinglePredict
from resources.MultiPredict import MultiPredict
from resources.SingleUpload import SingleUpload
from resources.MultiUpload import MultiUpload
import os

SECRET_KEY = os.urandom(32)
app = Flask(__name__)
api = Api(app)
CORS(app)
csrf = CSRFProtect(app)
app.config['SECRET_KEY'] = SECRET_KEY
app.config['CORS_HEADERS'] = 'Content-Type'

api.add_resource(SinglePredict, '/prediction/<string:name>')
api.add_resource(MultiPredict, '/prediction/multi/<string:timestamp>')
api.add_resource(SingleUpload, '/upload/single')
api.add_resource(MultiUpload, '/upload/multi')
app.config.from_mapping({'WTF_CSRF_ENABLED': False})


if __name__ == '__main__':
    csrf.init_app(app)
    app.run(port=5000, debug=True)
