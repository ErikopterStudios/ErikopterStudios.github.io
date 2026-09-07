// 🕹️ INTERACTIVIDAD DE TRANSMISIÓN - ERIKOPTERSTUDIOS LIVE

document.addEventListener("DOMContentLoaded", function() {
    console.log("📺 [STREAM]: Sistema de vídeo simulación activado.");
    iniciarSimuladorDirecto();
});

function iniciarSimuladorDirecto() {
    const accionesStream = [
        "Antwan ha detectado 2 bloques de servidor... ¡BUMMM! Destruidos. 🪓",
        "Antwan está patrullando el Spawn con el hacha irrompible...",
        "El bot ha enviado los estados de red por USB con pc datasend.",
        "Antwan dice por el chat: ¡Si no es una secuela, lo destruyo! 💥",
        "Escaneando el Spawn. Código del mapa verificado."
    ];

    const logsConsola = [
        "> [ANTWAN] ¡¿Dos bloques de servidor?! ¡Saco el hacha! 🪓",
        "> [SERVER] ¡¡¡BUMMM!!! Dos bloques del sistema obliterados. 💥💥",
        "> [INFO] Copia de seguridad en la nube completada con éxito.",
        "> [ANTWAN] Éxito total. Activando pase de batalla VIP.",
        "> [SERIAL] Datos de infraestructura enviados al PC correctamente."
    ];

    // Cambia el contenido dinámicamente cada 4 segundos
    setInterval(() => {
        const randomAccion = accionesStream[Math.floor(Math.random() * accionesStream.length)];
        const randomLog1 = logsConsola[Math.floor(Math.random() * logsConsola.length)];
        const randomLog2 = logsConsola[Math.floor(Math.random() * logsConsola.length)];
        
        const elAccion = document.getElementById("stream-action");
        const elLog1 = document.getElementById("log-linea1");
        const elLog2 = document.getElementById("log-linea2");

        if(elAccion) elAccion.innerText = randomAccion;
        if(elLog1) elLog1.innerText = randomLog1;
        if(elLog2) elLog2.innerText = randomLog2;
    }, 4000);
}
