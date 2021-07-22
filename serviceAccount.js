firebaseServiceAccount = {
    type: process.env.REACT_APP_FIREBASE_TYPE,
    project_id: process.env.REACT_APP_FIREBASE_PROJECT_D,
    private_key_id: process.env.REACT_APP_FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.REACT_APP_FIREBASE_PRIVATE_KEY,
    client_email: process.env.REACT_APP_FIREBASE_CLIENT_EMAIL,
    client_id: process.env.REACT_APP_FIREBASE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3ql7h%40shoppee-20050.iam.gserviceaccount.com',
};
