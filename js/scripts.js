function puedeReservar(cantidadTazas){
  if (cantidadTazas > 0) {
    return cantidadTazas;
  }
}

const botonReservas = document.querySelector('.btn-reservas');
const contadorTazas = document.querySelector('.contador-tazas');

botonReservas.addEventListener('click', () => {
  const tazasActuales = Number(contadorTazas.textContent);
  console.log(tazasActuales);

  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
  } else {
    botonReservas.textContent = 'No hay tazas disponibles';
    botonReservas.disabled = true;
  }
});