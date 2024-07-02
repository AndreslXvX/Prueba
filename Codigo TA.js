function ejecutar() {
    let saldo = 1000
    while (true) {
        let opcion = prompt("Elige una accion. 1 para retirar. 2 para depositar. 3 para salir")

        if(opcion === "3"){
            alert("Fuga dijo el chapo")
            break
        }   else if(opcion === "2") {
            let valor = parseInt(prompt("Escribe cuanto quieres deposiar"))
            saldo += valor
            alert("Accion realizada, su saldo es " + saldo)
        } 
        else if(opcion === "1"){
            let valor = prompt("Escribe cuanto quieres retirar")
            if(valor > saldo){
                alert("no se realizo la accion, su saldo es " + saldo)
            }else {
                saldo -= valor
                alert("accion realizada, su saldo es " + saldo)
            }
            
        }else {
            alert("Operacion no valida")
        }
    }
}
ejecutar()
