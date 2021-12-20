from flask_restful import Resource
from flask import request
from werkzeug.utils import secure_filename
import os

ALLOWED_EXTENSIONS = {'pkl'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


class UploadCModel(Resource):
    def post(self):
        try:
            file = request.files['file']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                filename = "custom.pkl"
                file.save(os.path.join('trained_model', filename))
            return {"success": True, "filename": os.path.splitext(filename)[0]}, 200
        except:
            return {"success": False, "message": "Something went wrong"}, 406
        
