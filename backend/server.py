
# Import flask and datetime module for showing date and time
from flask import Flask,request
import io, base64
from PIL import Image
  

  
# Initializing flask app
app = Flask(__name__)
  
  
# Route for seeing a data
@app.route('/data/', methods=['POST'])
def imageTransfer():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        image = json["image"]
        img = Image.open(io.BytesIO(base64.decodebytes(bytes(image, "utf-8"))))
        # Call function and return it 
        return {"body":"hi"}
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)