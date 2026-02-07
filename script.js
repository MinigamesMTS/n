const buscador = document.getElementById("buscador");
const lista = document.getElementById("lista");
const titulo = document.getElementById("titulo");
const textoJuego = document.getElementById("juego");

let modoActual = "juegos";

/* BUSCADOR */
buscador.addEventListener("keyup", () => {
  const texto = buscador.value.toLowerCase();
  const items = lista.getElementsByTagName("li");

  for (let item of items) {
    const nombre = item.textContent.toLowerCase();
    item.style.display = nombre.includes(texto) ? "flex" : "none";
  }
});

/* SELECCIONAR JUEGO */
function seleccionar(nombre) {
  textoJuego.textContent = nombre;
}

/* MENÚ */
function mostrarJuegos() {
  modoActual = "juegos";
  titulo.textContent = "☰ Juegos optimizados";
  buscador.value = "";
  mostrarTodo();
}

function mostrarProgramas() {
  modoActual = "programas";
  titulo.textContent = "🧩 Programas";
  buscador.value = "";
  mostrarTodo();
}

/* MOSTRAR TODOS LOS ÍTEMS */
function mostrarTodo() {
  const items = lista.getElementsByTagName("li");
  for (let item of items) {
    item.style.display = "flex";
  }
}
