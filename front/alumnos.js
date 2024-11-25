document.addEventListener('DOMContentLoaded', function () {
   
    let alumnosCnt = document.querySelector('.listado-alumnos');
    
    async function solicitudApi() {

        try {
            const response = await fetch('http://localhost:8081/alumnos.php', { method: 'GET'});
            const data = await response.json();

            let alumnos = data.alumnos;
            // Crear una tabla
            let tabla = document.createElement('table');
            tabla.style.borderCollapse = 'collapse';
            tabla.style.width = '100%';
            tabla.style.margin = '20px 0';

            // Crear cabeceras de la tabla
            let cabecera = document.createElement('thead');
            cabecera.innerHTML = `
                <tr>
                    <th style="border: 1px solid #ccc; padding: 8px;">ID</th>
                    <th style="border: 1px solid #ccc; padding: 8px;">Nombre</th>
                    <th style="border: 1px solid #ccc; padding: 8px;">Edad</th>
                </tr>
            `;


            tabla.appendChild(cabecera);

            // Crear cuerpo de la tabla
            let cuerpo = document.createElement('tbody');

            alumnos.forEach(alumno => {
                let fila = document.createElement('tr');
                fila.innerHTML = `
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${alumno[0]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${alumno[1]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${alumno[2]}</td>
                `;
                cuerpo.appendChild(fila);
            });

            tabla.appendChild(cuerpo);

            // Agregar la tabla al contenedor
            alumnosCnt.appendChild(tabla);
        


        } catch (error) {
            console.error('Error:', error);
            alumnosCnt.innerHTML = `<p style="color: red;">Hubo un error al cargar los datos.</p>`;
            
        }
    }

    solicitudApi();
});