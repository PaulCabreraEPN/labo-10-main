
# Sistema de Gestión de Denuncias

Este proyecto es un sistema de gestión de denuncias diseñado para permitir a los usuarios registrar, consultar, actualizar y eliminar quejas relacionadas con incidentes en su comunidad. Utiliza una arquitectura basada en **Node.js** y **Express**, y almacena los datos en formato **JSON**.

## Características

- **Registro de Denuncias**: Los usuarios pueden registrar nuevas denuncias proporcionando información relevante como el tipo de incidente, la ubicación y la hora.
- **Consulta de Denuncias**: Permite a los usuarios ver todas las denuncias registradas en el sistema.
- **Actualización de Denuncias**: Los usuarios pueden actualizar la información de una denuncia existente.
- **Eliminación de Denuncias**: Los usuarios tienen la opción de eliminar una denuncia que ya no es necesaria.
- **Autenticación de Usuarios**: El sistema incluye un middleware para la autenticación de usuarios mediante tokens JWT, asegurando que solo los usuarios autorizados puedan realizar ciertas acciones.

## Estructura del Proyecto

```
src/
├── controllers/     # Controladores que manejan la lógica de negocio para las denuncias.
├── middlewares/     # Middleware para autenticación y manejo de tokens.
├── models/          # Modelos que definen la estructura y las operaciones relacionadas con las denuncias.
├── routers/         # Rutas de la API para manejar las solicitudes de los usuarios y las denuncias.
└── server.js        # Archivo principal que inicializa el servidor y define las rutas.
bdd.json             # Archivo que contiene los datos de usuarios y denuncias en formato JSON.
```

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/PaulCabreraEPN/labo-10-main.git
   ```

2. **Navegar al directorio del proyecto**:

   ```bash
   cd <nombre-del-directorio>
   ```

3. **Instalar las dependencias**:

   ```bash
   npm install
   ```

4. **Iniciar el servidor**:

   ```bash
   npm start
   ```

   El servidor se ejecutará en [http://localhost:3000](http://localhost:3000).

   ```bash
   npm run bdd
   ```
   Para ejecutar el servidor de bdd

## Uso

- **Registrar una Denuncia**: Realizar una solicitud `POST` a `/api/complaints` con los datos de la denuncia.
- **Consultar Denuncias**: Realizar una solicitud `GET` a `/api/complaints` para obtener todas las denuncias.
- **Actualizar una Denuncia**: Realizar una solicitud `PATCH` a `/api/complaints/:id` con los datos actualizados.
- **Eliminar una Denuncia**: Realizar una solicitud `DELETE` a `/api/complaints/:id` para eliminar la denuncia especificada.

## Autores
- **Paul Cabrera**
- **Mathias Teran**
- **Mireya García**
- **Mateo Torres**
- **Ariel Catucuamba**
- **Anthony Astudillo**

