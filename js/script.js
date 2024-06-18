function showData() {
    var email = document.getElementById("email").value;
    var password = "***oculto***";
    var ciudad = document.getElementById("ciudad").value;

    var mensaje = "Email: " + email + "\nPassword: " + password + "\nCiudad: " + ciudad;
    alert(mensaje);
}