document.addEventListener("DOMContentLoaded", function () {
    // Função de pesquisa nas categorias
    const searchInput = document.querySelector("#categorias input");
    const categories = document.querySelectorAll(".categoria");

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();
        
        categories.forEach(category => {
            const text = category.textContent.toLowerCase();
            if (text.includes(searchValue)) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });
    });

    // Validação do formulário de login/cadastro
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const inputs = form.querySelectorAll("input");
        let valid = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "1px solid #8b5e3c";
            }
        });
        
        if (!valid) {
            alert("Por favor, preencha todos os campos corretamente.");
        } else {
            alert("Cadastro realizado com sucesso!");
            form.reset();
        }
    });

    // Menu responsivo
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰ Menu";
    menuToggle.style.display = "none";
    menuToggle.style.background = "#8b5e3c";
    menuToggle.style.color = "white";
    menuToggle.style.padding = "10px";
    menuToggle.style.border = "none";
    menuToggle.style.cursor = "pointer";
    
    document.querySelector("header").prepend(menuToggle);
    
    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
    
    function adjustMenu() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = "block";
            nav.style.display = "none";
            nav.style.flexDirection = "column";
        } else {
            menuToggle.style.display = "none";
            nav.style.display = "flex";
            nav.style.flexDirection = "row";
        }
    }
    
    window.addEventListener("resize", adjustMenu);
    adjustMenu();
});
