from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)
CORS(app)
api = Api(app)

class generateJarm(Resource):
    def get(self, ip):
        return {"jarm": ip}

api.add_resource(generateJarm, "/api/<string:ip>")

if __name__ == '__main__':
    app.run(debug=True)


