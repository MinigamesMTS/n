const lista = document.getElementById("lista");
const titulo = document.getElementById("titulo");
const buscador = document.querySelector(".buscador");

let datosActuales = [];

/* -------- DATOS -------- */
const juegos = [
  { nombre: "Kenshi", tag: "64 BITS" },
  { nombre: "Left 4 Dead", tag: "LAN" },
  { nombre: "Left 4 Dead 2", tag: "LAN" },
  { nombre: "Lethal Company", tag: "" },
  { nombre: "Little Nightmares", tag: "" }
];

const programas = [
  { nombre: "WinRAR" },
  { nombre: "7-Zip" },
  { nombre: "OBS Studio" },
  { nombre: "VLC Media Player" }
];

/* -------- FUNCIONES -------- */
function renderLista(datos) {
  lista.innerHTML = "";

  if (datos.length === 0) {
    lista.innerHTML = "<li>No se encontraron resultados</li>";
    return;
  }

  datos.forEach(item => {
    const li = document.createElement("li");
    li.onclick = () => seleccionar(item.nombre);

    li.innerHTML = item.tag
      ? `${item.nombre} <span class="tag">${item.tag}</span>`
      : item.nombre;

    lista.appendChild(li);
  });
}

function seleccionar(nombre) {
  document.getElementById("juego").textContent = nombre;
}

function mostrarJuegos() {
  titulo.textContent = "☰ Juegos optimizados";
  datosActuales = juegos;
  buscador.value = "";
  renderLista(juegos);
}

function mostrarProgramas() {
  titulo.textContent = "☰ Programas";
  datosActuales = programas;
  buscador.value = "";
  renderLista(programas);
}

/* -------- BUSCADOR -------- */
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  const filtrados = datosActuales.filter(item =>
    item.nombre.toLowerCase().includes(texto)
  );

  renderLista(filtrados);
});

/* -------- CARGA INICIAL -------- */
mostrarJuegos();

