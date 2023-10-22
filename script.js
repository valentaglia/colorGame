let pickedColor
let cuadrados = document.querySelectorAll(".square")
let sp = document.querySelector("#colorDisplay")
let mensaje = document.querySelector("#message")
let titulo = document.querySelector("h1")
let colors = generateRandomColors(6)
let juegoFacil = false
titulo.style.color = "white"

let boton = document.querySelector("#reset")
boton.addEventListener("click", function resetGame () {
    iniciarJuego()
    boton.textContent = "Nuevos colores"
    mensaje.textContent = null
})

iniciarJuego()

function iniciarJuego() {

    let cuadros = 0
    if (juegoFacil)
        cuadros = 3
    else 
        cuadros = 6

    colors = generateRandomColors(cuadros)

    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i]
        cuadrados[i].addEventListener("click", clickBoton)
    }
    pickedColor = pickColor(colors,cuadros)
    console.log("colores:", colors)

}

function clickBoton() {

    if (this.style.backgroundColor == pickedColor) {
        mensaje.textContent = "¡Correcto!"
        titulo.style.backgroundColor = pickedColor
        changeColores(this.style.backgroundColor, cuadrados)
        boton.textContent = "Jugar de nuevo"
    }
    else {
        this.style.backgroundColor = document.body.style.backgroundColor
        mensaje.textContent = "Intentalo nuevamente"
    }
}


function changeColores(color, cuadrados) {
    cuadrados.forEach(element => {
        element.style.backgroundColor = color
    })
}

function pickColor(colors, primeros) {
    
    let index = Math.round( Math.random() * 100) % primeros
    sp.textContent = " " + pickedColor
    return colors[index]
}

function randomColor() {
    let red = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    let blue = Math.round(Math.random() * 255)
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

function generateRandomColors(longitud) {
    let arregloAleatorio = []
    for (let i = 0; i < longitud; i++) {
        arregloAleatorio.push(randomColor())
    }
    console.log("arregloAleatorio:", arregloAleatorio)
    return arregloAleatorio
}


let botonFacil = document.querySelector("#facil")
let botonDificil = document.querySelector("#dificil")

botonFacil.addEventListener("click", function facilClick() {
    botonDificil.classList.remove("selected")
    botonFacil.classList.add("selected")

    juegoFacil = true
    iniciarJuego()

    for (let i = 0; i < 6; i++) {
        cuadrados[i].style.backgroundColor=colors[i]
        if ( i >= 3 ) 
        {
            cuadrados[i].hidden = true
            cuadrados[i].style.display="none"
        }
    }
}
)

botonDificil.addEventListener("click", function dificilClick() {

    botonFacil.classList.remove("selected")
    botonDificil.classList.add("selected")
    
    juegoFacil = false
    iniciarJuego()

    for (let i = 0; i < cuadrados.length; i++)
    {
    cuadrados[i].style.backgroundColor=colors[i]
    cuadrados[i].style.display="block"
    }
}) 