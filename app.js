
// Condiciones Iniciales de Juego
let intentosMax; 
let nuevoJuegoMax;
let valorMax;
// Variables de partidas
let nuevoJuegos;
let intentos;
let numeroSecreto;
let listaDeNumeros;

function limpiarCaja(){
    document.getElementById('valorUsuario').value=""; 
}

function generarNumero(){
    let numero = Math.floor(Math.random() * valorMax) + 1;
    
    if (listaDeNumeros.length == nuevoJuegoMax){
        cargarElemento('p','Ya se sortearon todos los números posibles click Reset');
        document.getElementById("intentos").setAttribute("disabled",true);
        document.getElementById("valorUsuario").setAttribute("disabled",true);
        document.getElementById("reset").removeAttribute("disabled");
    }else{
        if (listaDeNumeros.includes(numero)){
            return generarNumero();
        }else{
            listaDeNumeros.push(numero);
            console.log(numero);
            console.log(listaDeNumeros);
            return numero;
        }
    }
}

function intentoDeUsuario(){
    let valor = parseInt(document.getElementById('valorUsuario').value);
    let cant = document.getElementById('valorUsuario');
    if (cant.value===""){
        cargarElemento("p","Debe Ingresar un número para Intentar");
        return;
    }else{
        if (numeroSecreto === valor){
            cargarElemento("p",`Ganaste!! Acertaste el número secreto en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            document.getElementById("intentos").setAttribute("disabled",true);
            focoElemento("reiniciar");
            nuevoJuegos++;
        }else{
            if (intentosMax==intentos){
                cargarElemento("p",`Perdiste, se terminaron los intentos, click Nuevo Juego`);
                document.getElementById("reiniciar").removeAttribute("disabled");
                document.getElementById("intentos").setAttribute("disabled",true);
                focoElemento("reiniciar");
                nuevoJuegos++;
            }else{
                if (numeroSecreto > valor){
                    cargarElemento("p",`El número secreto es mayor que ${valor}, quedan ${intentosMax-intentos} ${intentos == 1 ? "intentos" : "intento"}`);
                    focoElemento('valorUsuario');
                }else{
                    cargarElemento("p",`El número secreto es menor que ${valor}, quedan ${intentosMax-intentos} ${intentos == 1 ? "intentos" : "intento"}`);
                    focoElemento('valorUsuario');
                }
            intentos++;
            limpiarCaja();
            }
        }
    }
}

function cargarElemento(elemento, contenido){
    let elementore = document.querySelector (elemento);
    elementore.innerHTML = contenido;
}

function focoElemento(elemento){
    document.getElementById(elemento).focus();
}

function reiniciarJuego(){
    intentos=1;
    cargarElemento("h1",`Juego del número secreto, tiene ${nuevoJuegoMax-nuevoJuegos} juegos nuevos`);
    cargarElemento("p",`Indicar un número del 1 al ${valorMax} con ${intentosMax} intentos`);
    limpiarCaja();   
    document.getElementById("reiniciar").setAttribute("disabled",true);
    document.getElementById("intentos").removeAttribute("disabled");
    numeroSecreto = generarNumero();
    focoElemento('valorUsuario');
}

function resetDeUsuario(){
    intentosMax = 8;
    nuevoJuegoMax = 5;
    valorMax = 100;
    nuevoJuegos=0;

    numeroSecreto = 0;
    listaDeNumeros = [];
    document.getElementById("reset").setAttribute("disabled",true);
    document.getElementById("valorUsuario").removeAttribute("disabled");
    reiniciarJuego();
}

resetDeUsuario();