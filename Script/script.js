// Archivo: validacion.js

function validarFormulario() {
    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || contrasena === "" || telefono === "" || direccion === ""  || mensaje === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    alert("Formulario validado correctamente. Puedes enviar los datos.");
    return true;
}
