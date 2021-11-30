from flask_restful import Resource
from flask import request
from werkzeug.utils import secure_filename
import os
import calendar
import time

MIN_IMG_SIZE = 2 * 1024 * 1024
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


class MultiUpload(Resource):
    def post(self):
        # try:

        directory = str(calendar.timegm(time.gmtime()))
        parent_dir = "upload/multi"
        path = os.path.join(parent_dir, directory)
        os.mkdir(path)

        files = request.files.getlist('files[]')
        file_names = []
        for file in files:
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file_names.append(filename)
                file.save(os.path.join(path, filename))

        return {"success": True, "timestamp": directory}, 200
