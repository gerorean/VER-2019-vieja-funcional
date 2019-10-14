/*VARIABLES**************************************************/
var cursor = 2;
var maxi = false;
var user = false;





/*PONER, QUITAR PANTALLA COMPLETA**************************************************/
var elem = document.documentElement;
function expandir()
{
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    document.getElementById("_min").style.right = "8px";/*VISIBLE: 8px :::: OCULTO: -60 px*/
    document.getElementById("_max").style.right = "-60px";/*VISIBLE: 8px :::: OCULTO: -60 px*/
    maxi = true;
}
function comprimir()
{
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  document.getElementById("_min").style.right = "-60px";/*VISIBLE: 8px :::: OCULTO: -60 px*/
  document.getElementById("_max").style.right = "8px";/*VISIBLE: 8px :::: OCULTO: -60 px*/
  maxi = false;
}





/*ESCUCHAR EVENTOS CON FLECHAS*******************************************/
var teclas = {UP: 38,DOWN: 40,LEFT: 37,RIGHT: 39}
document.addEventListener("keyup", teclear);
function teclear(evento)
{
  if (evento.keyCode == teclas.RIGHT)
  {
    avanzar(), activarMenu();
  }
  if (evento.keyCode == teclas.LEFT)
  {
    regresar(), activarMenu();
  }
}




/*FUNCIONES EN ORDEN ALFABETICO***********************************************/
function activarMenu()
{
  resetLugar();
  document.getElementById("piso").style.width = "100%";
  document.getElementById("techo").style.width = "100%";
  switch(cursor)
  {
    case 1:
        mapa();
      break;
    case 2:
        chatCom();
        inicio2();
      break;
    case 3:
        if (user)
        {
          chatPrivado();
          inicio3();
          document.getElementById("_emergencia").style.width = "0%";
          document.getElementById("_emergenciaOff").style.width = "0%";
          document.getElementById("_chatPrivado").style.width = "20%";
          document.getElementById("_chatPrivadoOff").style.width = "0%";
          document.getElementById("_mensajesPri").style.top = "20px";
        }
        else
        {
          rojo();
          emergencia();
          inicio6();
          document.getElementById("_emergencia").style.width = "20%";
          document.getElementById("_emergenciaOff").style.width = "0%";
          document.getElementById("_chatPrivado").style.width = "0%";
          document.getElementById("_chatPrivadoOff").style.width = "0%";
          document.getElementById("_mensajesPri").style.top = "-65px";
        }       
      break;
    case 4:
        if (user)
        {
          contactos();
          inicio4();
          document.getElementById("_enlaces").style.width = "0%";
          document.getElementById("_enlacesOff").style.width = "0%";
          document.getElementById("_contactos").style.width = "20%";
          document.getElementById("_contactosOff").style.width = "0%";
        }
        else
        {
          enlaces();
          inicio7();
          document.getElementById("_enlaces").style.width = "20%";
          document.getElementById("_enlacesOff").style.width = "0%";
          document.getElementById("_contactos").style.width = "0%";
          document.getElementById("_contactosOff").style.width = "0%";
        }
      break;
    case 5:
        cuatroOff();
        promo();
        inicio5();
      break;
    default:
      console.log("herror " + cursor);
  }
}


function avanzar()
{
  if (cursor < 5)
  {
    cursor += 1;
  }
  else
  {
    cursor = 1;
    document.getElementById("_promo").style.width = "0%";    
    document.getElementById("_promoOff").style.width = "20%";
  } 
}


function regresar()
{
  if (cursor == 5)
    {
      document.getElementById("_promoOff").style.width = "20%";/**/
      document.getElementById("_promo").style.width = "0%";
    }
  if (1 < cursor)
  {    
    cursor -= 1;
  }
  else
  {
    cursor = 5;
    mapaOff();
  }
}


function verMaxMin()/*G2__ RESETEA LUGAR Y OCULTA ICONO DE PROMO SI ESTE ESTA ACTIVO PARA ACTIVAR ICONOS AMPLIAR/REDUCIR PANTALLA*/
{
  resetLugar();
  if (cursor == 5)
  {
    document.getElementById("_promo").style.width = "20%";
  }
}



