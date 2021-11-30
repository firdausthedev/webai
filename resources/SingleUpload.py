from flask_restful import Resource
from flask import request
from werkzeug.utils import secure_filename
import os
from skimage import io

MIN_IMG_SIZE = 2 * 1024 * 1024
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


class SingleUpload(Resource):
    def post(self):
        try:
            file = request.files['file']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join('upload', filename))
                file_size = os.path.getsize("upload/" + filename)

                if file_size > MIN_IMG_SIZE:
                    # removes the file from the server
                    os.remove("upload/" + filename)
                    return {"success": False, "message": "File too large. Please select file less than 1MB"}, 413
                else:
                    img_res = io.imread("upload/" + filename)
                    if(img_res.shape[2] != 3):
                        os.remove("upload/" + filename)
                        return {"success": False, "message": "Image not colored"}, 406

                    return {"success": True, "filename": filename}, 200
            else:
                return {"success": False, "message": "Invalid file type. Allowed file types are png, jpg, jpeg"}, 406
        except:
            return {"success": False, "message": "Please enter a file"}, 406

    def get(self):
        return {"success": True}
