# API Rest para E-commerce (Backend)

Este proyecto es el trabajo final para el curso de Backend con Node.js. Consiste en una API RESTful diseñada para administrar el catálogo de productos de un e-commerce, implementando persistencia de datos en la nube y autenticación segura.

## 🚀 Características Principales

* **Arquitectura por Capas:** Separación clara entre Rutas, Controladores, Servicios y Modelos (DAO).
* **Base de Datos NoSQL:** Conexión persistente con **Firebase Firestore**.
* **Seguridad:** Autenticación de usuarios mediante **JWT (JSON Web Tokens)**.
* **Despliegue:** Configurado para serverless functions en **Vercel**.

## 🛠️ Tecnologías Utilizadas

* **Node.js** & **Express**
* **Firebase Admin SDK**
* **JSON Web Token (jsonwebtoken)**
* **Dotenv** (Manejo de variables de entorno)
* **Cors** & **Body-Parser**

## ⚙️ Instalación y Configuración Local

Si deseas correr este proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DE_TU_REPO>
    cd mi-proyecto-final
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables con tus propias credenciales de Firebase:

    ```env
    PORT=8080
    SECRET_KEY=palabra_secreta_para_jwt

    # Credenciales de Firebase (Obtenidas de la consola de Firebase)
    FIREBASE_API_KEY=...
    FIREBASE_AUTH_DOMAIN=...
    FIREBASE_PROJECT_ID=...
    FIREBASE_STORAGE_BUCKET=...
    FIREBASE_MESSAGING_SENDER_ID=...
    FIREBASE_APP_ID=...
    ```

4.  **Ejecutar el servidor:**
    ```bash
    npm start
    ```
    El servidor iniciará en `http://localhost:8080`.

## 🔐 Documentación de Endpoints

### Autenticación
* `POST /auth/login`: Recibe `{ email, password }` y devuelve un **Token Bearer**.
    * *Credenciales Test:* `test@gmail.com` / `123456`

### Productos
> **Nota:** Las rutas de creación y eliminación requieren el header `Authorization: Bearer <TU_TOKEN>`.

* `GET /api/products`: Listar todos los productos.
* `GET /api/products/:id`: Obtener detalle de un producto.
* `POST /api/products/create` (Privado): Crear producto.
    * Body: `{ "name": "Producto A", "price": 100, "stock": 10 }`
* `DELETE /api/products/:id` (Privado): Eliminar producto por ID.

## ☁️ Despliegue en Vercel

El proyecto incluye el archivo `vercel.json` necesario para el despliegue.
Recuerda configurar las **Environment Variables** en el panel de Vercel coincidiendo con las de tu archivo `.env` local.

---
**Alumno:** Leandro Agristola
**Curso:** Backend Node.js