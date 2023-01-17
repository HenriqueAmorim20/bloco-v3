const dotenv = require('dotenv');
const { google } = require('googleapis');
const sheets = google.sheets({version: 'v4'});

dotenv.config();

const spreadsheetId = process.env.SHEET_ID;
const range = process.env.RANGE;
// const type = process.env.TYPE;
// const private_key_id = process.env.PRIVATE_KEY_ID;
const private_key = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const client_email = process.env.CLIENT_EMAIL;
// const client_id = process.env.CLIENT_ID;
const scopes = ['https://www.googleapis.com/auth/spreadsheets']

// const credentials = {
//   type: type,
//   private_key: private_key,
//   client_email: client_email,
//   client_id: client_id,
//   private_key_id: private_key_id
// }

const auth = new google.auth.JWT(client_email, null, private_key, scopes);

export async function handler(_event, _context) {
  try {
    const result = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
        auth: auth
    });

    const data = result.data.values;

    let products = []
    let headers = data[0]
    for (let i = 1; i < data.length; i++) {
        let product = {}
        let row = data[i]
        headers.forEach((header, index) => {
            product[header] = row[index]
        });
        products.push(product)
    }

    // fs.writeFileSync('produtos.json', JSON.stringify(products));
    return {
      statusCode: 200,
      body: products,
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err,
    }
  }
}
