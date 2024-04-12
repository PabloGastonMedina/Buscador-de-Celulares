//VARIABLES
const resultado = document.querySelector("#resultado")
const year = document.querySelector(".years_select")

const max = new Date().getFullYear();
const min = max - 9;


//EVENTOS
document.addEventListener("DOMContentLoaded", () =>{
    mostrarCelulares(); //mostramos los celulares al cargar

    llenarSelect(); //llenamos los años en select
})




//FUNCIONES
function mostrarCelulares() {
    celulares.forEach( celular =>{
        const {marca, modelo, years, precio, ram, pantalla, color} = celular;
       const celularHTML = document.createElement("p");

       celularHTML.textContent =  `
        ${marca} ${modelo}  --  ${years}  -- ${ram}gb RAM  --  Pantalla ${pantalla}  --  ${color}  -- $${precio}
       `;

       resultado.appendChild(celularHTML)


    })

  
}

function llenarSelect() {
    
    for( let i = max; i >= min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}