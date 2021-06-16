//require('dotenv').config()

function authorize(){

    const client_id = process.env.CLIENT_ID;
    //const client_secret = process.env.CLIENT_SECRET;
    const redirectUrl = 'https://stravatest.netlify.app/redirect.html'


    window.location = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirectUrl}&response_type=code&scope=activity:read_all`;
}