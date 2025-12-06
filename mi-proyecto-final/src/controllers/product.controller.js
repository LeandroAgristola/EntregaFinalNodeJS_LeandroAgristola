import * as ProductService from '../services/product.service.js';

export async function getAll(req, res) {
    try {
        const products = await ProductService.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error: error.message });
    }
}

export async function getById(req, res) {
    try {
        const { id } = req.params; // Obtenemos el ID de la URL
        const product = await ProductService.getProduct(id);
        
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error: error.message });
    }
}

export async function create(req, res) {
    try {
        const productData = req.body; // Los datos vienen en el cuerpo de la petición (JSON)
        // Validacion básica
        if (!productData.name || !productData.price) {
            return res.status(400).json({ message: "Faltan datos obligatorios (name, price)" });
        }

        const newId = await ProductService.createNewProduct(productData);
        res.status(201).json({ message: "Producto creado con éxito", id: newId });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto", error: error.message });
    }
}

export async function remove(req, res) {
    try {
        const { id } = req.params;
        await ProductService.removeProduct(id);
        res.status(200).json({ message: "Producto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto", error: error.message });
    }
}