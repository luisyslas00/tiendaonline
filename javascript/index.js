//Captura DOM

const iconoMenu = document.getElementById("iconoNav")
const menu = document.getElementById("menu")
const contenedorProductos = document.querySelectorAll(".contenedorProducto")

//Eventos

iconoMenu.addEventListener("click",()=>{
    menu.classList.toggle("menu-active")
    iconoMenu.classList.toggle("fa-xmark")
})

/* VER ERROR, CAPTURAR ELEMENTOS CON E TARGET */
/* contenedorProductos.addEventListener("mouseOver",(e)=>{
    console.log(e.target)
}) */
contenedorProductos.forEach(element=>{
    element.addEventListener("mouseover",()=>{
        element.style.color = "blue";
    })
    element.addEventListener("mouseout",()=>{
        element.style.color = "black";
    })
})