# Proyecto Mailhog: Gestión de Alumnos con Docker

Este proyecto clona el repositorio de Mailhog y adapta su estructura para implementar un sistema de gestión de alumnos utilizando contenedores Docker. A continuación, se detalla la organización y configuración del proyecto.

## Estructura del Proyecto

El proyecto consta de tres contenedores Docker que alojan:

1. **Backend**: Maneja la lógica de conexión con la base de datos y la API.
2. **Frontend**: Proporciona una interfaz web para visualizar los datos.
3. **Base de Datos**: Almacena la información de los alumnos.

## Configuración de los Contenedores

### Base de Datos

- **Directorio**: `db/`
- **Archivo `init.sql`**: Contiene las sentencias para:
  - Crear la tabla necesaria.
  - Insertar registros de alumnos.
- **Dockerfile**: Configura la imagen de la base de datos con:
  - Credenciales (nombre de usuario y contraseña).
  - Configuración para inicializar la base de datos.

### Backend

- **Directorio**: `backend/`
- **Archivo `Dockerfile`**: Reutilizado del proyecto clonado.
- **Archivo PHP**: Implementa:
  - Conexión con la base de datos.
  - Un método que devuelve los datos en formato JSON.

### Frontend

- **Directorio**: `frontend/`
- **Archivo `Dockerfile`**: Reutilizado del proyecto clonado.
- **Archivos HTML y JavaScript**:
  - El HTML incluye una tabla para mostrar los datos.
  - El JavaScript realiza una llamada `fetch` a la API para obtener los alumnos desde el backend y los renderiza en la tabla.

## Configuración de `docker-compose.yml`

- **Ubicación**: En el directorio raíz.
- **Contenedores Definidos**:
  - Base de datos.
  - Backend.
  - Frontend.
- **Configuración de Puertos**:
  - Backend: Mapeado al puerto correspondiente para permitir el acceso de la API.
  - Frontend: Accesible desde `localhost:8080`.

## Cómo Generar y Ejecutar el Proyecto

1. **Crear los contenedores**:
   ```bash
   docker-compose up
