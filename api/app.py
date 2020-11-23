from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource
from jarmer import run

from subprocess import call


app = Flask(__name__)
CORS(app)
api = Api(app)

class generateJarm(Resource):
    def get(self, ip):
        jarm = run(ip)
        return {"jarm": jarm}

api.add_resource(generateJarm, "/api/<string:ip>")

if __name__ == '__main__':
    app.run(debug=True)


