//BOTÃO DE MODO NOTURNO--------------------------------------------------------------------------
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
//BOTÃO DE MODO NOTURNO--------------------------------------------------------------------------





//BOTÃO PARA EXIBIR CONTEUDO DA PAGINA INICIAL---------------------------------------------------
function mostrarConteudo() {
    document.getElementById("ocuto").classList.add("show");
};



let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;
    let extraContent = document.getElementById("ocuto");
    
    if (currentScroll > lastScrollTop) {
        // Rolando para baixo, esconde o conteúdo
        extraContent.classList.add("show");
    } else {
        // Rolando para cima, mostra o conteúdo
        extraContent.classList.remove("show");
    }
    lastScrollTop = currentScroll;
});
//BOTÃO PARA EXIBIR CONTEUDO DA PAGINA INICIAL---------------------------------------------------