// script.js
const toggleButton = document.getElementById("toggleMode");

// Verifica se o usuário já escolheu um modo antes
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Alterna entre os modos ao clicar no botão
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salva a escolha do usuário no armazenamento local
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
// script.js
const toggleButton = document.getElementById("toggleMode");

// Verifica se o usuário já escolheu um modo antes
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Alterna entre os modos ao clicar no botão
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salva a escolha do usuário no armazenamento local
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Aguarda o carregamento completo da página
window.addEventListener("load", () => {
    const preloader = document.getElementById("carregar");
    preloader.style.opacity = "0"; // Suaviza a saída
    
    // Espera um pouco antes de remover completamente o preloader
    setTimeout(() => {
        preloader.style.display = "none";
        document.querySelector(".content").style.display = "block"; // Mostra o conteúdo
    }, 500);
});