function abrir()
{
  document.getElementById("_cerrar").style.width = "20%";
  document.getElementById("_abrir").style.width = "0%";
  var z =document.getElementsByClassName("ayuda");
  var m;
  for (m = 0; m < z.length; m++) {
    z[m].style.bottom = "-65px";
  }
}


function cerrar()
{
  document.getElementById("_cerrar").style.width = "0%";
  document.getElementById("_abrir").style.width = "20%";
  var z =document.getElementsByClassName("ayuda");
  var m;
  for (m = 0; m < z.length; m++) {
    z[m].style.bottom = "15px";
  }
}



/**/
function rojo()
{
  document.getElementById("_alerta_").style.width = "20%";
  document.getElementById("_alerta").style.width = "0%";
  document.getElementById("piso").style.width = "0%";
  document.getElementById("techo").style.width = "0%";
  /*var z =document.getElementsByClassName("ayuda");
  var m;
  for (m = 0; m < z.length; m++) {
    z[m].style.bottom = "-65px";
  }*/
}


function rojo_()
{
  document.getElementById("_alerta_").style.width = "0%";
  document.getElementById("_alerta").style.width = "20%";
  document.getElementById("piso").style.width = "100%";
  document.getElementById("techo").style.width = "100%";
  /*var z =document.getElementsByClassName("ayuda");
  var m;
  for (m = 0; m < z.length; m++) {
    z[m].style.bottom = "15px";
  }*/
}
/**/


function usuario()
{
  user = true;
  document.getElementById("_cuenta").style.left = "-65px";
  document.getElementById("_usuario").style.left = " calc(50% - 30px)";
  menuOff();
}



function cuenta()
{
  user = false;  
  document.getElementById("_cuenta").style.left = " calc(50% - 30px)";
  document.getElementById("_usuario").style.left = "-65px";
  menuOff();
}



/**************************************************OCULTAR MENU*/
function ocultar()
{
  document.getElementById("menu").style.height = "0px";
  document.getElementById("escenarios").style.height = "100%";
  document.getElementById("escenarios").style.top = "0px";
  document.getElementById("_ocultar").style.left = "-65px";
  document.getElementById("_mostrar").style.left = "calc(50% + 30px)";
}

function mostrar()
{
  document.getElementById("menu").style.height = "60px";
  document.getElementById("escenarios").style.height = "calc(100% - 60px)";
  document.getElementById("escenarios").style.top = "60px";
  document.getElementById("_ocultar").style.left = "calc(50% + 30px)";
  document.getElementById("_mostrar").style.left = "-65px";
}


/*******************************************RESET GENERAL DE VARIABLES*/
function botonesOff()/*OCULTA BOTONES EMERGENTES DE LA DERECHA*/
{
  document.getElementById("_arriba").style.right = "-65px";
  document.getElementById("_alertar").style.right = "-65px";
  document.getElementById("_bajar").style.right = "-65px";
  document.getElementById("_enviar").style.right = "-65px";
  document.getElementById("_contactar").style.right = "-65px";
}

function menuOff()/*HABILITA TODOS LOS BOTONES OFF Y DESHABILITA LOS ON*/
{
  document.getElementById("_mapa").style.width = "0%";
  document.getElementById("_mapaOff").style.width = "20%";/**/
  document.getElementById("_chatCom").style.width = "0%";
  document.getElementById("_chatComOff").style.width = "20%";/**/
  document.getElementById("_chatPrivado").style.width = "0%";
  document.getElementById("_chatPrivadoOff").style.width = "0%";
  document.getElementById("_mensajesPri").style.top = "-65px";/**/
  document.getElementById("_contactos").style.width = "0%";
  document.getElementById("_contactosOff").style.width = "0%";
  document.getElementById("_emergencia").style.width = "0%";
  document.getElementById("_emergenciaOff").style.width = "0%";
  document.getElementById("_enlaces").style.width = "0%";
  document.getElementById("_enlacesOff").style.width = "0%";
  document.getElementById("_promo").style.width = "0%";/**/
  document.getElementById("_promoOff").style.width = "20%";/**/ 
  document.getElementById("led1").style.backgroundColor = "transparent";
  document.getElementById("led2").style.backgroundColor = "transparent";
  document.getElementById("led3A").style.backgroundColor = "transparent";
  document.getElementById("led3A").style.left = "-10px";
  document.getElementById("led3B").style.backgroundColor = "transparent";
  document.getElementById("led3B").style.left = "-10px";
  document.getElementById("led4A").style.backgroundColor = "transparent";
  document.getElementById("led4A").style.left = "-10px";
  document.getElementById("led4B").style.backgroundColor = "transparent";
  document.getElementById("led4B").style.left = "-10px";
  document.getElementById("led5").style.backgroundColor = "transparent";


  if(user)
  {
    document.getElementById("_chatPrivadoOff").style.width = "20%";
    document.getElementById("_mensajesPri").style.top = "20px";
    document.getElementById("_contactosOff").style.width = "20%";
    document.getElementById("led3B").style.left = "calc(50% - 4px)";
    document.getElementById("led4B").style.left = "calc(70% - 4px)";
  }
  else
  {
    document.getElementById("_emergenciaOff").style.width = "20%";
    document.getElementById("_enlacesOff").style.width = "20%";
    document.getElementById("led3A").style.left = "calc(50% - 4px)";
    document.getElementById("led4A").style.left = "calc(70% - 4px)";
  }
}


