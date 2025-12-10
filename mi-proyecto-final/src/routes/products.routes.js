import { Router } from 'express';
import * as ProductController from '../controllers/product.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Rutas PÚBLICAS (Cualquiera puede ver productos)
router.get('/', ProductController.getAll);           
router.get('/:id', ProductController.getById);       

// Rutas PRIVADAS (Solo con Token se puede crear o borrar)
// Agregamos 'verifyToken' antes del controlador
router.post('/create', verifyToken, ProductController.create);    
router.delete('/:id', verifyToken, ProductController.remove);     

export default router;