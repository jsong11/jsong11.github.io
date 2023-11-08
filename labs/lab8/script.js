
function toggleTheme(){
    document.body.classList.toggle("dark-mode");
}

let buttonElement  = document.getElementById("toggleButton");

buttonElement.onclick = toggleTheme;