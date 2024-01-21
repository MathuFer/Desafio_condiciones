function verificarPassword() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var numero3 = document.getElementById("numero3").value;

    var passwordConcatenado = numero1 + numero2 + numero3;

    if (passwordConcatenado === "911") {
        document.getElementById("resultado").textContent = "Password 1 correcto.";
    } else if (passwordConcatenado === "714") {
        document.getElementById("resultado").textContent = "Password 2 correcto.";
    } else {
        document.getElementById("resultado").textContent = "Password incorrecto.";
    }
}