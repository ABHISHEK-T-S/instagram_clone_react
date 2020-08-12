import firebase from 'firebase';
const firebaseApp =firebase.initializeApp(
    {
        // const firebaseConfig = {
            apiKey: "AIzaSyDf7RP1NNk84GtJaRcB8DfK8PfNXgAANCs",
            authDomain: "instagram-clone-2ed7f.firebaseapp.com",
            databaseURL: "https://instagram-clone-2ed7f.firebaseio.com",
            projectId: "instagram-clone-2ed7f",
            storageBucket: "instagram-clone-2ed7f.appspot.com",
            messagingSenderId: "1056355468340",
            appId: "1:1056355468340:web:ffc877b57c0fdae6037661",
            measurementId: "G-ZL7L8DH6Z2"
        //   };
    }
)
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export {db,auth,storage,firebaseApp} 