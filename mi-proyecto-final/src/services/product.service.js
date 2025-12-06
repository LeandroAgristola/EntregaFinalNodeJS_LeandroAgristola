import * as ProductModel from '../models/product.model.js';

export async function getProducts() {
    return await ProductModel.getAllProducts();
}

export async function getProduct(id) {
    return await ProductModel.getProductById(id);
}

export async function createNewProduct(data) {
    // Aquí podríamos validar que data.price > 0, por ejemplo.
    return await ProductModel.createProduct(data);
}

export async function removeProduct(id) {
    return await ProductModel.deleteProduct(id);
}