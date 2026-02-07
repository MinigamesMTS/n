const lista = document.getElementById("lista");
const titulo = document.getElementById("titulo");

function seleccionar(nombre) {
  document.getElementById("juego").textContent = nombre;
}

function mostrarJuegos() {
  titulo.textContent = "☰ Juegos optimizados";
  lista.innerHTML = `
    <li onclick="seleccionar('Kenshi')">Kenshi <span class="tag">64 BITS</span></li>
    <li onclick="seleccionar('Left 4 Dead')">Left 4 Dead <span class="tag">LAN</span></li>
    <li onclick="seleccionar('Left 4 Dead 2')">Left 4 Dead 2 <span class="tag">LAN</span></li>
    <li onclick="seleccionar('Lethal Company')">Lethal Company</li>
    <li onclick="seleccionar('Little Nightmares')">Little Nightmares</li>
  `;
}

function mostrarProgramas() {
  titulo.textContent = "☰ Programas";
  lista.innerHTML = `
    <li onclick="seleccionar('WinRAR')">WinRAR</li>
    <li onclick="seleccionar('7-Zip')">7-Zip</li>
    <li onclick="seleccionar('OBS Studio')">OBS Studio</li>
    <li onclick="seleccionar('VLC Media Player')">VLC Media Player</li>
  `;
}
