import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || 'palabra_secreta_temporal';

export const verifyToken = (req, res, next) => {
    // El token suele venir en el Header "Authorization"
    const authHeader = req.headers['authorization'];
    
    // Si no hay header, error 403
    if (!authHeader) {
        return res.status(403).json({ message: 'Se requiere un token de autenticación' });
    }

    // El formato suele ser "Bearer eyJhbGci..." así que separamos el texto
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Formato de token inválido' });
    }

    try {
        // Verificamos el token con nuestra llave maestra
        const decoded = jwt.verify(token, SECRET_KEY);
        
        // Si pasa, guardamos los datos del usuario en la request por si los necesitamos luego
        req.user = decoded;
        
        // ¡Adelante! Continúa a la siguiente función (el controlador)
        next(); 
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
};