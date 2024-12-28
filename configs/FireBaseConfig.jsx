import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_API, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGE_SENDING_ID, APP_ID } from "@/constants/Keys"

const firebaseConfig = {
  apiKey: FIREBASE_API,
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
