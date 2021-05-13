// setTimeout(function(){ alert("Hello"); }, 3000);

    /*
	EL JUEGO DE LA OCA ESPACIAL
	 Este juego es similar al juego de la oca pero ocurre en el espacio!!
	 El juego permite hasta 5 jugadores compitiendo en un viaje interestelar para determinar quien es el mejor astronauta.
	 El juego ocurre por turnos, los jugadores se turnaran para lanzar el dado, un dado de 6 caras, y mover su pieza en consecuencia.
	 Cada jugador tendra una ficha de color que sera asignada segun el orden en el que jugaran. El orden sera: Rojo, Magenta, Verde, Amarillo y finalmente Cian.
	 Las reglas del juego son las siguientes:
		* El tablero consta de 64 casillas comenzando por la número 0, la plataforma de lanzamiento y finalizando en la casilla 63. 
		  Quien alcance la casilla 63 primero será el ganador.
		* Hay casillas especiales que pueden complicarnos o ayudarnos, estas son:
			- Relays: Las casillas 1, 5, 14, 23, 27, 36, 41, 45, 50 y 54 son relays interestelares, cada uno esta conectado con su siguiente.
			  Si un jugador cae en alguno sera propulzado a la velocidad de la luz hasta el próximo relay. 
			  En el caso del ultimo no sucede nada ya que no tiene conexion. 
			  Por ej: si cae en la casilla 14, sera transportado a la 23
			
			- Portales: Las casillas 6, 12, 35, 42, cada una es un extremo de un portal, esto es que las casillas 6 y 12 estan conectadas y la 35 con la 42.
			  Cuando un jugador cae en alguna de estas será transportado al otro extremo del portal. 
			  Por ej: si cae en 6 será enviado a 12, si cae en 12, será enviado a 6.
			
			- Batallas: Los casilleros 16, 26, 46, 56 se encuentran en sectores en disputa por lo que el jugador quedara afectado a asistir en batalla a su bando.
			  El jugador deberá lanzar el dado al comienzo de su proximo turno, si el dado es 4 o 6, el jugador queda desafectado y puede volver a lanzar el dado para avanzar en su viaje, 
			  de lo contrario pierde el turno y debera repetir esto el proximo turno.
			
			- Agujeros negros: Los casilleros 31, 38, 53 se encuentran sobre agujeros negros, estos atrapan todo lo que este cerca y lo devuelven al pasado. 
			  Si un jugador cae aqui, vuelve al casillero 0.
			
			- Los portales y relay se encuentran en territorio declarado neutral por lo que no se puede entrar en conflicto, pero, en todos los demas
			  cuando nos crucemos con otro jugador entraremos en conflicto.
			  Cada jugador lanzará el dado y ganara quien saque un valor mas alto, el recien llegado se encuentra en desventaja y 
			  por eso si resultara en empate, perderá. El perdedor vuelve al 0.
			  
	El Codigo presentado a continuacion se encuentra incompleto, su objetivo es completarlo y lograr un juego funcional.
	Habiendo alcanzado un juego funcional notara que no está del todo completo. 
	Antes de comenzar, el juego deberia preguntar al usuario cuantos jugadores van a participar. Eso queda en sus manos.
	Ayudines:
		* Como todo en la vida, el codigo se comienza a leer por el principio, en este caso, es la funcion MAIN.
		* Cada funcion explica en un breve comentario lo que hace, lea atentamente los comentarios.
    */

