// 🕹️ SCRIPTS INTERACTIVOS DE ERIKOPTERSTUDIOS - EDICIÓN SUPREMA
// Central de funciones, Modos Especiales y Ecosistema Gatuno

function toggleHackerMode() {
    document.body.classList.toggle('hacker-mode');
    console.log("⚡ [SISTEMA]: Estado del Modo Hacker cambiado.");
}

// 💥 NUEVA FUNCIÓN: MODO VICTORIA INTERACTIVO
function activarModoVictoria() {
    alert("🎉🏆 ¡¡¡MODO VICTORIA ACTIVADO!!! 🏆🎉\n\n" +
          "🐔 Antwan dice: '¡El juego es un éxito total, nos estamos haciendo de oro!'\n" +
          "🪓 Los 2 bloques de servidor han sido obliterados con el hacha irrompible.\n" +
          "🔴 La torreta láser ha completado el circuito sin que Milki la atrape.\n" +
          "💻 Estado de ErikopterStudios: ¡DOMINACIÓN GLOBAL ABIERTA!");
}

// 🎲 NUEVA FUNCIÓN: ACTIVAR COMPORTAMIENTO AZAR (RANDOM)
function activarModoRandom() {
    const acciones = [
        "🔴 La torreta láser ha cambiado a coordenadas locas al azar.",
        "🪓 Antwan está dando hachazos en círculos persiguiendo un pollo.",
        "🎮 El bot de Roblox se ha metido a un juego aleatorio de terror.",
        "🌡️ El sensor del pasillo marca una temperatura loca de 99°C simulated."
    ];
    const fraserandom = acciones[Math.floor(Math.random() * acciones.length)];
    alert("🎲 [MODO RANDOM ACTIVADO]\n\n" + fraserandom);
}

// 👑 NUEVA FUNCIÓN: EL BOTÓN SUPREMO "TODO"
function activarTodo() {
    document.body.classList.add('hacker-mode'); // Forzamos el modo hacker visual
    setTimeout(() => {
        alert("🚨 [ALERTA MAXIMA] ¡Botón TODO pulsado! Fusionando sistemas...");
        activarModoRandom();
        activarModoVictoria();
    }, 200);
}

function alertaProyecto(tipo) {
    if (tipo === 'milkilang') {
        alert('🐈 ¡Has seleccionado el núcleo de MilkiLang v1.0.0! Cargando sintaxis limpia...');
    } 
    else if (tipo === 'laser') {
        alert(
            "🔴 --- PROYECTO: TORRETA LÁSER INTERACTIVA ---\n\n" +
            "📦 COMPONENTES NECESARIOS:\n" +
            "• 1x Raspberry Pi Pico / Arduino Board\n" +
            "• 2x Servomotores SG90 (Azules de 9g)\n" +
            "• 1x Diodo Láser Rojo (5V o 3.3V)\n" +
            "• Cables y Soporte de Madera\n\n" +
            "💾 CÓDIGO (.ino) e IMÁGENES listos en el repositorio principal."
        );
    } 
    else if (tipo === 'antwan') {
        alert('🪓 ¡¡¡BUMMM!!! Dos bloques de servidor destruidos por el hacha irrompible de Antwan.');
    }
}
