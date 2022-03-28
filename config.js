/*
 * Open your spotify dashboard
 * https://beta.developer.spotify.com/dashboard
*/

require("dotenv").config();

const client_id = process.env.clientID || '';
const redirect_uri = 'http://localhost:3000/callback';
const client_secret = process.env.clientSecret || '';
