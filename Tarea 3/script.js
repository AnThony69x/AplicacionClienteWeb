document.getElementById('formularioCliente').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario se envíe y recargue la página

    const formulario = document.getElementById('formularioCliente');
    const formData = new FormData(formulario); // Crea un objeto FormData con los datos del formulario

    // Extrae y limpia  los datos de cada campo
    const cedula = formData.get('Cedula').trim();
    const nombre = formData.get('Nombre').trim();
    const apellido = formData.get('Apellido').trim();
    const direccion = formData.get('Direccion').trim();
    const telefono = formData.get('Telefono').trim();
    const email = formData.get('E-mail').trim();
    const ciudad = formData.get('Ciudad');

    // Función para mostrar mensajes en la página
    const mostrarMensaje = (mensaje, color) => {
        const mensajeDiv = document.getElementById('mensaje'); // Selecciona el elemento donde se mostrará el mensaje
        mensajeDiv.innerText = mensaje; // Inserta el texto del mensaje
        mensajeDiv.style.color = color; // Aplica el color al mensaje
        mensajeDiv.style.display = 'block'; // Asegura que el mensaje sea visible 
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email

    // Validaciones
    if (cedula.length < 10) { // Verifica que la cédula tenga al menos 10 caracteres
        mostrarMensaje('La cédula debe tener al menos 10 caracteres', 'red'); // Muestra un mensaje de error
    } else if (telefono.length < 7) { // Verifica que el teléfono tenga al menos 7 caracteres
        mostrarMensaje('El teléfono debe tener al menos 7 caracteres', 'red'); // Muestra un mensaje de error
    } else if (!emailRegex.test(email)) { // Verifica si el email cumple con el formato válido
        mostrarMensaje('Ingresa un correo electrónico válido', 'red'); // Muestra un mensaje de error si el email es inválido
    } else if (cedula && nombre && apellido && direccion && telefono && email && ciudad) { 
        // Si todos los campos están completos y son válidos
        mostrarMensaje('Datos enviados correctamente', 'green'); // Muestra un mensaje de éxito
        formulario.reset(); // Reinicia el formulario
    } else {
        mostrarMensaje('Completa todos los campos', 'red'); // Si falta algún campo, muestra un mensaje de error
    }
});
