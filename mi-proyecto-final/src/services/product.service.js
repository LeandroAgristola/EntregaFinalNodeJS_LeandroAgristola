import * as ProductModel from '../models/product.model.js';

export async function getProducts() {
    return await ProductModel.getAllProducts();
}

export async function getProduct(id) {
    return await ProductModel.getProductById(id);
}

export async function createNewProduct(data) {
    // Aquí se puede implementar lógica de negocio adicional (validaciones extendidas, cálculos, etc.)
    return await ProductModel.createProduct(data);
}

export async function removeProduct(id) {
    return await ProductModel.deleteProduct(id);
}