function verificarPedido() {
    var cantidad1 = parseInt(document.getElementById("cant1").value) || 0;
    var cantidad2 = parseInt(document.getElementById("cant2").value) || 0;
    var cantidad3 = parseInt(document.getElementById("cant3").value) || 0;

    var totalStickers = cantidad1 + cantidad2 + cantidad3;

    if (totalStickers <= 10) {
        document.getElementById("resultado").textContent = "Llevas " + totalStickers + " stickers.";
    } else {
        document.getElementById("resultado").textContent = "Llevas demasiados stickers.";
    }
}