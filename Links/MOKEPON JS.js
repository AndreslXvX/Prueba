//Variables de elementos HTML

    //Funcition iniciarJuego()
    
    const reiniciar = document.getElementById("reiniciar")
    const pagina2 = document.getElementById("pagina2")
    const botonReiniciar = document.getElementById("reiniciar")

    //Funcition seleccionarMascotaJugador()
    const spanMascotaJugador = document.getElementById("mascota-jugador")
    const seleccionarMascota = document.getElementById("seleccionarMascota")
    const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    //Function seleccionarMascotaEnemigo()
    const MascotaEnemigo = aleatorio(1,3)

    //Function MensajesAtaques()
    const spanMensajeAtaqueJugador = document.getElementById("mensajeAtaqueJugador")
    const spanMensajeAtaqueEnemigo = document.getElementById("mensajeAtaqueEnemigo")
    const sectionMensajesResultado = document.getElementById("mensajeResultado")
   
    //Function botonesDesactivados()
    const mostrarBotonReiniciar = document.getElementById("reiniciar")

    //Arreglo mokepones
    const tarjetasMokepon = document.getElementById("tarjetasMokepones")
    const contenedorAtaques = document.getElementById("SeleccionarAtaque")

    const mensajeResultadoFinal = document.getElementById("mensajeResultado")
    const spanvidasMascotaEnemigo = document.getElementById("vidasMascotaEnemigo")
    const spanvidasMascotaJugador = document.getElementById("vidasMascotaJugador")

    const sectionVerMapa = document.getElementById("verMapa")
    const mapa = document.getElementById("mapa")

    //Variables creadas para JS
     
    let lienzo = mapa.getContext("2d")
    let ataques = []
    let mokepones = []
    let ataqueJugador = []
    let botones = []
    let ataqueEnemigo = []
    let ataqueMokeponEnemigo
    let resultado
    let botonesAtaques
    let botonFuego 
    let botonAgua 
    let botonTierra 
    let opcionDeMokepones
    let opcionDeAtaques
    let victoriasJugador = 0
    let victoriasEnemigo = 0
    let ganador 
    let perdedor
    let inputhipodoge
    let inputcapipepo
    let inputratigueya
    let botonMascotaJugador
    let mascotaJugador
    let ataqueAleatorio
    let indexAtaqueJugador
    let indexAtaqueEnemigo
    
    
    //Clases Mokepones
    class Mokepon {
        constructor(nombre, foto, vida) {
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
            this.ataques = []
        }
    }
    
    let hipodoge = new Mokepon("Hipodoge","imagenes/agua.jpg","3" )

    let capipepo = new Mokepon("Capipepo","imagenes/planta.jpg","3" )

    let ratigueya = new Mokepon("Ratigueya","imagenes/Fuego.jpg","3" )


    hipodoge.ataques.push(
        { nombre: "💧", id: "AtaqueAgua"},
        { nombre: "💧", id: "AtaqueAgua"},
        { nombre: "💧", id: "AtaqueAgua"},
        { nombre: "🔥", id: "AtaqueFuego"},
        { nombre: "☘", id: "AtaqueTierra"},
    )

    capipepo.ataques.push(
        { nombre: "☘", id: "AtaqueTierra"},
        { nombre: "☘", id: "AtaqueTierra"},
        { nombre: "☘", id: "AtaqueTierra"},
        { nombre: "💧", id: "AtaqueAgua"},
        { nombre: "🔥", id: "AtaqueFuego"},
    )

    ratigueya.ataques.push(
        { nombre: "🔥", id: "AtaqueFuego"},
        { nombre: "🔥", id: "AtaqueFuego"},
        { nombre: "🔥", id: "AtaqueFuego"},
        { nombre: "💧", id: "AtaqueAgua"},
        { nombre: "☘", id: "AtaqueTierra"},
    )

    mokepones.push(hipodoge, capipepo, ratigueya)

