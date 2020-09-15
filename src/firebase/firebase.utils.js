import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDorBl447hyJSpUAib3GEEdkqdMYJ4zUjs',
  authDomain: 'clothing-db-a969b.firebaseapp.com',
  databaseURL: 'https://clothing-db-a969b.firebaseio.com',
  projectId: 'clothing-db-a969b',
  storageBucket: 'clothing-db-a969b.appspot.com',
  messagingSenderId: '751284447923',
  appId: '1:751284447923:web:ce403c8942e5d55238dec6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
