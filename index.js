require('dotenv').config()

function authorize(){

    const client_id = process.env.CLIENT_ID;
    //const client_secret = process.env.CLIENT_SECRET;
    const redirectUrl = 'http://localhost:63342/Strava-API-Testing/redirect.html'


    window.location = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirectUrl}&response_type=code&scope=activity:read_all`;
}