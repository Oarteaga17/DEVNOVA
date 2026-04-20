// 1. Elegimos a nuestro Pokémon (el formulario)
const formulario = document.getElementById('formulario-devnova');

// 2. Le decimos qué hacer cuando el usuario haga clic en "Enviar Mensaje"
formulario.addEventListener('submit', function (event) {

    // 3. ¡Usamos Protección! Evitamos que la página se recargue
    event.preventDefault();

    // 4. Cambiamos el texto del botón temporalmente para que el usuario sepa que está cargando
    const boton = formulario.querySelector('button');
    boton.textContent = 'Enviando...';

    // 5. ¡Ataque EmailJS, ve! (Aquí pones tus IDs reales)
    emailjs.sendForm('service_ncwi8nt', 'template_zn4lteq', this)
        .then(function () {
            // Si el ataque es súper efectivo (se envía bien)
            console.log('¡Mensaje enviado con éxito!');
            boton.textContent = '¡Enviado!'; // Le damos feedback visual al usuario
            formulario.reset(); // Limpiamos los campos como una Poción Restaurar
        }, function (error) {
            // Si el ataque falla
            console.log('Fallo al enviar...', error);
            boton.textContent = 'Error al enviar';
        });
});