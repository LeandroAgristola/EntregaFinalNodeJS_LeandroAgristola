import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY; 

export const login = (req, res) => {
    const { email, password } = req.body;

    // Validación de credenciales contra valores estáticos (Simulación de DB)
    if (email === 'test@gmail.com' && password === '123456') {
        
        // Generación del payload y firma del token con expiración de 1 hora
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

        return res.status(200).json({ 
            message: 'Autenticación exitosa', 
            token: token 
        });
    }

    return res.status(401).json({ message: 'Credenciales inválidas' });
};