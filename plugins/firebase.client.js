// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { initializeFirestore, persistentLocalCache, persistentSingleTabManager } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// export default defineNuxtPlugin(nuxtApp => {
//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//     apiKey: "AIzaSyCJhfAHUl49KxcJuTJadigqB99wcI0wguk",
//     authDomain: "abu-library-01.firebaseapp.com",
//     projectId: "abu-library-01",
//     storageBucket: "abu-library-01.firebasestorage.app",
//     messagingSenderId: "339639009902",
//     appId: "1:339639009902:web:07dd1554dbd14abc715c7f",
//     measurementId: "G-4PFFS3ZJST"
//     };

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);

//     initializeFirestore(app, 
//         {localCache: 
//             persistentLocalCache(/*settings*/{tabManager: persistentSingleTabManager()}),
//         },
//     );

//     // Initialize Firebase
//     const db = getFirestore(app);
//     const auth = getAuth(app);
//     const provider = new GoogleAuthProvider();

//     nuxtApp.vueApp.provide('auth', auth)
//     nuxtApp.provide('auth', auth)

//     nuxtApp.vueApp.provide('firestore', db)
//     nuxtApp.provide('firestore', db)

//     nuxtApp.vueApp.provide('firestore', provider)
//     nuxtApp.provide('firestore', provider)
// })