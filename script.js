const modal = document.getElementById("modal");
const textoJuego = document.getElementById("juego");

let juegoSeleccionado = "";

/* SELECCIONAR JUEGO */
function seleccionarJuego(nombre) {
  juegoSeleccionado = nombre;
  textoJuego.textContent = nombre;
}

/* ABRIR MODAL */
function abrirModal() {
  if (juegoSeleccionado === "") {
    alert("Selecciona un juego primero");
    return;
  }
  modal.classList.remove("oculto");
}

/* CERRAR MODAL */
function cerrarModal() {
  modal.classList.add("oculto");
}

/* LINKS */
function irLink(servidor) {
  const links = {
    "Kenshi": {
      mega: "https://mega.nz/tu-link",
      mediafire: "https://mediafire.com/tu-link"
    },
    "Left 4 Dead": {
      mega: "https://mega.nz/tu-link",
      mediafire: "https://mediafire.com/tu-link"
    }
  };

  if (links[juegoSeleccionado]) {
    window.open(links[juegoSeleccionado][servidor], "_blank");
  } else {
    alert("No hay link para este juego");
  }

  cerrarModal();
}