function inciarJuego() {
    
    reiniciar.style.display = "none"
    pagina2.style.display = "none"
    sectionVerMapa.style.display = "none"

    mokepones.forEach((Mokepon) => {  
        opcionDeMokepones = `
        <input class= "mascotaSeleccion" type="radio" name="mascota" id=${Mokepon.nombre} />
        <label class= "botones-mascotas" for=${Mokepon.nombre}>
            <p class= "nombreMascotas" > ${Mokepon.nombre} </p>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre} >
        </label>         
        `
        tarjetasMokepon.innerHTML += opcionDeMokepones  

        })

        inputhipodoge = document.getElementById("Hipodoge")
        inputcapipepo = document.getElementById("Capipepo")
        inputratigueya = document.getElementById("Ratigueya")
        
        botonMascotaJugador = document.getElementById("boton-mascota")
        botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
        botonReiniciar.addEventListener("click", reiniciarJuego)

}   
function seleccionarMascotaJugador(){ 
    if (inputhipodoge.checked){
        spanMascotaJugador.innerHTML = inputhipodoge.id
        mascotaJugador = inputhipodoge.id
    } else if (inputcapipepo.checked){
        spanMascotaJugador.innerHTML = inputcapipepo.id
        mascotaJugador = inputcapipepo.id
    } else if (inputratigueya.checked){
        spanMascotaJugador.innerHTML = inputratigueya.id
        mascotaJugador = inputratigueya.id
    } else {
        alert("Selecciona una mascota!")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataques) => {  
        opcionDeAtaques = `
        <button id=${ataques.id} class="Botones-ataques BAtaques">${ataques.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionDeAtaques

        })
        botonFuego = document.getElementById("AtaqueFuego") 
        botonAgua = document.getElementById("AtaqueAgua")
        botonTierra = document.getElementById("AtaqueTierra")
        botones = document.querySelectorAll(".BAtaques")
    
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
            boton.addEventListener("click", (e) => {
                if (e.target.innerHTML === "🔥") {
                    ataqueJugador.push("FUEGO")
                    console.log(ataqueJugador)
                    boton.style.background = "#ffffff"
                } else if (e.target.innerHTML === "💧") {
                    ataqueJugador.push("AGUA")
                    console.log(ataqueJugador)
                    boton.style.background = "#ffffff"
                } else{
                    ataqueJugador.push("TIERRA")
                    console.log(ataqueJugador)
                    boton.style.background = "#ffffff"
                }
                seleccionEnemigo()
            })
    })
}

 
function seleccionarMascotaEnemigo(){
    seleccionarMascota.style.display = "none"
    sectionVerMapa.style.display = "flex"
    let imagenCapipepo = new Image()
    imagenCapipepo.src = capipepo.foto
    lienzo.drawImage(
        imagenCapipepo,
        20,
        40,
        100,
        100,        
    )

    // pagina2.style.display = "flex"

    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataqueMokeponEnemigo = mokepones[mascotaAleatoria].ataques

    secuenciaAtaque()
}



function seleccionEnemigo() {
    ataqueAleatorio = aleatorio(0, ataqueMokeponEnemigo.length -1)
        if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
            ataqueEnemigo.push("FUEGO")

        } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
            ataqueEnemigo.push("AGUA")

        } else {
            ataqueEnemigo.push("TIERRA")
        }
        console.log(ataqueEnemigo)
        iniciarCombate() 
}

function indexAtaques(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function iniciarCombate() {
    if (ataqueJugador.length === 5) {
        Combate()
    }
}  

function Combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]){
            indexAtaques(index, index)
            MensajesAtaques()
            // resultado = "EMPATE"
            
        } else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA" || ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA" || ataqueJugador[index] === "AGUA" && ataqueEnemigo === "FUEGO"){
            indexAtaques(index, index)
            MensajesAtaques()
            victoriasJugador++
            // resultado = "GANASTE"
            

        } else {
            indexAtaques(index, index)
            MensajesAtaques()
            victoriasEnemigo++
            // resultado = "PERDISTE"
            
        }
        
    }
    MensajesAtaques()
    validarVidas()
}
function validarVidas(){
    spanvidasMascotaJugador.innerHTML = victoriasJugador
    spanvidasMascotaEnemigo.innerHTML = victoriasEnemigo
    if(victoriasJugador === victoriasEnemigo){
        MensajesFinal("Esto fue un empate!")
    } else if(victoriasJugador > victoriasEnemigo) {
        MensajesFinal("Lo hiciste Bien! GANASTE!")
    } else {
        MensajesFinal("Buen intento! pero Perdiste!")
    }
}
function MensajesAtaques(){

    let spanAtaqueJugador = document.createElement("p")
    let spanAtaqueEnemigo = document.createElement("p")

    spanAtaqueJugador.innerHTML = indexAtaqueJugador
    spanAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    spanMensajeAtaqueJugador.appendChild(spanAtaqueJugador)
    spanMensajeAtaqueEnemigo.appendChild(spanAtaqueEnemigo)
    
}
function MensajesFinal(resultado){

    let mensajeResultado = document.createElement("p")
    mensajeResultado.innerHTML = resultado

    mensajeResultadoFinal.appendChild(mensajeResultado)
    
    

    // botonesDesactivados()
} 
function botonesDesactivados(){
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    mostrarBotonReiniciar.style.display = "flex"
}
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", inciarJuego)