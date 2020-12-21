import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDcGN89n_hvzoCPWdpsm1I8EPZvNobn6JI',
  authDomain: 'marketplace-hackathon.firebaseapp.com',
  projectId: 'marketplace-hackathon',
  storageBucket: 'marketplace-hackathon.appspot.com',
  messagingSenderId: '2011659475',
  appId: '1:2011659475:web:c64ad5403f700281cf2826',
});

export const auth = app.auth();
export default app;
