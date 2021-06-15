const auth_link = "https://www.strava.com/oauth/token";


auth_token = location.search;
auth_token = cleanupAuthToken(auth_token);


let access_token = null;
let refresh_token = null;

getTokens(auth_token).then(function(res){

    access_token = res.access_token;
    refresh_token = res.refresh_token;

    getActivities(res);

});

function cleanupAuthToken(str){
    return str.split("&")[1].slice(5);
}

function getActivities(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}


async function getTokens(auth_token){
    const response = await fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            client_id: '67034',
            client_secret: 'd8342e4105460e9f836cac614f3e4263eca1f0c1',
            code: auth_token,
            grant_type: 'authorization_code'
        })
    })

    return response.json();
}

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            client_id: '67034',
            client_secret: 'd8342e4105460e9f836cac614f3e4263eca1f0c1 ',
            refresh_token: refresh_token,
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(res => getActivities(res))
}