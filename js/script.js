function entrarApp(){

document.getElementById("bienvenida").style.display="none"
document.getElementById("app").style.display="block"

}

function volverInicio(){

document.getElementById("app").style.display="none"
document.getElementById("bienvenida").style.display="flex"

}

function irLugar(lat,lon){

let url=`https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`
window.open(url)

}


/* BUSCADOR */

const buscador=document.getElementById("buscarLugar")

buscador.addEventListener("keyup",function(){

let texto=buscador.value.toLowerCase()

let lugares=document.querySelectorAll(".tarjeta")

lugares.forEach(function(lugar){

let nombre=lugar.innerText.toLowerCase()

if(nombre.includes(texto)){
lugar.style.display="block"
}else{
lugar.style.display="none"
}

})

})


/* FILTRO CATEGORIAS */

function filtrar(categoria){

let lugares=document.querySelectorAll(".tarjeta")

lugares.forEach(function(lugar){

if(categoria=="todos"){

lugar.style.display="block"

}else if(lugar.classList.contains(categoria)){

lugar.style.display="block"

}else{

lugar.style.display="none"

}

})

}


/* ACTIVIDADES */

function verActividades(lugar){

if(lugar=="basilica"){

alert(
"Basílica del Señor de los Milagros\n\n"+
"Actividades:\n"+
"- Visitar la basílica\n"+
"- Comprar recuerdos religiosos\n"+
"- Recorrer el centro histórico\n"+
"- Probar dulces típicos"
)

}

if(lugar=="parque"){

alert(
"Parque Cabal\n\n"+
"Actividades:\n"+
"- Caminar por la plaza\n"+
"- Tomar fotografías\n"+
"- Comer helado o café\n"+
"- Ver la arquitectura colonial"
)

}

if(lugar=="cascada"){

alert(
"Cascada del Milagroso\n\n"+
"Actividades:\n"+
"- Senderismo\n"+
"- Fotografía natural\n"+
"- Baño en la cascada\n"+
"- Picnic"
)

}

}

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")

.then(()=>console.log("PWA instalada"))

.catch(err=>console.log(err))

}