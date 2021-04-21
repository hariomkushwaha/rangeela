import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {  
apiKey: "AIzaSyCnwbxJ8UaLWZPeR1XsBWpbsnsTgUH8Iho",
authDomain: "rangeela-naal.firebaseapp.com",
projectId: "rangeela-naal",
storageBucket: "rangeela-naal.appspot.com",
messagingSenderId: "410328338458",
appId: "1:410328338458:web:94dd91cb84c4c05ace81a3",
measurementId: "G-9L4KZZPZD1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


 