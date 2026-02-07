/* ELEMENTOS */
const modal = document.getElementById("modal");
const buscador = document.getElementById("buscador");
const juegos = document.querySelectorAll(".juego");

const tituloJuego = document.getElementById("titulo-juego");
const descripcion = document.getElementById("descripcion");

let juegoSeleccionado = "";

/* ========================= */
/* BUSCADOR */
/* ========================= */
buscador.addEventListener("keyup", () => {
  const texto = buscador.value.toLowerCase();

  juegos.forEach(juego => {
    const nombre = juego.textContent.toLowerCase();
    juego.style.display = nombre.includes(texto) ? "block" : "none";
  });
});

/* ========================= */
/* SELECCIONAR JUEGO */
/* ========================= */
function seleccionarJuego(nombre) {
  juegoSeleccionado = nombre;
  tituloJuego.textContent = nombre;
  descripcion.textContent = "Juego listo para descargar.";
}

/* ========================= */
/* FILTRAR CATEGORÍAS */
/* ========================= */
function filtrar(categoria) {
  juegos.forEach(juego => {
    const categorias = juego.dataset.categoria;

    if (categoria === "todos" || categorias.includes(categoria)) {
      juego.style.display = "block";
    } else {
      juego.style.display = "none";
    }
  });
}

/* ========================= */
/* MODAL */
/* ========================= */
function abrirModal() {
  if (!juegoSeleccionado) {
    alert("Selecciona un juego primero");
    return;
  }
  modal.classList.remove("oculto");
}

function cerrarModal() {
  modal.classList.add("oculto");
}

/* ========================= */
/* LINKS DE DESCARGA */
/* ========================= */
function irLink(servidor) {
  const links = {
    "Kenshi": {
      mega: "https://mega.nz/tu-link",
      mediafire: "https://mediafire.com/tu-link"
    },
    "Left 4 Dead": {
      mega: "https://mega.nz/tu-link",
      mediafire: "https://mediafire.com/tu-link"
    },
    "Undertale": {
      mega: "https://mega.nz/tu-link",
      mediafire: "https://mediafire.com/tu-link"
    },
    "Little Nightmares": {
      mega: "https://mega.nz/tu-link",
      mediafire: "https://mediafire.com/tu-link"
    },
    "Granny": {
      mega: "https://mega.nz/tu-link",
      mediafire: "https://mediafire.com/tu-link"
    }
  };

  if (links[juegoSeleccionado]) {
    window.open(links[juegoSeleccionado][servidor], "_blank");
  } else {
    alert("Link no disponible para este juego");
  }

  cerrarModal();
}

