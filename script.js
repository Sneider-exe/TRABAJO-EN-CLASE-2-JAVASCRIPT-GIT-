// Obtén referencias a los elementos del HTML
const TextoIng = document.getElementById("TextoIngresado");
const Agregar = document.getElementById("BotonAgregar");
const Eliminar = document.getElementById("BotonEliminar");
const ListaTx = document.getElementById("ListaTextos");

// Inicializa un arreglo para almacenar las entradas
const entradas = [];

// Agrega un manejador de eventos al botón "Convertir a Minúscula"


function Minusculas(){
    // Obtiene el texto ingresado por el usuario
    const textoIngresado = TextoIng.value;

    // Convierte el texto a minúsculas
    const textoEnMinusculas = textoIngresado.toLowerCase();

    // Agrega el texto a la lista
    entradas.push(textoEnMinusculas);

    // Crea un nuevo elemento de lista (li) y lo agrega a la lista
    const listItem = document.createElement("li");
    listItem.textContent = textoEnMinusculas;
    ListaTx.appendChild(listItem);

    // Limpia el input para una nueva entrada
    TextoIng.value = "";
};

// Agrega un manejador de eventos al botón "Borrar última entrada"
function Borrar() {
    // Verifica si hay entradas en la lista
    if (entradas.length > 0) {
        // Remueve la última entrada de la lista
        entradas.pop();
        // Remueve el último elemento de la lista en el DOM
        ListaTx.removeChild(ListaTx.lastChild);
    }
};

Agregar.onclick = Minusculas;
Eliminar.onclick = Borrar;
