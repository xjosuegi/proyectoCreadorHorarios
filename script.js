// --- 1. Datos de prueba (simulando materias) ---
// Cada materia tiene: nombre, día (0=Lunes, 1=Martes...), hora de inicio y duración (en horas)
const materias = [
    { nombre: "Cálculo I", dia: 0, horaInicio: 8, duracion: 2 }, // Lunes 8-10
    { nombre: "Programación", dia: 1, horaInicio: 10, duracion: 2 }, // Martes 10-12
    { nombre: "Física", dia: 2, horaInicio: 14, duracion: 3 }, // Miércoles 14-17
    { nombre: "Álgebra", dia: 3, horaInicio: 9, duracion: 1 }, // Jueves 9-10
    { nombre: "Inglés", dia: 4, horaInicio: 16, duracion: 2 }, // Viernes 16-18
    { nombre: "Deportes", dia: 5, horaInicio: 8, duracion: 2 }, // Sábado 8-10
];

// --- 2. Función para llenar la tabla ---
function llenarHorario() {
    // Obtenemos la tabla
    const tabla = document.querySelector("table");
    
    // Recorremos cada materia
    materias.forEach(materia => {
        // Calcular la fila de inicio (basado en la hora)
        // Nuestras filas tienen id="0700", "0800", etc.
        // Si la materia empieza a las 8, buscamos la fila con id="0800"
        const idFila = String(materia.horaInicio).padStart(2, '0') + "00";
        const fila = document.getElementById(idFila);
        
        if (!fila) {
            console.error(`No se encontró la fila para la hora ${materia.horaInicio}:00`);
            return;
        }

        // Las celdas de la fila son: [0]=Hora, [1]=Lunes, [2]=Martes, [3]=Miércoles, [4]=Jueves, [5]=Viernes, [6]=Sábado
        // Como 'dia' va de 0 a 5, sumamos 1 para obtener el índice de la columna correcta
        const columna = materia.dia + 1;
        const celda = fila.cells[columna];

        if (celda) {
            // Poner el nombre de la materia en la celda
            celda.textContent = materia.nombre;
            // Opcional: agregar estilos para que se vea mejor
            celda.style.backgroundColor = "#d4edda"; // verde claro
            celda.style.textAlign = "center";
            celda.style.fontWeight = "bold";
        } else {
            console.error(`No se encontró la columna ${columna} en la fila ${idFila}`);
        }
    });
}

// --- 3. Ejecutar la función cuando la página cargue ---
document.addEventListener("DOMContentLoaded", llenarHorario);