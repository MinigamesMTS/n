const buscador = document.getElementById("buscador");
const lista = document.getElementById("lista-juegos");
const tituloJuego = document.getElementById("titulo-juego");

/* BUSCADOR (NO BORRA NADA) */
buscador.addEventListener("keyup", () => {
  const texto = buscador.value.toLowerCase();
  const juegos = lista.getElementsByTagName("li");

  for (let juego of juegos) {
    juego.style.display = juego.textContent.toLowerCase().includes(texto)
      ? "block"
      : "none";
  }
});

/* SELECCIONAR JUEGO */
function seleccionarJuego(nombre) {
  tituloJuego.textContent = nombre;
}
