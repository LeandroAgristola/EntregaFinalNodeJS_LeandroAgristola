import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';

const router = Router();

// Definición de endpoints de autenticación

// POST /auth/login - Valida credenciales y retorna un token de acceso (JWT)
router.post('/login', login);

export default router;