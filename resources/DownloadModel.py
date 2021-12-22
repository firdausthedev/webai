from flask_restful import Resource
from flask import send_file
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = {'pkl'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


class DownloadModel(Resource):
    def get(self, model):
        try:
            path = "trained_model/"+model+".pkl"
            return send_file(path, as_attachment=True)
        except:
            return {"success": False, "message": "Something went wrong"}, 406
        
