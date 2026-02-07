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
    "Cuphead": {
      mega: "https://mega.nz/file/U7AUjZTD#BucTTwPxVtzFWzHuhaBm053HpblGdetayqDyh5RNMxk",
      mediafire: "https://www.mediafire.com/file/v2gtebbf5h9sbtq/Cuphead.rar/file"
    },
    "Plantas VS Zombies": {
      mega: "https://mega.nz/tu-link",
      mediafire: "https://mediafire.com/tu-link"
    },
    "Undertale": {
      mega: "https://mega.nz/file/JV9kwBRD#S0IKY5vll220tSXg2Br8YQOeNCkafSTPQA_K2vdB2rM",
      mediafire: "https://www.mediafire.com/file/t0knxsw5uebcvgc/Undertale.rar/file"
    },
    "South Park: The Stick of Truth": {
      mega: "https://mega.nz/file/0QsFyIiI#LwMkbnvhjGwhsq6V5dgsi1ieZ1Eig5qTDLVgiOCF8E8",
      mediafire: "https://www.mediafire.com/file/wef2b7wbag9ucyn/South_Park_-_The_Stick_of_Truth.rar/file"
    },
    "Granny": {
      mega: "https://mega.nz/file/d7xl2aRB#ClwWMM7i2Evq3LU-DOQT3XbBndPToMKymmTdP4P18NY",
      mediafire: "https://www.mediafire.com/file/3h8041wcif60dm2/Granny.rar/file"
    }
  };

  if (links[juegoSeleccionado]) {
    window.open(links[juegoSeleccionado][servidor], "_blank");
  } else {
    alert("Link no disponible para este juego");
  }

  cerrarModal();
}


