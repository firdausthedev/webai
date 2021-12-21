from flask_restful import Resource
from flask import request
from werkzeug.utils import secure_filename
import os

ALLOWED_EXTENSIONS = {'zip'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

class UploadFile(Resource):
    def post(self):
        try:
            file = request.files['file']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join('dataset', filename))
            return {"success": True, "filename": filename}, 200
        except:
            return {"success": False, "message": "Something went wrong"}, 406
        
