import { db } from '../config/db.js';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    
    // Mapeo de documentos Firestore a objetos planos con ID incluido
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export async function getProductById(id) {
    const productRef = doc(productsCollection, id);
    const productSnap = await getDoc(productRef);
    
    if (productSnap.exists()) {
        return { id: productSnap.id, ...productSnap.data() };
    } else {
        return null;
    }
}

export async function createProduct(productData) {
    // La creación genera automáticamente un ID único en Firestore
    const docRef = await addDoc(productsCollection, productData);
    return docRef.id;
}

export async function deleteProduct(id) {
    const productRef = doc(productsCollection, id);
    await deleteDoc(productRef);
    return true;
}