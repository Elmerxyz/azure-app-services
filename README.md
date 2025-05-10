# API de Productos con Express y Sequelize

## Descripción
Una aplicación web con API REST desarrollada con Express.js, que implementa un sistema CRUD completo para gestionar productos, utilizando Sequelize como ORM para la conexión con bases de datos MySQL. La aplicación sigue el patrón de arquitectura MVC (Modelo-Vista-Controlador).

## Tecnologías utilizadas
- **Backend**: Node.js, Express.js
- **ORM**: Sequelize
- **Base de datos**: MySQL
- **Vistas**: EJS (plantillas)
- **Estilos**: CSS personalizado
- **Despliegue**: Azure App Service, Azure VM para MySQL


## Requisitos previos
- Node.js (v18 o superior)
- MySQL (local o en Azure)
- Git (opcional)

## Configuración inicial

### 1. Instalación de dependencias
```bash
npm install
```
# Configuración de la base de datos
La aplicación utiliza MySQL como base de datos. Puedes configurarla:

Opción 1: MySQL local con Docker
```
docker run --name productos_mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=productos_db -e MYSQL_USER=user -e MYSQL_PASSWORD=password -p 3306:3306 -d mysql:8.0
```

Funcionalidades
Listado de productos
Visualización detallada de productos
Creación de nuevos productos
Edición de productos existentes
Eliminación de productos
API REST completa para integración con otros sistemas
Endpoints de la API
GET /api/productos: Obtener todos los productos
POST /api/productos: Crear nuevo producto
GET /api/productos/:id: Obtener un producto por ID
PUT /api/productos/:id: Actualizar un producto
DELETE /api/productos/:id: Eliminar un producto
