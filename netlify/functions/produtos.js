const dotenv = require('dotenv');
const { google } = require('googleapis');
const sheets = google.sheets({ version: 'v4' });

dotenv.config();

const spreadsheetId = process.env.SHEET_ID;
const range = process.env.RANGE;
const private_key = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const client_email = process.env.CLIENT_EMAIL;
const scopes = ['https://www.googleapis.com/auth/spreadsheets']
const auth = new google.auth.JWT(client_email, null, private_key, scopes);

export async function handler(event, _context) {
  const id = event?.queryStringParameters?.id
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
      let product = {
          id: i
        }
        let row = data[i]
        headers.forEach((header, index) => {
            product[header] = row[index]
        });
        products.push(product)
    }

    products = products.map((item) => {
      const mainPage = item.mainPage.toLowerCase() === 'true' ? true : false;
      const imgCover = mapImgUrl(item.imgCover);
      const imgBack = mapImgUrl(item.imgBack);
      const img1 = mapImgUrl(item.img1);
      const img2 = mapImgUrl(item.img2);
      const img3 = mapImgUrl(item.img3);
      const img4 = mapImgUrl(item.img4);

      return {
        ...item,
        mainPage,
        imgCover,
        imgBack,
        imgUrls: [img1, img2, img3, img4]
      }
    })

    if (id) {
      const product = products.find(p => p.id == id)
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: `Erro: ${err}`,
    }
  }
}

function mapImgUrl(url) {
  return url.replace('file/d/', 'uc?id=').split('/view')[0]
}