let stateGame = true
class Jugador{
    constructor(color, casilla, inicio, status, batalla){
        this.color = color
        this.casilla = casilla
        this.inicio = inicio
        this.status = status
        this.batalla = batalla
    }
    Relays(casilla){
        switch(casilla) {
            case 1:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 1 serás enviado a la 5`);
                let next = document.getElementById(`${this.color+5}`);
                next.classList.add("table-dark");
                this.casilla = 5
                break;
            case 5:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 5 serás enviado a la 14`)
                let next2 = document.getElementById(`${this.color+14}`);
                next2.classList.add("table-dark");
                this.casilla = 14
                 break;
            case 14:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 14 serás enviado a la 23`)
                let next3 = document.getElementById(`${this.color+23}`);
                next3.classList.add("table-dark");
                this.casilla = 23
                break;
            case 23:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 23 serás enviado a la 27`)
                let next4 = document.getElementById(`${this.color+27}`);
                next4.classList.add("table-dark");
                this.casilla = 27
                break;
            case 27:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 27 serás enviado a la 36`)
                let next5 = document.getElementById(`${this.color+36}`);
                next5.classList.add("table-dark");
                this.casilla = 36
                break;
            case 36:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 36 serás enviado a la 41`)
                let next6 = document.getElementById(`${this.color+41}`);
                next6.classList.add("table-dark");
                this.casilla = 41
                break;
            case 41:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 41 serás enviado a la 45`)
                let next7 = document.getElementById(`${this.color+45}`);
                next7.classList.add("table-dark");
                this.casilla = 45
                break;
            case 45:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 45 serás enviado a la 50`)
                let next8 = document.getElementById(`${this.color+50}`);
                next8.classList.add("table-dark");
                this.casilla = 50
                break;
            case 50:
                alert(`${this.color} ¡¡¡RELAY!!!: de la casilla 50 serás enviado a la 54`)
                let next9 = document.getElementById(`${this.color+54}`);
                next9.classList.add("table-dark");
                this.casilla = 54
                break;
            default:
              // code block
          } 
    }
    Portales(casilla){
        switch(casilla) {
            case 6:
                alert(`${this.color} ¡¡¡PORTAL!!!: de la casilla 6 serás enviado a la 12`);
                let next = document.getElementById(`${this.color+12}`);
                next.classList.add("table-dark");
                this.casilla = 12
                break;
            case 12:
                alert(`${this.color} ¡¡¡PORTAL!!!: de la casilla 12 serás enviado a la 6`)
                let next2 = document.getElementById(`${this.color+6}`);
                next2.classList.add("table-dark");
                this.casilla = 6

                let next12 = document.getElementById(`${this.color+12}`);
                let next11 = document.getElementById(`${this.color+11}`);
                let next10 = document.getElementById(`${this.color+10}`);
                let next9 = document.getElementById(`${this.color+9}`);
                let next8 = document.getElementById(`${this.color+8}`);
                let next7 = document.getElementById(`${this.color+7}`);
                next12.classList.remove("table-dark");
                next11.classList.remove("table-dark");
                next10.classList.remove("table-dark");
                next9.classList.remove("table-dark");
                next8.classList.remove("table-dark");
                next7.classList.remove("table-dark");
                 break;
            case 35:
                alert(`${this.color} ¡¡¡PORTAL!!!: de la casilla 35 serás enviado a la 42`)
                let next3 = document.getElementById(`${this.color+42}`);
                next3.classList.add("table-dark");
                this.casilla = 42
                break;
            case 42:
                alert(`${this.color} ¡¡¡PORTAL!!!: de la casilla 42 serás enviado a la 35`)
                let next4 = document.getElementById(`${this.color+35}`);
                next4.classList.add("table-dark");
                this.casilla = 35

                let next42 = document.getElementById(`${this.color+42}`);
                let next41 = document.getElementById(`${this.color+41}`);
                let next40 = document.getElementById(`${this.color+40}`);
                let next39 = document.getElementById(`${this.color+39}`);
                let next38 = document.getElementById(`${this.color+38}`);
                let next37 = document.getElementById(`${this.color+37}`);
                let next36 = document.getElementById(`${this.color+36}`);
                next42.classList.remove("table-dark");
                next41.classList.remove("table-dark");
                next40.classList.remove("table-dark");
                next39.classList.remove("table-dark");
                next38.classList.remove("table-dark");
                next37.classList.remove("table-dark");
                next36.classList.remove("table-dark");
                break;
            default:
              // code block
          } 
    }
    blackhole(casilla){
        switch(casilla) {
            case 31:
                alert(`${this.color} casilla ${this.casilla} ¡¡¡BLACKHOLE!!!: vuelves a la casilla 0`);
                for(let i = 0;i<32;i++){
                    let next = document.getElementById(`${this.color+i}`);
                    next.classList.remove("table-dark");
                }
                this.casilla = 0
                let next1 = document.getElementById(`${this.color+0}`);
                next1.classList.add("table-dark");
                break;
            case 38:
                alert(`${this.color} casilla ${this.casilla} ¡¡¡BLACKHOLE!!!: vuelves a la casilla 0`);
                for(let i = 0;i<38;i++){
                    let next = document.getElementById(`${this.color+0}`);
                    next.classList.remove("table-dark");
                }
                this.casilla = 0
                let next2 = document.getElementById(`${this.color+0}`);
                next2.classList.add("table-dark");
                 break;
            case 53:
                alert(`${this.color} casilla ${this.casilla} ¡¡¡BLACKHOLE!!!: vuelves a la casilla 0`);
                for(let i = 0;i<53;i++){
                    let next = document.getElementById(`${this.color+0}`);
                    next.classList.remove("table-dark");
                }
                this.casilla = 0
                let next3 = document.getElementById(`${this.color+0}`);
                next3.classList.add("table-dark");
                break;
            default:
              // code block
          } 
    }
    batallaF(casilla){
        if(this.casilla===16){
            alert(`${this.color} Debes sacar 4 o 6 para salir de la zona de batalla`);
            let dado = Math.floor(Math.random()*6)+1;
            console.log(`${this.color} BATALLA: sacaste ${dado}`)
            if(dado === 4 || dado === 6){
                alert(`${this.color} ¡FELICIDADES! sacaste ${dado} y saliste de la zona de batalla`);
                this.batalla = false
                this.casilla = this.casilla + dado
                let next = document.getElementById(`${this.color+this.casilla}`);
                next.classList.add("table-dark");
            }else{
                alert(`${this.color} sacaste ${dado}: Seguirás en la zona de batalla`);
            }
        }else if(this.casilla===26){
            alert(`${this.color} Debes sacar 4 o 6 para salir de la zona de batalla`);
            let dado = Math.floor(Math.random()*6)+1;
            console.log(`${this.color} BATALLA: sacaste ${dado}`)
            if(dado === 4 || dado === 6){
                alert(`${this.color} ¡FELICIDADES! sacaste ${dado} y saliste de la zona de batalla`);
                this.batalla = false
                this.casilla = this.casilla + dado
                let next = document.getElementById(`${this.color+this.casilla}`);
                next.classList.add("table-dark");
            }else{
                alert(`${this.color} sacaste ${dado}: Seguirás en la zona de batalla`);
            }
        }else if(this.casilla===46){
            alert(`${this.color} Debes sacar 4 o 6 para salir de la zona de batalla`);
            let dado = Math.floor(Math.random()*6)+1;
            console.log(`${this.color} BATALLA: sacaste ${dado}`)
            if(dado === 4 || dado === 6){
                alert(`${this.color} ¡FELICIDADES! sacaste ${dado} y saliste de la zona de batalla`);
                this.batalla = false
                this.casilla = this.casilla + dado
                let next = document.getElementById(`${this.color+this.casilla}`);
                next.classList.add("table-dark");
            }else{
                alert(`${this.color} sacaste ${dado}: Seguirás en la zona de batalla`);
            }
        }else if(this.casilla===56){
            alert(`${this.color} Debes sacar 4 o 6 para salir de la zona de batalla`);
            let dado = Math.floor(Math.random()*6)+1;
            console.log(`${this.color} BATALLA: sacaste ${dado}`)
            if(dado === 4 || dado === 6){
                alert(`${this.color} ¡FELICIDADES! sacaste ${dado} y saliste de la zona de batalla`);
                this.batalla = false
                this.casilla = this.casilla + dado
                let next = document.getElementById(`${this.color+this.casilla}`);
                next.classList.add("table-dark");
            }else{
                alert(`${this.color} sacaste ${dado}: Seguirás en la zona de batalla`);
            }
        }
    }
    rollDice(){
        // $( "div.warning" ).fadeIn( 100 ).delay( 400 ).fadeOut( 100 );

        this.casilla = this.casilla + Math.floor(Math.random()*6)+1;
        console.log(`${this.color}: casilla ${this.casilla}`)
        if(this.casilla<64){
            let next = document.getElementById(`${this.color+this.casilla}`);
            next.classList.add("table-dark");
            //this.status=false
        }  
        if(this.casilla===16){
            this.batalla=true
            alert(`${this.color} casilla ${this.casilla} ¡¡¡BATALLA!!!: EN TU PROXIMO TURNO TENDRAS QUE SACAR 4 o 6 PARA AVANZAR`);
        }
        if(this.casilla===26){
            this.batalla=true
            alert(`${this.color} casilla ${this.casilla} ¡¡¡BATALLA!!!: EN TU PROXIMO TURNO TENDRAS QUE SACAR 4 o 6 PARA AVANZAR`);
        }
        if(this.casilla===46){
            this.batalla=true
            alert(`${this.color} casilla ${this.casilla} ¡¡¡BATALLA!!!: EN TU PROXIMO TURNO TENDRAS QUE SACAR 4 o 6 PARA AVANZAR`);
        }
        if(this.casilla===56){
            this.batalla=true
            alert(`${this.color} casilla ${this.casilla} ¡¡¡BATALLA!!!: EN TU PROXIMO TURNO TENDRAS QUE SACAR 4 o 6 PARA AVANZAR`);
        }

        if(this.casilla>=63){
            alert(`${this.color} LLEGÓ A LA CASILLA ${this.casilla}`)
            this.status = "ganador"
            console.log("gameover")
            alert(`¡EL JUEGO HA TERMINADO! ${this.color} ES EL GANADOR`) ? "" : location.reload();
        }
        
    }
    goZero(){
        let next = document.getElementById(`${this.color+0}`);
        next.classList.add("table-dark");
    }


}

