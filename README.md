# INGSOFTBACK — API de tareas con autenticación JWT

Backend REST desarrollado como parte de la materia **Ingeniería de Software I**. Permite registrar usuarios, iniciar sesión y administrar tareas mediante operaciones CRUD protegidas con JSON Web Tokens (JWT).

**Autor:** Mauricio Cifuentes Álvarez  
**Materia:** Ingeniería de Software I  
**Actividad:** Node.js – Express – Backend

## Tecnologías utilizadas

- **Node.js:** ejecución de JavaScript en el servidor.
- **Express:** creación de rutas y endpoints HTTP.
- **MongoDB:** almacenamiento de usuarios y tareas.
- **Mongoose:** definición de modelos y acceso a MongoDB.
- **JWT:** autenticación de usuarios mediante tokens.
- **Postman:** pruebas de las solicitudes y respuestas de la API.

## Funcionalidades

- Registro de usuarios.
- Inicio de sesión y generación de un token JWT.
- Protección de rutas que requieren autenticación.
- Creación, consulta, actualización y eliminación de tareas.
- Asociación de cada tarea con su usuario propietario.
- Restricción para impedir que un usuario modifique o elimine tareas de otro.
- Manejo de errores HTTP y validación de datos.

## Estructura del proyecto

```text
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── tareasController.js
│   └── usersController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── models/
│   ├── tareasModel.js
│   └── userModel.js
├── routes/
│   ├── tareasRoutes.js
│   └── usersRoutes.js
└── server.js

.env.example
.gitignore
package.json
package-lock.json
README.md
```

## Requisitos

- Node.js y npm instalados.
- Acceso a una base de datos MongoDB (local o MongoDB Atlas).
- Postman o cualquier cliente HTTP para probar la API.

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/MauricioCifuentes2000/INGSOFTBACK.git
   cd INGSOFTBACK
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto, tomando como referencia `.env.example`. Completar las variables con los nombres requeridos por `backend/config/db.js` y `backend/server.js`, usando credenciales propias. **No subir `.env` a GitHub.**

4. Iniciar el servidor:

   ```bash
   node backend/server.js
   ```

   En la configuración usada para las pruebas, la API escucha en `http://localhost:5050`.

## Endpoints

### Usuarios

| Método | Ruta | Descripción | Autenticación |
| --- | --- | --- | --- |
| `POST` | `/api/users` | Registrar usuario | No |
| `POST` | `/api/users/login` | Iniciar sesión y obtener JWT | No |
| `GET` | `/api/users/datos` | Consultar datos del usuario autenticado | Sí |

### Tareas

| Método | Ruta | Descripción | Autenticación |
| --- | --- | --- | --- |
| `GET` | `/api/tareas` | Listar las tareas del usuario autenticado | Sí |
| `POST` | `/api/tareas` | Crear una tarea del usuario autenticado | Sí |
| `PUT` | `/api/tareas/:id` | Actualizar una tarea propia | Sí |
| `DELETE` | `/api/tareas/:id` | Eliminar una tarea propia | Sí |

## Ejemplos de uso

### Registrar un usuario

**POST** `http://localhost:5050/api/users`

```json
{
  "name": "Usuario de prueba",
  "email": "usuario@ejemplo.com",
  "password": "una_contrasena_de_prueba"
}
```

### Iniciar sesión

**POST** `http://localhost:5050/api/users/login`

```json
{
  "email": "usuario@ejemplo.com",
  "password": "una_contrasena_de_prueba"
}
```

La respuesta incluye un token JWT que se utiliza para consultar las rutas protegidas.

### Crear una tarea

**POST** `http://localhost:5050/api/tareas`

**Header de autenticación:**

```text
Authorization: Bearer <TU_TOKEN_JWT>
```

**Body (JSON):**

```json
{
  "descripcion": "Estudiar autenticación JWT"
}
```

El nombre del campo es `descripcion`.

## Validaciones y seguridad

- Cuando falta el token de autenticación, las rutas protegidas responden con **401 Unauthorized**.
- Cuando el token es inválido, se rechaza el acceso.
- Cada usuario consulta exclusivamente sus propias tareas.
- Si un usuario intenta modificar o eliminar una tarea que no le pertenece, la API no realiza la operación y responde con **404 Not Found**.
- Las credenciales reales se almacenan en `.env`, que debe permanecer excluido del repositorio y de su historial de commits.

## Pruebas en Postman

Se realizaron pruebas funcionales de registro e inicio de sesión, uso de tokens JWT, creación y consulta de tareas, modificación y eliminación de registros, y aislamiento entre usuarios. Las solicitudes se probaron con respuestas HTTP esperadas, incluyendo **200 OK**, **201 Created**, **401 Unauthorized** y **404 Not Found**.

## Propósito académico

Este proyecto permite aplicar los conceptos de arquitectura backend, API REST, operaciones CRUD, persistencia con MongoDB, autenticación JWT y autorización basada en el usuario propietario de cada recurso.
