import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCukTSmtVG4w-VijfWN3yjDb-4BsVBTRhQ",
  authDomain: "chatapp-3b80e.firebaseapp.com",
  projectId: "chatapp-3b80e",
  storageBucket: "chatapp-3b80e.appspot.com",
  messagingSenderId: "744494063523",
  appId: "1:744494063523:web:4dfb43ab734f1337514416"
};

export const app = initializeApp(firebaseConfig);