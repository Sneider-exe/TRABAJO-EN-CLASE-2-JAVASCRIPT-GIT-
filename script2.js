let cronometro; // Declara una variable para mantener la referencia al intervalo del cronómetro.
let running = false; // Declara una variable booleana para rastrear si el cronómetro está en ejecución.
let tiempo = 0; // Declara una variable para rastrear el tiempo transcurrido en segundos.

function iniciarCronometro() { // Declara una función para iniciar o pausar el cronómetro.
    if (!running) { // Si el cronómetro no está en ejecución:
        running = true; // Cambia el estado a "en ejecución".
        cronometro = setInterval(actualizarCronometro, 1000); // Inicia un intervalo que llama a la función actualizarCronometro cada segundo.
        document.getElementById("start").textContent = "Pausa"; // Cambia el texto del botón de inicio a "Pausa".
    } else { // Si el cronómetro está en ejecución:
        running = false; // Cambia el estado a "no en ejecución".
        clearInterval(cronometro); // Detiene el intervalo del cronómetro.
        document.getElementById("start").textContent = "Continuar"; // Cambia el texto del botón de inicio a "Continuar".
    }
}

function detenerCronometro() { // Declara una función para detener el cronómetro.
    running = false; // Cambia el estado a "no en ejecución".
    clearInterval(cronometro); // Detiene el intervalo del cronómetro.
    document.getElementById("start").textContent = "Iniciar"; // Cambia el texto del botón de inicio a "Iniciar".
}

function reiniciarCronometro() { // Declara una función para reiniciar el cronómetro.
    tiempo = 0; // Restablece el tiempo transcurrido a cero.
    if (!running) { // Si el cronómetro no está en ejecución:
        document.getElementById("start").textContent = "Iniciar"; // Cambia el texto del botón de inicio a "Iniciar".
    }
    actualizarCronometro(); // Llama a la función actualizarCronometro para actualizar el tiempo en la pantalla.
}

function actualizarCronometro() { // Declara una función para actualizar el tiempo transcurrido.
    tiempo++; // Incrementa el tiempo transcurrido en un segundo.
    const horas = Math.floor(tiempo / 3600); // Calcula las horas completas.
    const minutos = Math.floor((tiempo % 3600) / 60); // Calcula los minutos completos.
    const segundos = tiempo % 60; // Calcula los segundos restantes.
    const tiempoFormateado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`; // Formatea el tiempo en formato hh:mm:ss.
    document.getElementById("display").textContent = tiempoFormateado; // Actualiza el elemento en la página con el tiempo formateado.
}

document.getElementById("start").onclick = iniciarCronometro; // Agrega que al hacer clic al botón de inicio para llamar a la función iniciarCronometro
document.getElementById("stop").onclick = detenerCronometro; // Agrega que al hacer clic al botón de parar para llamar a la función detenerCronometro
document.getElementById("reset").onclick = reiniciarCronometro; // Agrega que al hacer clic al botón de reiniciar para llamar a la función reiniciarCronometro