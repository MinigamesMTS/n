const buscador = document.getElementById("buscador");
const juegos = document.querySelectorAll(".juego");
const titulo = document.getElementById("titulo-juego");
const descripcion = document.getElementById("descripcion");

/* BUSCADOR */
buscador.addEventListener("keyup", () => {
  const texto = buscador.value.toLowerCase();

  juegos.forEach(juego => {
    const nombre = juego.textContent.toLowerCase();
    juego.style.display = nombre.includes(texto) ? "block" : "none";
  });
});

/* FILTRO */
function filtrar(categoria) {
  juegos.forEach(juego => {
    if (categoria === "todos") {
      juego.style.display = "block";
    } else {
      const cats = juego.dataset.categoria;
      juego.style.display = cats.includes(categoria) ? "block" : "none";
    }
  });
}

/* SELECCIÓN */
function seleccionarJuego(nombre) {
  titulo.textContent = nombre;
  descripcion.textContent = "Información del juego " + nombre + ". Puedes editar esto en el script.";
}


