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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


 