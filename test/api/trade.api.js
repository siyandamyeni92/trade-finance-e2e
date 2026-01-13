import axios from 'axios';

export async function getLcStatus(lcId) {
  const url = `${process.env.BASE_API_URL}/lc/${encodeURIComponent(lcId)}`;

  const res = await axios.get(url, {
    timeout: 30000,
    headers: { 'Accept': 'application/json' }
  });

  // adjust field name to your API contract
  return res.data.status;
}


//That file is a backend API utility used for system-of-record validation.
  //It is one of the most important pieces in bank-grade automation.

  //It answers the question:

  //“Did the system really change the LC status in the backend?”

  //—not just “Did the UI look right?”

  //This is trade.api.js (or similar).

    //A pure API helper
    //Uses Axios - Axios is a JavaScript library for making HTTP requests (calling APIs) from Node.js or the browser.
    //Talks directly to the Trade Finance backend
