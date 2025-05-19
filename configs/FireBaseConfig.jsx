import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
<<<<<<< HEAD
import { GOOGLE_CLOUD_API, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGE_SENDING_ID, APP_ID } from "../constants/Keys";
=======
import { GOOGLE_CLOUD_API, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGE_SENDING_ID, APP_ID } from "./../constants/Keys"
>>>>>>> 5aaecb63745aea033836ede3cb42c2086831eb8d

const firebaseConfig = {
  apiKey: GOOGLE_CLOUD_API,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDING_ID,
  appId: APP_ID
};

export const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const firestore = getFirestore(app);
