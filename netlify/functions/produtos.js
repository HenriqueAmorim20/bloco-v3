import fetch from "node-fetch";

const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';

export async function handler(event, context) {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
}
