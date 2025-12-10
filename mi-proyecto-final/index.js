// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRoutes from './src/routes/products.routes.js'; // Importamos rutas de productos
import authRoutes from './src/routes/auth.routes.js';
// Importamos rutas (Las crearemos en el siguiente paso, por ahora pueden dar error si no existen, pero esta es la estructura)
// import authRoutes from './src/routes/auth.routes.js';

dotenv.config(); // Habilita el uso de variables de entorno

const app = express();
const PORT = process.env.PORT || 8080;

// --- MIDDLEWARES (Configuraciones Globales) ---

// 1. Habilitar CORS para que el front pueda entrar
app.use(cors()); 

// 2. Body Parser: Entender JSON en las peticiones (Req #3)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// --- RUTAS ---
// Aquí conectaremos el "Menú" más adelante
app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);

// Ruta de prueba para ver si el servidor vive
app.get('/', (req, res) => {
    res.send('¡Servidor del Proyecto Final funcionando! 🚀');
});

// --- MANEJO DE ERRORES (Req #3 - 404) ---
// Si llega una petición a una ruta que no definimos arriba:
app.use((req, res, next) => {
    res.status(404).json({
        message: "Ups, la ruta solicitada no existe. Revisa la URL."
    });
});

// Manejo de errores internos (500)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Algo salió mal en el servidor." });
});

// --- INICIAR SERVIDOR ---
app.listen(PORT, () => {
    console.log(`\nServidor escuchando en http://localhost:${PORT}`);
});