const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
subMenuBtn.forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        const subMenu = this.nextElementSibling;
        const height = subMenu.scrollHeight; 
        
        if(window.innerWidth < 1024) {
            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        } 
    });
});
