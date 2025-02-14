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

