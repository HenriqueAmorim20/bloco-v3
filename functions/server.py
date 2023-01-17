from flask import Flask
import os
from dotenv import load_dotenv
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from googleapiclient.discovery import build
import json

app = Flask(__name__)


# Load environment variables from .env file
load_dotenv()
spreadsheetId = os.getenv("SHEET_ID")
range = os.getenv("RANGE")
type = os.getenv("TYPE")
private_key_id = os.getenv("PRIVATE_KEY_ID")
private_key = os.getenv("PRIVATE_KEY").replace('\\n', '\n')
client_email = os.getenv("CLIENT_EMAIL")
client_id = os.getenv("CLIENT_ID")

# Configure the connection
scope = ['https://spreadsheets.google.com/feeds']
# Give the path to the Service Account Credential json file
credentials = ServiceAccountCredentials.from_json_keyfile_dict(
    {
        "type": type,
        "private_key_id": private_key_id,
        "private_key": private_key,
        "client_email": client_email,
        "client_id": client_id,
    }, scope)
# Authorise your Notebook
gc = gspread.authorize(credentials)
service = build('sheets', 'v4', credentials=credentials)
# Call the Sheets API
sheet = service.spreadsheets()


@app.route('/produtos', methods=['GET'])
def get_data():
    result = sheet.values().get(spreadsheetId=spreadsheetId, range=range).execute()
    data = result.get('values', [])

    products = []
    headers = data[0]
    for row in data[1:]:
        product = dict(zip(headers, row))
        products.append(product)
    with open('../src/assets/produtos.json', 'w') as outfile:
        json.dump(products, outfile)
    return json.dumps(products)


if __name__ == '__main__':
    app.run()