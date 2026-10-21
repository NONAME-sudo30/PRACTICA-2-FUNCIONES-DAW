const alumnos = [...ALUMNOS_INICIALES];

const cuerpoTabla = document.getElementById("cuerpo-tabla");
const selectorFiltro = document.getElementById("filtro");
const selectorOrden = document.getElementById("orden");
const resumen = document.getElementById("resumen");
const formulario = document.getElementById("formulario");
const campoNombre = document.getElementById("nombre");
const campoNota = document.getElementById("nota");
const mensaje = document.getElementById("mensaje");

// Única función que dibuja la tabla. Se llama cada vez que algo cambia.
function pintarTabla() {
  const filtrados = filtrarAlumnos(alumnos, selectorFiltro.value);
  const visibles = ordenarAlumnos(filtrados, selectorOrden.value);

  cuerpoTabla.innerHTML = "";

  if (visibles.length === 0) {
    const fila = document.createElement("tr");
    const celda = document.createElement("td");
    celda.colSpan = 3;
    celda.className = "vacio";
    celda.textContent = "No hay alumnos que mostrar.";
    fila.appendChild(celda);
    cuerpoTabla.appendChild(fila);
  }

  visibles.forEach(alumno => {
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = alumno.nombre;

    const celdaNota = document.createElement("td");
    celdaNota.textContent = alumno.nota;
    celdaNota.className = alumno.nota >= 5 ? "aprobado" : "suspenso";

    const celdaBorrar = document.createElement("td");
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "borrar";
    boton.textContent = "✕";
    boton.dataset.nombre = alumno.nombre;
    boton.setAttribute("aria-label", "Borrar a " + alumno.nombre);
    celdaBorrar.appendChild(boton);

    fila.append(celdaNombre, celdaNota, celdaBorrar);
    cuerpoTabla.appendChild(fila);
  });

  pintarResumen();
}

// El resumen es de toda la clase, no solo de lo que se ve con el filtro.
function pintarResumen() {
  const maxima = notaMaxima(alumnos);
  resumen.textContent =
    "Alumnos: " + alumnos.length +
    " · Nota media: " + notaMedia(alumnos).toFixed(2) +
    " · Nota máxima: " + (maxima === null ? "-" : maxima) +
    " · Aprobados: " + aprobados(alumnos).length;
}

function mostrarMensaje(texto) {
  mensaje.textContent = texto;
}

// Filtro y orden: al cambiar un selector se vuelve a dibujar.
selectorFiltro.addEventListener("change", pintarTabla);
selectorOrden.addEventListener("change", pintarTabla);

// Añadir
formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  const nombre = campoNombre.value.trim();
  const textoNota = campoNota.value;

  if (nombre === "") {
    mostrarMensaje("El nombre no puede estar vacío.");
    return;
  }
  if (buscarPorNombre(alumnos, nombre) !== undefined) {
    mostrarMensaje("Ya hay un alumno que se llama " + nombre + ".");
    return;
  }
  if (!esNotaValida(textoNota)) {
    mostrarMensaje("La nota tiene que ser un número de 0 a 10 (usa punto: 7.5).");
    return;
  }

  anadirAlumno(alumnos, nombre, Number(textoNota));
  mostrarMensaje("");
  formulario.reset();
  campoNombre.focus();
  pintarTabla();
});

// Borrar: un solo listener en el tbody para todos los botones ✕.
cuerpoTabla.addEventListener("click", evento => {
  const boton = evento.target.closest("button.borrar");
  if (boton === null) {
    return;
  }
  borrarPorNombre(alumnos, boton.dataset.nombre);
  pintarTabla();
});

pintarTabla();