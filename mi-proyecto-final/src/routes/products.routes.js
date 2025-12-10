import { Router } from 'express';
import * as ProductController from '../controllers/product.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Rutas de acceso público (Lectura)
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);

// Rutas protegidas (Escritura) - Requieren autenticación Bearer
router.post('/create', verifyToken, ProductController.create);
router.delete('/:id', verifyToken, ProductController.remove);

export default router;