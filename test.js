import React, { useState, useEffect } from 'react';

// https://javascript.plainenglish.io/strava-api-react-app-326e63527e2c

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [activities, setActivities] = useState({})

    //Strava Credentials
    let clientID = "67034";
    let clientSecret = "d8342e4105460e9f836cac614f3e4263eca1f0c1 ";

    // refresh token and call address
    const refreshToken = "41e1e358ee38cb1cbb99d3a9dd75cee3ae283310";
    const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

    // endpoint for read-all activities. temporary token is added in getActivities()
    const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`

    // Use refresh token to get current access token
    useEffect(() => {
        fetch(callRefresh, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(result => getActivities(result.access_token))
    }, [callRefresh])

    // use current access token to call all activities
    function getActivities(access){
        // console.log(callActivities + access)
        fetch(callActivities + access)
            .then(res => res.json())
            .then(data => setActivities(data), setIsLoading(prev => !prev))
            .catch(e => console.log(e))
    }

    function showActivities(){
        if(isLoading) return <>LOADING</>
        if(!isLoading) {
            console.log(activities)
            return activities.length
        }
    }

    return (
        <div className="App">
            {showActivities()}
        </div>
    );
}

export default App;