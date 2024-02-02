//CLASE 1
/* let costoBase = 1.16;

let metros2 = prompt('Ingresa los metros cuadrados de la vivienda: ');
let tipoVivienda = window.prompt("Selecciona la vivienda a cotizar: \n ('Casa', 'P.H.', 'Dto. Edificio')")
switch (tipoVivienda) {
    case 'Casa':
        fm=1.009;
        break;
    case 'P.H':
        fm=1.005;
        break;
    case 'Depto':
        fm = 1.002;
        break;
    case 'Barrio Privado':
        fm = 1.019;
        break;
    case 'Oficina':
        fm = 1.039;
        break;
    case 'Local comercial':
        fm = 1.041;
        break;
    case 'Depósito logística':
        fm = 1.092;
        break;	
    default:
        alert("Valor no válido");
}

let Resultado = costoBase * metros2 * fm;
window.alert ("El monto total de la poliza es $"+ Resultado)
 */

//CLASE 2
/* let fm 
const costoM2 = 1.16
let metros2 = prompt("Ingresa los metros cuadrados de la vivienda: ")

// El f.m. de la vivienda se vuelve dinámico
let tipoVivienda = prompt("Selecciona la vivienda a cotizar: \n" +
                          "('Casa', 'P.H.', 'Dto. Edificio')")

switch(tipoVivienda) {
    case "Casa":
        fm = 1.009
        break
    case "P.H.":
        fm = 1.005
        break
    case "Dto. Edificio":
        fm = 1.002
        break
    default:
        fm = 1.000
}

//validamos que 'fm' sea mayor a 1.000 y que metros2 sea un número
if (fm > 1.000 && parseInt(metros2)) {
    let resultado = fm * metros2 * costoM2
    console.log("Resultado de la Póliza: $ " + resultado)
} else {
    console.warn("Hubo un error en los datos ingresados.")
} */

//CLASE 3
/* let fmPropiedad
let fmUbicacion
const costoM2 = 1.16

const datosPropiedad = [{tipo: 'Casa', factor: 1.009},
                        {tipo: 'P.H.', factor: 1.005},
                        {tipo: 'Depto. Edificio', factor: 1.002},
                        {tipo: 'Barrio Privado', factor: 1.09},
                        {tipo: 'Oficina', factor: 1.079},
                        {tipo: 'Local Comercial', factor: 1.041},
                        {tipo: 'Depósito Logística', factor: 1.072}]

const datosUbicacion = [{tipo: 'CABA', factor: 1.013},
                        {tipo: 'Tandil', factor: 1.004},
                        {tipo: 'Costa Atlántica', factor: 1.029},
                        {tipo: 'Patagonia', factor: 1.000},]

let metros2 = prompt("Ingresa los metros cuadrados de la vivienda: ")

let tipoVivienda = prompt("Selecciona la vivienda a cotizar: \n" +
                          "('Casa', 'P.H.', 'Dto. Edificio')")

    if (tipoVivienda !== '') {
        for (propiedad of datosPropiedad) {
            if (propiedad.tipo === tipoVivienda) {
                fmPropiedad = propiedad
                break
            }
        }
    }

let tipoUbicacion = prompt("Selecciona la ubicación de la vivienda: \n" +
                          "('CABA', 'Tandil', 'Costa Atlántica')")

    if (tipoUbicacion !== '') {
        for (ubicacion of datosUbicacion) {
            if (ubicacion.tipo === tipoUbicacion) {
                fmUbicacion = ubicacion
                break
            }
        }
    }

if (fmPropiedad && fmUbicacion && parseInt(metros2)) {
    let resultado = fmPropiedad.factor * fmUbicacion.factor * metros2 * costoM2
    console.log("Resultado de la Póliza: $ " + resultado)
} else {
    console.warn("Hubo un error en los datos ingresados.")
} */

