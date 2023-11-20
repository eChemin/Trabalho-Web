function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Kanye");

    var idade = 25;

    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }

    for (var i = 0; i < 5; i++) {
    console.log("Teste de 1 ate 5 " + (i + 1));
}
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header-with-background");
    header.classList.add("novo-estilo-header");
});