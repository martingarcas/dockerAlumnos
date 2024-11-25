<?php

#use PDO;
#use PDOException;

class Conexion {

	private static $conexion = null;

	public static function getConection() {
		// Verificamos si la conexión ya está establecida
		if (self::$conexion == null) {
			try {
				// Establecemos las opciones para la conexión
				$opciones = array(
					PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", // Configuración para usar UTF-8
					PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Configuración para manejar excepciones
					PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC // Configuración para el modo de recuperación de datos
				);

				// Creamos la conexión a la base de datos
				self::$conexion = new PDO('mysql:host=db;dbname=docker', 'root', 'root', $opciones);

			} catch (PDOException $e) {
				// Si hay un error, lanzamos una excepción con el mensaje
				throw new PDOException('Error de conexión: ' . $e->getMessage());
			}
		}

		return self::$conexion;
	}
}

function getAll() {

    $con = Conexion::getConection();

    $stm = $con->prepare("SELECT * FROM alumnos");
    $stm->execute();

    $alumnos = $stm->fetchAll();
            
    return $alumnos;
    
}

function showAlumnos() {

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');

    $alumnos        = getAll();
    $alumnosArray   = [];

    foreach ($alumnos as $alumno) {

        $alumnosArray[] = array($alumno['id'], $alumno['nombre'], $alumno['edad']);
    }

    // Si todo fue exitoso, respondemos con los datos necesarios para la redirección
    http_response_code(200);
    return json_encode([
        'success' 	=> true,
        'alumnos' 	=> $alumnosArray,
    ]);
}

echo showAlumnos();


?>