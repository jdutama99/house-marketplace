import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAVgkmh5JHgtiMz9vxSRerOP0--G8xGeOE',
  authDomain: 'house-marketplace-app-5cc67.firebaseapp.com',
  projectId: 'house-marketplace-app-5cc67',
  storageBucket: 'house-marketplace-app-5cc67.appspot.com',
  messagingSenderId: '317495703956',
  appId: '1:317495703956:web:11599182db3dd9498a3781',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
