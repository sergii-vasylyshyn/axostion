const initClient = () => {
    gapi.client.init({
        apiKey: "AIzaSyA4AgMpx_tppq5Jx0MJLqyOXEyG86fo1wA",
        clientId: "1016671593130-0rq9r788h513nm0ga9i3cn1d090n9v6c.apps.googleusercontent.com",
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: 'https://www.googleapis.com/auth/drive.appfolder'

    }).then(() => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(onSignIn)
        initApp()

    }, error => {
        console.log('Failed to init GAPI client', error)
        initApp({showAlert: 'google-init-failed-alert'})
    })
}

const isGapiLoaded = () => {
    return gapi && gapi.auth2
}

const logIn = () => {
    if (isGapiLoaded()) {
        gapi.auth2.getAuthInstance().signIn()
    }
}

const logOut = () => {
    if (isGapiLoaded()) {
        gapi.auth2.getAuthInstance().signOut()
    }
}

const isLoggedIn = () => {
    return isGapiLoaded() && gapi.auth2.getAuthInstance().isSignedIn.get()
}

const onSignIn = () => {
    if (isLoggedIn()) {

    } else {
        
    }
}

const prom = (gapiCall, argObj) => {
    return new Promise((resolve, reject) => {
        gapiCall(argObj).then(resp => {
            if (resp && (resp.status < 200 || resp.status > 299)) {
                console.log('GAPI call returned bad status', resp)
                reject(resp)
            } else {
                resolve(resp)
            }
        }, err => {
            console.log('GAPI call failed', err)
            reject(err)
        })
    })
}