/*
 * Open your spotify dashboard
 * https://beta.developer.spotify.com/dashboard
*/

require("dotenv").config();

const client_id = process.env.clientID || 'fb7cad0b25154d45b035d6918a70de03';
const redirect_uri = 'http://localhost:3000/callback';
const client_secret = process.env.clientSecret || '2514c4b30cf048dcb766c501b1f10cd1';