function limpiar()
{
  document.getElementById("mapa").style.height = "0%";
  document.getElementById("chatCom").style.height = "0%";
  document.getElementById("chatPrivado").style.height = "0%";
  document.getElementById("contactos").style.height = "0%";
  document.getElementById("promo").style.height = "0%";
  document.getElementById("prohibido").style.height = "0px";
  document.getElementById("emergencia").style.height = "0%";
  document.getElementById("enlaces").style.height = "0%";
}





/**************************************************ACTIVAR MAPA */
function mapa()
{
  cursor = 1;
  botonesOff();
  menuOff();
  limpiar();
  rojo_();
  document.getElementById("_mapa").style.width = "20%";
  document.getElementById("_mapaOff").style.width = "0%";
  document.getElementById("led1").style.backgroundColor = "white";
  document.getElementById("mapa").style.height = "100%";
  document.getElementById("prohibido").style.height = "40px";
}

function mapaOff()
{
  document.getElementById("_mapa").style.width = "0%";
  document.getElementById("_mapaOff").style.width = "20%";
}


/**************************************************ACTIVAR CHAT COMUNITARIO */
function chatCom()
{
  cursor = 2;
  botonesOff();
  menuOff();
  limpiar();
  rojo_();
  document.getElementById("led2").style.backgroundColor = "white";
  document.getElementById("_chatCom").style.width = "20%";
  document.getElementById("_chatComOff").style.width = "0%";
  document.getElementById("chatCom").style.height = "100%";
}

/**************************************************ACTIVAR CHAT PRIVADO*/
function chatPrivado()
{
  cursor = 3;
  botonesOff();
  menuOff();
  limpiar();
  rojo_();
  document.getElementById("led3B").style.backgroundColor = "white";
  document.getElementById("_chatPrivado").style.width = "20%";
  document.getElementById("_chatPrivadoOff").style.width = "0%";
  document.getElementById("chatPrivado").style.height = "100%";
}


/**************************************************ACTIVAR CONTACTOS*/
function contactos()
{
  cursor = 4;
  botonesOff();
  menuOff();
  limpiar();
  rojo_();
  document.getElementById("led4B").style.backgroundColor = "white";
  document.getElementById("_contactos").style.width = "20%";
  document.getElementById("_contactosOff").style.width = "0%";
  document.getElementById("contactos").style.height = "100%";
}

function cuatroOff()
{
  if(user)
  {
    document.getElementById("_contactos").style.width = "0%";
    document.getElementById("_contactosOff").style.width = "20%";
    document.getElementById("led4B").style.backgroundColor = "transparent";
  }
  else
  {
    document.getElementById("_enlaces").style.width = "0%";
    document.getElementById("_enlacesOff").style.width = "20%";
    document.getElementById("led4A").style.backgroundColor = "transparent";
  }
}

function promo()
{
  cursor = 5;
  botonesOff();
  menuOff();
  limpiar();
  rojo_();
  document.getElementById("led5").style.backgroundColor = "white";
  document.getElementById("_promo").style.width = "20%";
  document.getElementById("_promoOff").style.width = "0%";
  document.getElementById("promo").style.height = "100%";
}