// CLASE 4
/* document.addEventListener("DOMContentLoaded", function() {
let fmPropiedad
let fmUbicacion
const costoM2 = 1.16
const datosPropiedad = [{tipo: 'Casa', factor: 1.009},
                        {tipo: 'P.H.', factor: 1.005},
                        {tipo: 'Depto. Edificio', factor: 1.002},
                        {tipo: 'Barrio Privado', factor: 1.09},
                        {tipo: 'Oficina', factor: 1.079},
                        {tipo: 'Local Comercial', factor: 1.041},
                        {tipo: 'Depósito Logística', factor: 1.072}]

const datosUbicacion = [{tipo: 'CABA', factor: 1.013},
                        {tipo: 'Tandil', factor: 1.004},
                        {tipo: 'Costa Atlántica', factor: 1.029},
                        {tipo: 'Patagonia', factor: 1.000},]
const selectPropiedad = document.querySelector("select#propiedad")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")

function cargarComboPropiedad() {
    let opcionPropiedad
    for (let propiedad of datosPropiedad) {
        opcionPropiedad += "<option>" + propiedad.tipo + "</option>"
    }
    selectPropiedad.innerHTML = opcionPropiedad
}

function cargarComboUbicacion() {
    let opcionUbicacion
    for (let ubicacion of datosUbicacion) {
        opcionUbicacion += "<option>" + ubicacion.tipo + "</option>"
    }
    selectUbicacion.innerHTML = opcionUbicacion
}

function obtenerFMPropiedad() {
    if (selectPropiedad.value !== '') {
        for (propiedad of datosPropiedad) {
            if (propiedad.tipo === selectPropiedad.value) {
                return propiedad.factor
            }
        }
    }
}

function obtenerFMUbicacion() {
    if (selectUbicacion.value !== '') {
        for (ubicacion of datosUbicacion) {
            if (ubicacion.tipo === selectUbicacion.value) {
                return ubicacion.factor
            }
        }
    }
}

btnCotizar.onclick = function () {
    if (obtenerFMPropiedad() && obtenerFMUbicacion() && parseInt(inputMetros2.value)) {
        let resultado = obtenerFMPropiedad() * obtenerFMUbicacion() * parseInt(metros2.value) * costoM2
        console.log("Resultado de la Póliza: $ " + resultado)
    } else {
        console.warn("Hubo un error en los datos ingresados.")
    }
}

cargarComboPropiedad()
cargarComboUbicacion()
}); */

//CLASE 5
document.addEventListener("DOMContentLoaded", function() {
let fmPropiedad
let fmUbicacion
const costoM2 = 1.16

const selectPropiedad = document.querySelector("select#propiedad")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")
const divPrincipal = document.querySelector("div.div-quote")
const spanPoliza = document.querySelector("span#valorPoliza")

function cargarComboPropiedad() {
    let opcionPropiedad
    for (let propiedad of datosPropiedad) {
        opcionPropiedad += "<option>" + propiedad.tipo + "</option>"
    }
    selectPropiedad.innerHTML = opcionPropiedad
}

function cargarComboUbicacion() {
    let opcionUbicacion
    for (let ubicacion of datosUbicacion) {
        opcionUbicacion += "<option>" + ubicacion.tipo + "</option>"
    }
    selectUbicacion.innerHTML = opcionUbicacion
}

function obtenerFMPropiedad() {
    if (selectPropiedad.value !== '') {
        for (propiedad of datosPropiedad) {
            if (propiedad.tipo === selectPropiedad.value) {
                return propiedad.factor
            }
        }
    }
}

function obtenerFMUbicacion() {
    if (selectUbicacion.value !== '') {
        for (ubicacion of datosUbicacion) {
            if (ubicacion.tipo === selectUbicacion.value) {
                return ubicacion.factor
            }
        }
    }
}

btnCotizar.onclick = function () {
    divPrincipal.classList.add("div-blocked")
    btnCotizar.innerHTML = '<img src="images/animation.gif">'
    
    setTimeout(() => {
        if (obtenerFMPropiedad() && obtenerFMUbicacion() && parseInt(metros2.value)) {
            let resultado = obtenerFMPropiedad() * obtenerFMUbicacion() * parseInt(metros2.value) * costoM2
            spanPoliza.textContent = resultado.toFixed(2)
        } else {
            console.warn("Hubo un error en los datos ingresados.")
        }
        divPrincipal.classList.remove("div-blocked")
        btnCotizar.textContent = 'cotizar'
    }, 3500)
}

cargarComboPropiedad()
cargarComboUbicacion()
});
