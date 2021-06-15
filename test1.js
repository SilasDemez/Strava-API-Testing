function get(){
    let StravaApiV3 = require('strava_api_v3');
    let defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
    let strava_oauth = defaultClient.authentications['strava_oauth'];
    strava_oauth.accessToken = "YOUR ACCESS TOKEN"

    let api = new StravaApiV3.ActivitiesApi()

    let opts = {
        'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
        'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
        'page': 56, // {Integer} Page number. Defaults to 1.
        'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
    };

    let callback = function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data);
        }
    };
    api.getLoggedInAthleteActivities(opts, callback);
}