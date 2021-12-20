import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

console.log(firebase);

const config = {
  apiKey: 'AIzaSyDeR1Oe3mawPoIlQeKZRf_n6ZwVcHQ2nK8',
  authDomain: 'crown-db-1b421.firebaseapp.com',
  projectId: 'crown-db-1b421',
  storageBucket: 'crown-db-1b421.appspot.com',
  messagingSenderId: '628002523510',
  appId: '1:628002523510:web:740c70ddd4cd9d90225257',
  measurementId: 'G-QSKBW5JCEH',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
