import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
    // Extracción del token del header 'Authorization'
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(403).json({ message: 'Token de autenticación no proporcionado' });
    }

    // El formato esperado es 'Bearer <token>', separamos para obtener solo el token
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Formato de token inválido' });
    }

    try {
        // Verificación de la firma y expiración del token
        const decoded = jwt.verify(token, SECRET_KEY);
        
        // Adjuntamos la info del usuario decodificada a la request para uso posterior
        req.user = decoded;
        
        next(); 
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
};