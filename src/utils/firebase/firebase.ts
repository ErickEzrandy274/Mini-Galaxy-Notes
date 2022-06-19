// reference link: https://www.youtube.com/watch?v=v0TKYSkZ2tI
// reference link: https://www.npmjs.com/package/firebase
import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyANFmUTAXfwP2712AVEBEI0Lx8V03Abs7U",
	authDomain: "mini-notes-app.firebaseapp.com",
	projectId: "mini-notes-app",
	storageBucket: "mini-notes-app.appspot.com",
	messagingSenderId: "791834748637",
	appId: "1:791834748637:web:08ff1f2ff2cd9805f15d34",
	measurementId: "G-WHVSKEMKPQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase