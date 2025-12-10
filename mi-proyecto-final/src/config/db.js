import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Inicialización de la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Exportación de la instancia de Firestore para interacción con la BD
export const db = getFirestore(app);

// Log informativo de conexión exitosa (Opcional en producción)
if (process.env.NODE_ENV !== 'production') {
    console.log("Conexión establecida con Firebase Firestore");
}