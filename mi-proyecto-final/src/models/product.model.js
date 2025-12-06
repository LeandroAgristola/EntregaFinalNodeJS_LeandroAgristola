import { db } from '../config/db.js'; // Importamos la conexión que creamos antes
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc } from 'firebase/firestore';

// Referencia a la colección "products" en tu base de datos
const productsCollection = collection(db, 'products');

// 1. Obtener todos los productos
export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((doc) => {
        // Unimos el ID de firebase con los datos del producto
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

// 2. Obtener un producto por ID
export async function getProductById(id) {
    const productRef = doc(productsCollection, id);
    const productSnap = await getDoc(productRef);
    
    if (productSnap.exists()) {
        return { id: productSnap.id, ...productSnap.data() };
    } else {
        return null; // Si no existe, devolvemos null
    }
}

// 3. Crear un nuevo producto
export async function createProduct(productData) {
    // Firebase crea el ID automáticamente
    const docRef = await addDoc(productsCollection, productData);
    return docRef.id; // Devolvemos el ID del nuevo producto
}

// 4. Eliminar un producto
export async function deleteProduct(id) {
    const productRef = doc(productsCollection, id);
    await deleteDoc(productRef);
    return true;
}