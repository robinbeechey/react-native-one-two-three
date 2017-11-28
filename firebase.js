import * as firebase from "firebase";
var config = require('./firebase.config');

var fConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseUrl: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId
};

export default !firebase.apps.length ? firebase.initializeApp(fConfig).firebase_ : firebase.app().firebase_;