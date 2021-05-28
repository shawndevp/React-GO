import dotenv from 'dotenv'
import firebase from "firebase";
dotenv.config();

console.log(process.env.REACT_APIKEY)


/* const firebaseConfig = {
    apiKey: REACT_APIKEY,
    authDomain: REACT_AUTHDOMAIN,
    projectId: REACT_PROJECTID,
    storageBucket: "wie20sfb.appspot.com",
    messagingSenderId: "420296779208",
    appId: "1:420296779208:web:770d24edf3a7ded6320cfd"
  }; */

const firebaseConfig = {
    apiKey: "AIzaSyCUI7Hu8WP8EphC3w3h_gECtPSv7d3B8J8",
    authDomain: "wie20sfb.firebaseapp.com",
    projectId: "wie20sfb",
    storageBucket: "wie20sfb.appspot.com",
    messagingSenderId: "420296779208",
    appId: "1:420296779208:web:770d24edf3a7ded6320cfd"
  };  


const firebaseapp= firebase.initializeApp(firebaseConfig);

/* console.log(firebaseapp) */

const fireStore = firebaseapp.firestore()

export default fireStore



  //gitignore, separat fil med apikeys,-> .env