$("#lanzaRojo").hide();
$("#lanzaMagenta").hide();
$("#lanzaVerde").hide();
$("#lanzaAmarillo").hide();
$("#lanzaCian").hide();
//cerrar alerta
$(".alert").hide();
const cerrar = () =>{
    $(".alert").hide();
}

//iniciar juego
let cantidad = 0
const iniciar = () => {
    $(".alert").hide();
    cantidad = parseInt(document.getElementById(`recipient-name`).value);
    console.log(cantidad)
    if(cantidad >0 && cantidad <6){
        document.getElementById("iniciar").disabled = true; 
        document.getElementById("estado").innerText = "Juego Iniciado";
        console.log("juego iniciado")
        $(".alert").hide();
        instanciarJugadores(cantidad)
    }else{
        $(".alert").show();
    }
}


//inicializo a los jugadores
const instanciarJugadores = cantidad =>{
    if(cantidad===1){
        let rojo = new Jugador("rojo", 0, 0, true, false)
        rojo.goZero()
        rojoG=rojo
        $("#lanzaRojo").show();
    }else if(cantidad===2){
        let rojo = new Jugador("rojo", 0, 0, true, false)
        rojo.goZero()
        rojoG=rojo
        let magenta = new Jugador("magenta", 0, 0, false, false)
        magenta.goZero()
        magentaG=magenta
        $("#lanzaRojo").show();
        $("#lanzaMagenta").show();
    }else if(cantidad===3){
        let rojo = new Jugador("rojo", 0, 0, true, false)
        rojo.goZero()
        rojoG=rojo
        let magenta = new Jugador("magenta", 0, 0, false, false)
        magenta.goZero()
        magentaG=magenta
        let verde = new Jugador("verde", 0, 0, false, false)
        verde.goZero()
        verdeG=verde
        $("#lanzaRojo").show();
        $("#lanzaMagenta").show();
        $("#lanzaVerde").show();
    }else if(cantidad===4){
        let rojo = new Jugador("rojo", 0, 0, true, false)
        rojo.goZero()
        rojoG=rojo
        let magenta = new Jugador("magenta", 0, 0, false, false)
        magenta.goZero()
        magentaG=magenta
        let verde = new Jugador("verde", 0, 0, false, false)
        verde.goZero()
        verdeG=verde
        let amarillo = new Jugador("amarillo", 0, 0, false, false)
        amarillo.goZero()
        amarilloG=amarillo
        $("#lanzaRojo").show();
        $("#lanzaMagenta").show();
        $("#lanzaVerde").show();
        $("#lanzaAmarillo").show();
    }else if(cantidad===5){
        let rojo = new Jugador("rojo", 0, 0, true, false)
        rojo.goZero()
        rojoG=rojo
        let magenta = new Jugador("magenta", 0, 0, false, false)
        magenta.goZero()
        magentaG=magenta
        let verde = new Jugador("verde", 0, 0, false, false)
        verde.goZero()
        verdeG=verde
        let amarillo = new Jugador("amarillo", 0, 0, false, false)
        amarillo.goZero()
        amarilloG=amarillo
        let cian = new Jugador("cian", 0, 0, false, false)
        cian.goZero()
        cianG=cian
        $("#lanzaRojo").show();
        $("#lanzaMagenta").show();
        $("#lanzaVerde").show();
        $("#lanzaAmarillo").show();
        $("#lanzaCian").show();
    }
}
let rojoG = ""
let magentaG = ""
let verdeG = ""
let amarilloG = ""
let cianG = ""
////////////


