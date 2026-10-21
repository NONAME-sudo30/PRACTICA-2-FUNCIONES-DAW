// notas.js: funciones que trabajan con la lista de alumnos
// Cada alumno es un objeto: { nombre: "Ana", nota: 7.5 }

const ALUMNOS_INICIALES = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9.25 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Lucía", nota: 10 },
  { nombre: "Diego", nota: 3.5 },
  { nombre: "Elena", nota: 6.75 },
  { nombre: "Hugo", nota: 9 },
  { nombre: "Sara", nota: 1 },
  { nombre: "Iván", nota: 5.5 }
];

// Añade un alumno al final. Devuelve la nueva cantidad de alumnos.
// CAMBIA la lista.
function anadirAlumno(lista, nombre, nota) {
  lista.push({ nombre: nombre, nota: nota });
  return lista.length;
}

// Quita el último alumno y lo devuelve.
// CAMBIA la lista.
function quitarUltimo(lista) {
  return lista.pop();
}

// Devuelve el alumno con ese nombre, o undefined si no existe.
// NO cambia la lista.
function buscarPorNombre(lista, nombre) {
  return lista.find(alumno => alumno.nombre === nombre);
}

// Mete un alumno en esa posición sin borrar a nadie. No devuelve nada.
// CAMBIA la lista.
function insertarEn(lista, posicion, nombre, nota) {
  lista.splice(posicion, 0, { nombre: nombre, nota: nota });
}

// Quita al alumno con ese nombre. Devuelve true si lo quitó, false si no estaba.
// CAMBIA la lista.
function borrarPorNombre(lista, nombre) {
  const indice = lista.findIndex(alumno => alumno.nombre === nombre);
  if (indice === -1) {
    return false;
  }
  lista.splice(indice, 1);
  return true;
}

// Devuelve una copia ordenada de la nota más alta a la más baja.
// NO cambia la lista (ordena la copia, no la original).
function ordenarPorNota(lista) {
  return [...lista].sort((a, b) => b.nota - a.nota);
}

// Devuelve una copia ordenada de la A a la Z.
// NO cambia la lista (ordena la copia, no la original).
function ordenarPorNombre(lista) {
  return [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
}

// ---------- Fase 3: estadísticas de la clase ----------
// Ninguna de estas funciones cambia la lista: calculan algo y lo devuelven.

// Devuelve la nota media sin redondear. Si no hay alumnos, devuelve 0.
// NO cambia la lista.
function notaMedia(lista) {
  if (lista.length === 0) {
    return 0;
  }
  const suma = lista.reduce((total, alumno) => total + alumno.nota, 0);
  return suma / lista.length;
}

// Devuelve la nota más alta. Si no hay alumnos, devuelve null.
// NO cambia la lista.
function notaMaxima(lista) {
  if (lista.length === 0) {
    return null;
  }
  return Math.max(...lista.map(alumno => alumno.nota));
}

// Devuelve los alumnos con 5 o más (array nuevo).
// NO cambia la lista.
function aprobados(lista) {
  return lista.filter(alumno => alumno.nota >= 5);
}

// Devuelve solo los nombres de los aprobados. Usa aprobados.
// NO cambia la lista.
function nombresAprobados(lista) {
  return aprobados(lista).map(alumno => alumno.nombre);
}

// Devuelve true si algún alumno tiene un 10.
// NO cambia la lista.
function hayAlgunDiez(lista) {
  return lista.some(alumno => alumno.nota === 10);
}

// Devuelve true si todos los alumnos tienen 5 o más.
// NO cambia la lista.
function todosAprobados(lista) {
  return lista.every(alumno => alumno.nota >= 5);
}

// Devuelve los n mejores alumnos, de la nota más alta a la más baja.
// NO cambia la lista (ordenarPorNota ya trabaja con una copia).
function ranking(lista, n) {
  return ordenarPorNota(lista).slice(0, n);
}
