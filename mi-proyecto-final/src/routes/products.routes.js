import { Router } from 'express';
import * as ProductController from '../controllers/product.controller.js';

const router = Router();

// Definimos las rutas según el Requerimiento #4
router.get('/', ProductController.getAll);           // GET /api/products
router.get('/:id', ProductController.getById);       // GET /api/products/:id
router.post('/create', ProductController.create);    // POST /api/products/create (Ojo: el requerimiento pide /create explícitamente)
router.delete('/:id', ProductController.remove);     // DELETE /api/products/:id

export default router;