import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRoutes from './src/routes/products.routes.js'; 
import authRoutes from './src/routes/auth.routes.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// --- Configuración de Middlewares Globales ---

// Habilitar CORS para peticiones desde clientes externos
app.use(cors()); 

// Parseo de bodies en formato JSON y URL-encoded
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// --- Definición de Rutas ---
app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);

// Endpoint de health check
app.get('/', (req, res) => {
    res.send('API Rest Proyecto Final - Funcionando');
});

// --- Manejo Global de Errores ---

// Middleware para rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({
        message: "Recurso no encontrado"
    });
});

// Middleware de error de servidor (500)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Error interno del servidor" });
});

// Inicialización del servidor (Solo para entorno local, Vercel gestiona esto automáticamente)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Servidor activo en http://localhost:${PORT}`);
    });
}

// Exportar app para funciones serverless (Vercel)
export default app;