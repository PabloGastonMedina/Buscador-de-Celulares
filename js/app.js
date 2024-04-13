//VARIABLES
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const ram = document.querySelector("#ram")
const pantalla = document.querySelector("#pantalla")
const color = document.querySelector("#color")
const year = document.querySelector(".years_select");

//contenedor de resultados
const resultado = document.querySelector("#resultado");


const max = new Date().getFullYear();
const min = max - 9;

//VAMOS A GENERAR UN OBJETO CON LA BUSQUEDA
const datosBusqueda = {
    marca : "",
    years: "",
    minimo: "",
    maximo: "",
    ram: "",
    pantalla: "",
    color: "",
}

//EVENTOS
document.addEventListener("DOMContentLoaded", () =>{
    mostrarCelulares(celulares); //mostramos los celulares al cargar

    llenarSelect(); //llenamos los años en select
})

// Event listener para los select de busqueda
marca.addEventListener("change", (event) =>{
    datosBusqueda.marca = event.target.value;
    filtraCelular();
});
year.addEventListener("change", (event) =>{
    datosBusqueda.years = parseInt(event.target.value);
    filtraCelular();
});
minimo.addEventListener("change", (event) =>{
    datosBusqueda.minimo = event.target.value;
    filtraCelular();
});
maximo.addEventListener("change", (event) =>{
    datosBusqueda.maximo = event.target.value;
    filtraCelular();
});
ram.addEventListener("change", (event) =>{
    datosBusqueda.ram = event.target.value;
    filtraCelular();
});
pantalla.addEventListener("change", (event) =>{
    datosBusqueda.pantalla = event.target.value;
    filtraCelular();
});
color.addEventListener("change", (event) =>{
    datosBusqueda.color = event.target.value;
    filtraCelular();
    console.log(datosBusqueda)
});







//FUNCIONES
function mostrarCelulares(celulares) {

    limpiarHTML(); //Elimina el html previo

    celulares.forEach( celular =>{
        const {marca, modelo, years, precio, ram, pantalla, color} = celular;
       const celularHTML = document.createElement("p");

       celularHTML.textContent =  `
        ${marca} ${modelo}  --  ${years}  -- ${ram}gb RAM  --  Pantalla ${pantalla}  --  ${color}  -- $${precio}
       `;

       resultado.appendChild(celularHTML)
    })
}

//Limpiamos html
function limpiarHTML () {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

}


//Llenamos los select con los años 
function llenarSelect() {
    
    for( let i = max; i >= min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

//Funcion para filtra en base a la busqueda
function filtraCelular() {
    const resultado = celulares.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarRam).filter(filtrarPatalla).filter(filtrarColor);

    if (resultado.length) {
        mostrarCelulares(resultado);
    } else{
        noResultado();
    }
}

function noResultado (){
    limpiarHTML();

    const noResultado = document.createElement("div");
    noResultado.textContent = "NO HAY RESULTADOS";
    noResultado.classList.add("noHayResultado")
    resultado.appendChild(noResultado);
}

function filtrarMarca (celular) {
    const { marca } = datosBusqueda;
    if ( marca ) {
        return celular.marca === marca;
    }
    return celular;
}

function filtrarYear (celular) {
    const { years } = datosBusqueda;
    if ( years ) {
        return celular.years === years;
    }
    return celular;
}

function filtrarMinimo (celular) {
    const { minimo } = datosBusqueda;
    if ( minimo ) {
        return celular.precio >= minimo;
    }
    return celular;

}

function filtrarMaximo (celular){
    const { maximo } = datosBusqueda;
    if ( maximo ) {
        return celular.precio <= maximo;
    }
    return celular;
}

function filtrarRam ( celular){
    const { ram } = datosBusqueda;
    if ( ram ) {
        return celular.ram == ram;
    }
    return celular;
}

function filtrarPatalla (celular){
    const { pantalla } = datosBusqueda;
    if ( pantalla ) {
        return celular.pantalla === pantalla;
    }
    return celular;
}

function filtrarColor (celular){
    const { color } = datosBusqueda;
    if ( color ) {
        return celular.color === color;
    }
    return celular;
}