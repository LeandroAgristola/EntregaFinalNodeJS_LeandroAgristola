import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Usamos una clave secreta para firmar los "pases VIP" (Tokens).
// Lo ideal es que esto esté en tu archivo .env como SECRET_KEY=mi_clave_secreta
const SECRET_KEY = process.env.SECRET_KEY || 'palabra_secreta_temporal'; 

export const login = (req, res) => {
    const { email, password } = req.body;

    // Validación Hardcodeada (Según tu consigna)
    // El usuario debe ser test@gmail.com y pass 123456
    if (email === 'test@gmail.com' && password === '123456') {
        
        // Creamos el Token (El pase VIP)
        // expiresIn: '1h' significa que dura 1 hora.
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

        return res.status(200).json({ 
            message: 'Login exitoso', 
            token: token 
        });
    }

    // Si la contraseña está mal:
    return res.status(401).json({ message: 'Credenciales inválidas (401)' });
};