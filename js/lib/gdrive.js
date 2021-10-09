function initClient() {
    gapi.client.init({
        // Ваш ключ API
        apiKey: "AIzaSyA4AgMpx_tppq5Jx0MJLqyOXEyG86fo1wA",

        // Ваш идентификатор клиента
        clientId: "1016671593130-0rq9r788h513nm0ga9i3cn1d090n9v6c.apps.googleusercontent.com",

        // Указание, что мы хотим использовать Google Drive API v3
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],

        // Запрос доступа к application data folder (см. ниже)
        scope: 'https://www.googleapis.com/auth/drive.appfolder'

    }).then(() => {
        // Начинаем ловить события логина/логаута (см. ниже)
        gapi.auth2.getAuthInstance().isSignedIn.listen(onSignIn)
        // инициализация приложения
        initApp()

    }, error => {
        console.log('Failed to init GAPI client', error)
        // работаем без гугла
        initApp({showAlert: 'google-init-failed-alert'})
    })
}

function isGapiLoaded() {
    return gapi && gapi.auth2
}

function logIn() {
    if (isGapiLoaded()) {
        // откроется стандартное окно Google с выбором аккаунта
        gapi.auth2.getAuthInstance().signIn()
    }
}

function logOut() {
    if (isGapiLoaded()) {
        gapi.auth2.getAuthInstance().signOut()
    }
}

function isLoggedIn() {
    return isGapiLoaded() && gapi.auth2.getAuthInstance().isSignedIn.get()
}

function onSignIn() {
    if (isLoggedIn()) {
        // пользователь зашел
    } else {
        // пользователь вышел
    }
    // пример реализации см. ниже в разделе "Синхронизация"
}