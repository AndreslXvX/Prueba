function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

    let ataqueJugador
    let ataqueEnemigo
    let resultado
    let vidasMascotaJugador = 3
    let vidasMascotaEnemigo = 3
    let ganador 
    let perdedor 

function inciarJuego() {
    let reiniciar = document.getElementById("reiniciar")
    reiniciar.style.display = "none"
    
    let pagina2 = document.getElementById("pagina2")
    pagina2.style.display = "none"

    let botonMascotaJugador=document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("AtaqueFuego") 
    let botonAgua = document.getElementById("AtaqueAgua")
    let botonTierra = document.getElementById("AtaqueTierra")
    let botonReiniciar = document.getElementById("reiniciar")
    
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)

}   
function seleccionarMascotaJugador(){

    let inputhipodoge = document.getElementById("hipodoge")
    let inputcapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    
    if (inputhipodoge.checked){
        spanMascotaJugador.innerHTML = " hipodoge "
        seleccionarMascotaEnemigo()
    }
    else if (inputcapipepo.checked){
        spanMascotaJugador.innerHTML = " capipepo "
        seleccionarMascotaEnemigo()
    }
    else if (inputratigueya.checked){
        spanMascotaJugador.innerHTML = " ratigueya "
        seleccionarMascotaEnemigo()
    }
    else {
        alert("Selecciona una mascota!")
    }
}
function seleccionarMascotaEnemigo(){
    let seleccionarMascota = document.getElementById("seleccionarMascota")
    seleccionarMascota.style.display = "none"

    let pagina2 = document.getElementById("pagina2")
    pagina2.style.display = "flex"

    let inputhipodoge = document.getElementById("hipodoge")
    let inputcapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    let MascotaEnemigo = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(MascotaEnemigo === 1){
       spanMascotaEnemigo.innerHTML = "hipodoge"
    } else if (MascotaEnemigo === 2){
        spanMascotaEnemigo.innerHTML = "capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "ratigueya"
   }
   validarMascotaJugador()
   validarMascotaEnemigo()
}
function validarMascotaJugador(){
    let spanvidasMascotaJugador = document.getElementById("vidasMascotaJugador")
    spanvidasMascotaJugador.innerHTML = vidasMascotaJugador
     
}
function validarMascotaEnemigo(){
    let spanvidasMascotaEnemigo = document.getElementById("vidasMascotaEnemigo")
    spanvidasMascotaEnemigo.innerHTML = vidasMascotaEnemigo
     
}

function ataqueFuego(){
    ataqueJugador= "fuego"
    seleccionEnemigo()
}
function ataqueAgua(){
    ataqueJugador= "agua"
    seleccionEnemigo()
}
function ataqueTierra(){
    ataqueJugador= "tierra"
    seleccionEnemigo()
}
function seleccionEnemigo(){

    ataqueEnemigo = aleatorio(1,3)
        if(ataqueEnemigo === 1){
            ataqueEnemigo = "fuego"

        } else if(ataqueEnemigo === 2){
            ataqueEnemigo = "agua"

        } else {
            ataqueEnemigo = "tierra"
        } 
        Combate()

}
function Combate(){
   
    if(ataqueJugador == ataqueEnemigo) {
        resultado = "EMPATE"
    } else if(ataqueJugador == "fuego" && ataqueEnemigo == "tierra" || ataqueJugador == "agua" && ataqueEnemigo == "fuego" || ataqueJugador == "tierra" && ataqueEnemigo == "agua" ) {
        resultado = "GANASTE"
        vidasMascotaEnemigo--
    } else {
        resultado = "PERDISTE"
        vidasMascotaJugador--
    }
    MensajesAtaques()
    validarMascotaJugador()
    validarMascotaEnemigo()
}
function validarVidas(){
    if(vidasMascotaJugador == 0){
        MensajesFinal("Buen intento! pero perdiste, gano tu ENEMIGO!")
    } else if(vidasMascotaEnemigo == 0) {
        MensajesFinal("Lo hiciste Bien! GANASTE!")
    }
    
      
}
function MensajesAtaques(){
    let mensajeAtaqueJugador = document.getElementById("mensajeAtaqueJugador")
    let mensajeAtaqueEnemigo = document.getElementById("mensajeAtaqueEnemigo")
    let sectionMensajesResultado = document.getElementById("mensajeResultado")

    sectionMensajesResultado.innerHTML = resultado


    mensajeAtaqueJugador.innerHTML = "tu mascota ataco con " + ataqueJugador

    mensajeAtaqueEnemigo.innerHTML = "tu enemigo ataco con " + ataqueEnemigo
    validarVidas() 
}
function MensajesFinal(resultado){
    let sectionMensajesResultado = document.getElementById("mensajeResultado")

    sectionMensajesResultado.innerHTML = resultado
 
    botonesDesactivados()

} 
function botonesDesactivados(){
    let botonFuego = document.getElementById("AtaqueFuego") 
    let botonAgua = document.getElementById("AtaqueAgua")
    let botonTierra = document.getElementById("AtaqueTierra")
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    let mostrarBotonReiniciar = document.getElementById("reiniciar")
    mostrarBotonReiniciar.style.display = "flex"
}
function reiniciarJuego(){
    location.reload()
}
window.addEventListener("load", inciarJuego)