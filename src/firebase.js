import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyATy4bl5LQQj_i7tlUFYQUcazRZ7FjSiCQ',
  authDomain: 'bake-tracker.firebaseapp.com',
  databaseURL: 'https://bake-tracker.firebaseio.com',
  projectId: 'bake-tracker',
  storageBucket: 'bake-tracker.appspot.com',
  messagingSenderId: '293905641547',
  appId: '1:293905641547:web:78c53ff3ac9c1297e95dce',
  measurementId: 'G-X25YKCY803'
}
firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
