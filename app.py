from flask import Flask
from flask_restful import Api
from flask_cors import CORS, cross_origin
from flask_wtf.csrf import CSRFProtect

from resources.UploadImage import UploadImage
from resources.TrainModel import TrainModel
from resources.DownloadModel import DownloadModel
from resources.UploadFile import UploadFile
from resources.UploadCModel import UploadCModel
from resources.PredictImage import PredictImage

import os

SECRET_KEY = os.urandom(32)
app = Flask(__name__)
api = Api(app)
CORS(app)
csrf = CSRFProtect(app)
app.config['SECRET_KEY'] = SECRET_KEY
app.config['CORS_HEADERS'] = 'Content-Type'

api.add_resource(UploadImage, '/uploadimage')
api.add_resource(UploadFile, '/uploadfile')
api.add_resource(UploadCModel, '/uploadcmodel')
api.add_resource(PredictImage, '/predictimage/<string:name>/<string:model>')
api.add_resource(TrainModel, '/trainmodel/<string:model1>/<string:model2>')
api.add_resource(DownloadModel, '/getmodel/<string:model>')

app.config.from_mapping({'WTF_CSRF_ENABLED': False})


if __name__ == '__main__':
    csrf.init_app(app)
    app.run(port=5000, debug=True)

# flask_cors.CORS(app, expose_headers='Authorization')