/************************************ACTIVAR MENSAJE EMERGENCIA*/
function emergencia()
{
  cursor = 3;
  botonesOff();
  menuOff();
  limpiar();
  document.getElementById("led3A").style.backgroundColor = "white";
  document.getElementById("_chatPrivado").style.width = "0%";/*??????????????????*/
  document.getElementById("_chatPrivadoOff").style.width = "0%";/*??????????????????*/
  document.getElementById("_mensajesPri").style.top = "-65px";/*prueba*/
  document.getElementById("_emergencia").style.width = "20%";
  document.getElementById("_emergenciaOff").style.width = "0%"; 
  document.getElementById("emergencia").style.height = "100%";
  document.getElementById("piso").style.width = "0%";
  document.getElementById("techo").style.width = "0%";
}


/**************************************************ACTIVAR ENLACES*/
function enlaces()
{
  cursor = 4;
  botonesOff();
  menuOff();
  limpiar();
  rojo_();
  document.getElementById("led4A").style.backgroundColor = "white";
  document.getElementById("_contactos").style.width = "0%";/*??????????????????*/
  document.getElementById("_contactosOff").style.width = "0%";/*??????????????????*/
  document.getElementById("_enlaces").style.width = "20%";
  document.getElementById("_enlacesOff").style.width = "0%"; 
  document.getElementById("enlaces").style.height = "100%";
}





function cerca()
{ 
  document.getElementById("_acercar").style.left = "-65px";
  document.getElementById("_alejar").style.left = "calc(50% - 90px)";
  var u =document.getElementsByClassName("texto15");
  var h;
  for (h = 0; h < u.length; h++) {
    u[h].style.fontSize = "22px";
  }
  var v =document.getElementsByClassName("texto20");
  var i;
  for (i = 0; i < v.length; i++) {
    v[i].style.fontSize = "30px";
  }
  var w =document.getElementsByClassName("texto25");
  var j;
  for (j = 0; j < w.length; j++) {
    w[j].style.fontSize = "37px";
  }
  var x =document.getElementsByClassName("texto30");
  var k;
  for (k = 0; k < x.length; k++) {
    x[k].style.fontSize = "45px";
  }
  var y =document.getElementsByClassName("texto35");
  var l;
  for (l = 0; l < y.length; l++) {
    y[l].style.fontSize = "52px";
  }
}




function lejos()
{
  document.getElementById("_acercar").style.left = "calc(50% - 90px)";
  document.getElementById("_alejar").style.left = "-65px";
  var u =document.getElementsByClassName("texto15");
  var h;
  for (h = 0; h < u.length; h++) {
    u[h].style.fontSize = "15px";
  }
  var v =document.getElementsByClassName("texto20");
  var i;
  for (i = 0; i < v.length; i++) {
    v[i].style.fontSize = "20px";
  }
  var w =document.getElementsByClassName("texto25");
  var j;
  for (j = 0; j < w.length; j++) {
    w[j].style.fontSize = "25px";
  }
  var x =document.getElementsByClassName("texto30");
  var k;
  for (k = 0; k < x.length; k++) {
    x[k].style.fontSize = "30px";
  }
  var y =document.getElementsByClassName("texto35");
  var l;
  for (l = 0; l < y.length; l++) {
    y[l].style.fontSize = "35px";
  }
}



/**************************************************IR A LOS INICIOS*/
function resetLugar() {
  var elmnt0 = document.getElementById("lugarOff");
  elmnt0.scrollLeft = 0;
  var elmnt1 = document.getElementById("lugar");
  elmnt1.scrollLeft = 0;
}

function inicio2() {
  var elmnt = document.getElementById("chatCom");
  elmnt.scrollTop = 0;
}

function inicio3() {
  var elmnt = document.getElementById("chatPrivado");
  elmnt.scrollTop = 0;
}

function inicio4() {
  var elmnt = document.getElementById("contactos");
  elmnt.scrollTop = 0;
}

function inicio5() {
  var elmnt = document.getElementById("promo");
  elmnt.scrollTop = 0;
}

function inicio6() {
  var elmnt = document.getElementById("emergencia");
  elmnt.scrollTop = 0;
}

function inicio7() {
  var elmnt = document.getElementById("enlaces");
  elmnt.scrollTop = 0;
}