const lanzaDados2 = () => {
    if(rojoG.status){
        rojoG.rollDice()
        statusSet()
    }else if(magentaG.status){
        magentaG.rollDice()
        statusSet()
    }else if(verdeG.status){
        verdeG.rollDice();
        verdeG.status = false
        amarilloG.status = true
    }else if(amarilloG.status){
        amarilloG.rollDice();
        amarilloG.status = false
        cianG.status = true
    }else if(cianG.status){
        cianG.rollDice();
        cianG.status = false
        rojoG.status = true
    }

}

const lanzaDados = () =>{
    switch(true){
        case(cantidad ===1 && rojoG.batalla):
            rojoG.batallaF(this.casilla)
            break; 
        case(cantidad ===1 && !rojoG.batalla):
            rojoG.rollDice()
            rojoG.Relays(rojoG.casilla)
            rojoG.Portales(rojoG.casilla)
            rojoG.blackhole(rojoG.casilla)
            break; 
        //CASE 1 fin
        case(cantidad ===2 && rojoG.status && rojoG.batalla):
            rojoG.batallaF(this.casilla)
            rojoG.status = false
            magentaG.status = true
            break; 
        case(cantidad ===2 && rojoG.status && !rojoG.batalla):
            rojoG.rollDice()
            rojoG.Relays(rojoG.casilla)
            rojoG.Portales(rojoG.casilla)
            rojoG.blackhole(rojoG.casilla)
            rojoG.status = false
            magentaG.status = true
            break; 
        case(cantidad ===2 && magentaG.status && magentaG.batalla):
            magentaG.batallaF(this.casilla)
            magentaG.status = false
            rojoG.status = true
            break; 
        case(cantidad ===2 && magentaG.status && !magentaG.batalla):
            magentaG.rollDice()
            magentaG.Relays(magentaG.casilla)
            magentaG.Portales(magentaG.casilla)
            magentaG.blackhole(magentaG.casilla)
            magentaG.status = false
            rojoG.status = true
            break; 
        //CASE 2 fin
        case(cantidad ===3 && rojoG.status && rojoG.batalla):
            rojoG.batallaF(rojoG.casilla)
            rojoG.status = false
            magentaG.status = true
            break; 
        case(cantidad ===3 && rojoG.status && !rojoG.batalla):
            rojoG.rollDice()
            rojoG.Relays(rojoG.casilla)
            rojoG.Portales(rojoG.casilla)
            rojoG.blackhole(rojoG.casilla)
            rojoG.status = false
            magentaG.status = true
            break; 
        case(cantidad ===3 && magentaG.status && magentaG.batalla):
            magentaG.batallaF(magentaG.casilla)
            magentaG.status = false
            verdeG.status = true
            break; 
        case(cantidad ===3 && magentaG.status && !magentaG.batalla):
            magentaG.rollDice()
            magentaG.Relays(magentaG.casilla)
            magentaG.Portales(magentaG.casilla)
            magentaG.blackhole(magentaG.casilla)
            magentaG.status = false
            verdeG.status = true
            break; 
        case(cantidad ===3 && verdeG.status && verdeG.batalla):
            verdeG.batallaF(verdeG.casilla)
            verdeG.status = false
            rojoG.status = true
            break; 
        case(cantidad ===3 && verdeG.status && !verdeG.batalla):
            verdeG.rollDice()
            verdeG.Relays(verdeG.casilla)
            verdeG.Portales(verdeG.casilla)
            verdeG.blackhole(verdeG.casilla)
            verdeG.status = false
            rojoG.status = true
            break; 
        //CASE 3 fin
        case(cantidad ===4 && rojoG.status && rojoG.batalla):
            rojoG.batallaF(rojoG.casilla)
            rojoG.status = false
            magentaG.status = true
        break; 
        case(cantidad ===4 && rojoG.status && !rojoG.batalla):
            rojoG.rollDice()
            rojoG.Relays(rojoG.casilla)
            rojoG.Portales(rojoG.casilla)
            rojoG.blackhole(rojoG.casilla)
            rojoG.status = false
            magentaG.status = true
            break; 
        case(cantidad ===4 && magentaG.status && magentaG.batalla):
            magentaG.batallaF(magentaG.casilla)
            magentaG.status = false
            verdeG.status = true
            break; 
        case(cantidad ===4 && magentaG.status && !magentaG.batalla):
            magentaG.rollDice()
            magentaG.Relays(magentaG.casilla)
            magentaG.Portales(magentaG.casilla)
            magentaG.blackhole(magentaG.casilla)
            magentaG.status = false
            verdeG.status = true
            break;
        case(cantidad ===4 && verdeG.status && verdeG.batalla):
            verdeG.batallaF(verdeG.casilla)
            verdeG.status = false
            amarilloG.status = true
            break; 
        case(cantidad ===4 && verdeG.status && !verdeG.batalla):
            verdeG.rollDice()
            verdeG.Relays(verdeG.casilla)
            verdeG.Portales(verdeG.casilla)
            verdeG.blackhole(verdeG.casilla)
            verdeG.status = false
            amarilloG.status = true
            break; 
        case(cantidad ===4 && amarilloG.status && amarilloG.batalla):
            amarilloG.batallaF(amarilloG.casilla)
            amarilloG.status = false
            rojoG.status = true
            break; 
        case(cantidad ===4 && amarilloG.status && !amarilloG.batalla):
            amarilloG.rollDice()
            amarilloG.Relays(amarilloG.casilla)
            amarilloG.Portales(amarilloG.casilla)
            amarilloG.blackhole(amarilloG.casilla)
            amarilloG.status = false
            rojoG.status = true
            break; 
        //CASE 4 fin
        case(cantidad ===5 && rojoG.status && rojoG.batalla):
            rojoG.batallaF(rojoG.casilla)
            rojoG.status = false
            magentaG.status = true
            break; 
        case(cantidad ===5 && rojoG.status && !rojoG.batalla):
            rojoG.rollDice()
            rojoG.Relays(rojoG.casilla)
            rojoG.Portales(rojoG.casilla)
            rojoG.blackhole(rojoG.casilla)
            rojoG.status = false
            magentaG.status = true
            break; 
        case(cantidad ===5 && magentaG.status && magentaG.batalla):
            magentaG.batallaF(magentaG.casilla)
            magentaG.status = false
            verdeG.status = true
            break; 
        case(cantidad ===5 && magentaG.status && !magentaG.batalla):
            magentaG.rollDice()
            magentaG.Relays(magentaG.casilla)
            magentaG.Portales(magentaG.casilla)
            magentaG.blackhole(magentaG.casilla)
            magentaG.status = false
            verdeG.status = true
            break;
        case(cantidad ===5 && verdeG.status && verdeG.batalla):
            verdeG.batallaF(verdeG.casilla)
            verdeG.status = false
            amarilloG.status = true
            break; 
        case(cantidad ===5 && verdeG.status && !verdeG.batalla):
            verdeG.rollDice()
            verdeG.Relays(verdeG.casilla)
            verdeG.Portales(verdeG.casilla)
            verdeG.blackhole(verdeG.casilla)
            verdeG.status = false
            amarilloG.status = true
            break;
        case(cantidad ===5 && amarilloG.status && amarilloG.batalla):
            amarilloG.batallaF(amarilloG.casilla)
            amarilloG.status = false
            cianG.status = true
            break;  
        case(cantidad ===5 && amarilloG.status && !amarilloG.batalla):
            amarilloG.rollDice()
            amarilloG.Relays(amarilloG.casilla)
            amarilloG.Portales(amarilloG.casilla)
            amarilloG.blackhole(amarilloG.casilla)
            amarilloG.status = false
            cianG.status = true
            break; 
        case(cantidad ===5 && cianG.status && cianG.batalla):
            cianG.batallaF(cianG.casilla)
            cianG.status = false
            rojoG.status = true
            break; 
        case(cantidad ===5 && cianG.status && !cianG.batalla):
            cianG.rollDice()
            cianG.Relays(cianG.casilla)
            cianG.Portales(cianG.casilla)
            cianG.blackhole(cianG.casilla)
            cianG.status = false
            rojoG.status = true
            break; 
        //CASE 5 fin
        default:
                //default here
            break;
    }
}





//SAVE
// Funcion para llamar lanzarDatos por boton
/*const lanzaDados = document.querySelectorAll('.lanzaDados');
for (let i = 0; i < lanzaDados.length; i++) {
    lanzaDados[i].addEventListener("click", function(e) {
        
        switch(e.target.accessKey){
            case "rojo":
                rojoG.rollDice()
                break;
            case "magenta":
                magentaG.rollDice()
                break;
            case "verde":
                verdeG.rollDice()
                break;   
            case "amarillo":
                amarilloG.rollDice()
                break;
            case "cian":
                cianG.rollDice()
                break; 
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }

     });
 };*/