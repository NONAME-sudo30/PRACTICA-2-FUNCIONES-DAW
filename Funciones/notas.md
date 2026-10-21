# Práctica 2 · Arrays — Fase 1: Explora los arrays

**Alumno:** ____________________
**Asignatura:** Desarrollo Web en Entorno Cliente · 2º DAW

## Bloque A · Posiciones

Empiezo con: `const a = ["x", "y", "z"]`

Para cada línea escribí primero qué creía que saldría, luego la ejecuté y apunté lo que salió de verdad.

| Nº | Línea | Mi predicción | Lo que salió |
|----|-------|---------------|--------------|
| 1 | `a[0]` | `"x"` | `"x"` |
| 2 | `a[3]` | Un error, porque esa posición no existe | `undefined` (no da error) |
| 3 | `a.length` | `3` | `3` |
| 4 | `[1, "dos", true].length` | `3` | `3` |

### Explicación de cada línea

1. **`a[0]`** → `"x"`. Los índices empiezan en 0, así que la posición 0 es el primer elemento.
2. **`a[3]`** → `undefined`. Esperaba un error, pero no lo hay. El array tiene 3 elementos (posiciones 0, 1 y 2), así que la 3 no existe y JavaScript devuelve `undefined` en vez de fallar.
3. **`a.length`** → `3`. `length` cuenta cuántos elementos hay, no es la última posición (la última es `length - 1`).
4. **`[1, "dos", true].length`** → `3`. Un array puede mezclar tipos (número, texto y booleano) y `length` cuenta los elementos igual.

**Sorpresa:** `a[3]` no da error, da `undefined`.

## Bloque B · const y copias

| Nº | Línea | Mi predicción | Lo que salió |
|----|-------|---------------|--------------|
| 5 | `const c = [1]; c.push(2); c` | Un error, porque `c` es `const` y no se puede cambiar | `[1, 2]` (no da error) |
| 6 | `let p = [1, 2, 3]; let q = p; q.push(4)` y mira `p` | `p` sigue en `[1, 2, 3]` | `p` es `[1, 2, 3, 4]` |
| 7 | `let r = [...p]; r.push(5)` y mira `p` | `p` pasa a `[1, 2, 3, 4, 5]` | `p` sigue en `[1, 2, 3, 4]`; `r` es `[1, 2, 3, 4, 5]` |

### Explicación

5. **`const c = [1]; c.push(2); c`** → `[1, 2]`. Esperaba un error porque `c` es `const`, pero `const` solo impide **reasignar** la variable (`c = otraCosa`). El contenido del array sí se puede cambiar, así que `push(2)` funciona.

6. **`q.push(4)` y mira `p`** → `p` es `[1, 2, 3, 4]`. Pensaba que `q` era una copia de `p`, pero `let q = p` no copia el array: `q` y `p` apuntan **al mismo array**. Si cambio uno, el otro también cambia. Eso es **referenciar**.
7. **`let r = [...p]; r.push(5)` y mira `p`** → `p` no cambia. El operador spread `[...p]` crea un array **nuevo** con los mismos valores, así que `r` es independiente de `p`. Eso es **copiar**.

**Sorpresas:** `const` no hace que el array sea inmutable, y `let q = p` no crea una copia.

## Bloque C · Ordenar

| Nº | Línea | Mi predicción | Lo que salió |
|----|-------|---------------|--------------|
| 8 | `[10, 9, 1].sort()` | `[1, 9, 10]` | `[1, 10, 9]` |
| 9 | `[10, 9, 1].sort((x, y) => x - y)` | `[1, 9, 10]` | `[1, 9, 10]` |

### Explicación

8. **`sort()` sin función** → `[1, 10, 9]`. Esperaba los números ordenados, pero `sort()` por defecto convierte los elementos a **texto** y los ordena alfabéticamente. Como texto, `"1"` va antes que `"10"` y `"10"` antes que `"9"`.
9. **`sort((x, y) => x - y)`** → `[1, 9, 10]`. Con una función de comparación, `sort` compara los **números** y ordena bien de menor a mayor.

**Sorpresa:** `sort()` sin función no ordena bien los números.

## Bloque D · ¿Cambia el array original?

Antes de cada línea vuelvo a escribir `const n = [3, 1, 2]`. Miro qué devuelve y si `n` cambia.

| Nº | Línea | Qué devuelve | ¿`n` ha cambiado? |
|----|-------|--------------|-------------------|
| 10 | `n.push(4)` | `4` (la nueva longitud) | Sí, `[3, 1, 2, 4]` |
| 11 | `n.pop()` | `2` (el elemento quitado) | Sí, `[3, 1]` |
| 12 | `n.slice(0, 2)` | `[3, 1]` | No, sigue `[3, 1, 2]` |
| 13 | `n.map(x => x * 2)` | `[6, 2, 4]` | No, sigue `[3, 1, 2]` |

### Explicación

10. **`n.push(4)`** → devuelve `4`. Pensaba que devolvería el array, pero devuelve la nueva longitud. Además **cambia** `n`.
11. **`n.pop()`** → devuelve `2`, el elemento que quita del final. **Cambia** `n`.
12. **`n.slice(0, 2)`** → devuelve `[3, 1]`, un array nuevo con las posiciones 0 y 1. **No cambia** `n`.
13. **`n.map(x => x * 2)`** → devuelve `[6, 2, 4]`, un array nuevo con cada valor multiplicado por 2. **No cambia** `n`.

**Sorpresa:** `push` devuelve un número, no el array.

---

# Fase 2: Añadir, quitar, buscar y ordenar

En `notas.js` creé la constante `ALUMNOS_INICIALES` con los 10 alumnos y escribí las 7 funciones. Probé cada una en la consola con el ejemplo de su ficha.

## Pruebas de cada función

| Función | Prueba | Mi predicción | Lo que salió |
|---------|--------|---------------|--------------|
| `anadirAlumno` | `anadirAlumno(lista, "Eva", 8)` | `3` | `3` |
| `quitarUltimo` | `quitarUltimo(lista)` | `{ nombre: "Eva", nota: 8 }` | `{ nombre: "Eva", nota: 8 }` |
| `buscarPorNombre` | `buscarPorNombre(lista, "Ana")` | `{ nombre: "Ana", nota: 7.5 }` | `{ nombre: "Ana", nota: 7.5 }` |
| `buscarPorNombre` | `buscarPorNombre(lista, "Pepe")` | `undefined` | `undefined` |
| `insertarEn` | `insertarEn(lista, 1, "Eva", 8)` | lista: Ana, Eva, Luis | lista: Ana, Eva, Luis |
| `borrarPorNombre` | `borrarPorNombre(lista, "Luis")` | `true` | `true` |
| `borrarPorNombre` | `borrarPorNombre(lista, "Pepe")` | `false` | `false` |
| `ordenarPorNota` | con Luis 4, Ana 7.5 y Lucía 10 | Lucía, Ana, Luis | Lucía, Ana, Luis |
| `ordenarPorNombre` | con Luis, Ana y Lucía | Ana, Lucía, Luis | Ana, Lucía, Luis |

## Para comprobar

**1. Ordenar los 10 alumnos con `ordenarPorNota`:**

| Puesto | Alumno | Nota |
|--------|--------|------|
| 1 | Lucía | 10 |
| 2 | Marta | 9,25 |
| 3 | Hugo | 9 |
| 4 | Ana | 7,5 |
| 5 | Elena | 6,75 |
| 6 | Iván | 5,5 |
| 7 | Pablo | 5 |
| 8 | Luis | 4 |
| 9 | Diego | 3,5 |
| 10 | Sara | 1 |

**Ojo:** el enunciado dice que Lucía (10) debe salir primera y Hugo (9) segunda, pero con las notas de la lista Marta tiene un 9,25, que es más que el 9 de Hugo. Por eso Hugo sale tercero y no segundo. Mi función está bien: ordena de mayor a menor y Marta va antes que Hugo. Creo que el enunciado se equivoca en ese detalle.

**2. ¿Cambia o no cambia la lista?**

| Función | ¿Cambia la lista que recibe? |
|---------|------------------------------|
| `anadirAlumno` | Cambia (usa `push`) |
| `quitarUltimo` | Cambia (usa `pop`) |
| `buscarPorNombre` | No cambia (usa `find`) |
| `insertarEn` | Cambia (usa `splice`) |
| `borrarPorNombre` | Cambia (usa `splice`) |
| `ordenarPorNota` | No cambia (ordena una copia) |
| `ordenarPorNombre` | No cambia (ordena una copia) |

## Preguntas

**1. ¿Qué funciones de esta fase cambian la lista y cuáles no? ¿Cómo lo sé?**
Cambian la lista `anadirAlumno`, `quitarUltimo`, `insertarEn` y `borrarPorNombre`. No la cambian `buscarPorNombre`, `ordenarPorNota` y `ordenarPorNombre`. Lo sé por los métodos que usa cada una: `push`, `pop` y `splice` modifican el array original (lo vi en la Fase 1, bloque D). `find` solo lee, y en las de ordenar trabajo con una copia. También lo comprobé en la consola mirando la lista después de llamar a cada función.

**2. ¿Por qué `ordenarPorNota` hace una copia antes de ordenar?**
Porque `sort` cambia el array sobre el que se usa. Si ordenara la lista original, la dejaría ordenada para siempre y se perdería el orden en que estaban los alumnos. Con `[...lista]` hago una copia nueva (como vi con `r = [...p]` en la Fase 1), la ordeno y la original se queda como estaba. Si hiciera `const copia = lista` no serviría, porque eso no copia, solo referencia el mismo array.

**3. ¿Qué pasaría con las notas 10, 9 y 1 si no usara una función de comparación?**
`sort()` sin función las convierte a texto y las ordena alfabéticamente, así que saldría `[1, 10, 9]` en vez de `[10, 9, 1]` (lo comprobé: `[10, 9, 1].sort()` da `[1, 10, 9]`). Por eso uso `(a, b) => b.nota - a.nota`, que compara los números de verdad.

```bash
git add .
git commit -m "Fase 2: añadir, quitar, buscar y ordenar"
```

---

# Fase 3: Estadísticas de la clase

En `notas.js` escribí las 7 funciones de esta fase. Ninguna cambia la lista: todas calculan algo y lo devuelven. Cada una usa un método distinto de array.

Lista de prueba: Ana 7,5 · Luis 4 · Marta 9,25 · Pablo 5

## Pruebas de cada función

| Función | Método principal | Mi predicción | Lo que salió |
|---------|------------------|---------------|--------------|
| `notaMedia(lista)` | `reduce` | `6.4375` | `6.4375` |
| `notaMaxima(lista)` | `map` + `Math.max` | `9.25` | `9.25` |
| `aprobados(lista)` | `filter` | Ana, Marta y Pablo | Ana, Marta y Pablo |
| `nombresAprobados(lista)` | `map` (sobre `aprobados`) | `["Ana", "Marta", "Pablo"]` | `["Ana", "Marta", "Pablo"]` |
| `hayAlgunDiez(lista)` | `some` | `false` | `false` |
| `todosAprobados(lista)` | `every` | `false` | `false` |
| `ranking(lista, 2)` | `ordenarPorNota` + `slice` | Marta (9.25) y Ana (7.5) | Marta (9.25) y Ana (7.5) |

Comprobé también que la lista no cambia: la guardé como texto antes de llamar a las funciones y después seguía igual.

## Experimento 1: todas las funciones con una lista vacía

| Función | Mi predicción | Lo que salió |
|---------|---------------|--------------|
| `notaMedia([])` | `0` | `0` |
| `notaMaxima([])` | `null` | `null` |
| `aprobados([])` | `[]` | `[]` |
| `nombresAprobados([])` | `[]` | `[]` |
| `hayAlgunDiez([])` | `false` | `false` |
| `todosAprobados([])` | `false` | **`true`** |
| `ranking([], 2)` | `[]` | `[]` |

**Sorpresa:** `todosAprobados([])` devuelve `true`. Esperaba `false` porque no hay nadie aprobado.

## Experimento 2: quitar el valor inicial del `reduce`

Para ver el error tuve que quitar también el `if (lista.length === 0)` del principio, porque si no la función devuelve `0` antes de llegar al `reduce` y nunca falla.

- Sin valor inicial y sin el `if`: `[].reduce((t, a) => t + a.nota)` da **`TypeError: Reduce of empty array with no initial value`**.
- Con valor inicial pero sin el `if`: la suma da `0` y luego hace `0 / 0`, que da **`NaN`**. Por eso dejé el `if`, para devolver `0` como pide el enunciado.

Después volví a dejarlo todo como estaba (con el valor inicial `0` y con el `if`).

## Preguntas

**1. ¿Por qué `reduce` necesita un valor inicial cuando la lista está vacía?**
Porque sin valor inicial `reduce` coge el primer elemento del array como punto de partida. Si el array está vacío no hay primer elemento y no puede empezar, así que lanza un `TypeError`. Con un valor inicial (`0`) siempre tiene por dónde empezar y con una lista vacía devuelve ese valor.

**2. ¿Qué devuelve `todosAprobados` con una lista vacía? ¿Te parece lógico?**
Devuelve `true`. Al principio me pareció raro, pero tiene lógica: `every` comprueba que *ningún* elemento incumpla la condición. Como en una lista vacía no hay ningún alumno suspenso, no hay nadie que la incumpla y el resultado es `true`. Es como decir "todos los alumnos de esta clase vacía están aprobados": no hay ningún contraejemplo. Aun así, en una aplicación real puede confundir, y si quisiera que diera `false` tendría que comprobar antes que la lista no esté vacía.

**3. ¿Qué diferencia hay entre `map` y `filter`? Pon un ejemplo de tu código.**
- `filter` **elige** elementos: devuelve un array nuevo con solo los que cumplen la condición. Puede tener menos elementos que el original.
- `map` **transforma** elementos: devuelve un array nuevo con el mismo número de elementos, cada uno convertido en otra cosa.

Ejemplo de mi código, en `nombresAprobados`:

```js
aprobados(lista).map(alumno => alumno.nombre);
```

`aprobados` usa `filter` para quedarse solo con los alumnos con 5 o más (Ana, Marta y Pablo, sin Luis). Después `map` convierte cada alumno en solo su nombre. Ninguno de los dos cambia la lista original.

```bash
git add .
git commit -m "Fase 3: estadísticas de la clase"
```

---

# Fase 4: Tabla dinámica con filtro y orden

En `notas.js` escribí `filtrarAlumnos`, `ordenarAlumnos` y `esNotaValida`. Después hice la página: `index.html` tiene la estructura, `estilos.css` el aspecto y `app.js` la lógica.

## Las tres funciones

| Función | Qué hace | Cambia la lista |
|---------|----------|-----------------|
| `filtrarAlumnos(lista, filtro)` | Devuelve una copia con los alumnos de "todos", "aprobados" (5 o más) o "suspensos" (menos de 5) | No |
| `ordenarAlumnos(lista, criterio)` | Devuelve una copia ordenada por "nombre", "nota-desc" o "nota-asc". Usa `ordenarPorNombre` y `ordenarPorNota` de la Fase 2 | No |
| `esNotaValida(texto)` | `true` si el texto es un número de 0 a 10; `false` si está vacío o no es un número | No (solo lee) |

Pruebas con `esNotaValida`:

| Llamada | Mi predicción | Lo que salió |
|---------|---------------|--------------|
| `esNotaValida("7.5")` | `true` | `true` |
| `esNotaValida("")` | `false` | `false` |
| `esNotaValida("11")` | `false` | `false` |
| `esNotaValida("   ")` | `false` | `false` |
| `esNotaValida("abc")` | `false` | `false` |
| `esNotaValida("0")` y `("10")` | `true` | `true` |

Con `"   "` (solo espacios) hay que tener cuidado: `Number("   ")` da `0`, que parecería una nota válida. Por eso primero compruebo con `trim()` que el texto no esté vacío.

## Cómo está hecha la página

**`index.html`:** tabla con las columnas Nombre, Nota y una para borrar; selector «Mostrar» (Todos, Aprobados, Suspensos); selector «Ordenar por» (Nombre, Nota más alta primero, Nota más baja primero); formulario con nombre, nota y botón Añadir; y un sitio para el resumen. Usé `<label>` en cada campo para que sea accesible.

**`pintarTabla()`:** es la única función que dibuja la tabla. Coge la lista, aplica `filtrarAlumnos` y después `ordenarAlumnos`, vacía el `tbody` y escribe las filas. Se llama al cargar la página y cada vez que cambia algo (selectores, añadir, borrar). Si no hay alumnos que mostrar, escribe una fila con el mensaje «No hay alumnos que mostrar.».

**Colores:** las notas aprobadas salen en verde con ✓ y las suspensas en rojo con ✗. Añadí el símbolo para que no dependa solo del color.

**Filtro y orden:** cada selector tiene un evento `change` que llama a `pintarTabla()`.

**Añadir:** al enviar el formulario compruebo en este orden que el nombre no esté vacío, que no haya ya un alumno con ese nombre (`buscarPorNombre`) y que la nota sea válida (`esNotaValida`). Si algo falla escribo un mensaje en la página, sin `alert`. Si todo está bien llamo a `anadirAlumno`, limpio el formulario y vuelvo a dibujar.

**Borrar:** cada fila tiene un botón ✕. En vez de un evento por botón, puse uno solo en el `tbody` que detecta el clic con `closest("button.borrar")` y llama a `borrarPorNombre`. Así sigue funcionando aunque la tabla se redibuje.

**Resumen:** número de alumnos, nota media con 2 decimales (`toFixed(2)`), nota máxima y número de aprobados, con las funciones de la Fase 3. Es de toda la clase y no solo de lo que se ve con el filtro. Si la lista queda vacía, la media sale `0.00` y la máxima `-`.

**La lista verdadera:** en `app.js` la lista guardada es `const alumnos = [...ALUMNOS_INICIALES]`. Hice una copia para no tocar la constante original. Filtrar y ordenar solo trabajan con copias.

## Pruebas de la página

| Qué probé | Qué esperaba | Lo que salió |
|-----------|--------------|--------------|
| Carga inicial | 10 alumnos por nombre y resumen | Resumen: 10 alumnos, media 6.15, máxima 10, 7 aprobados |
| Mostrar «Suspensos» | Diego, Luis y Sara | Diego, Luis y Sara |
| Aprobados + nota más alta primero | Lucía, Marta, Hugo, Ana... | Lucía 10, Marta 9.25, Hugo 9, Ana 7.5... |
| Aprobados + nota más baja primero | Pablo primero y Lucía última | Pablo 5 ... Lucía 10 |
| Añadir con nombre vacío | Mensaje de error | «El nombre no puede estar vacío.» |
| Añadir «Ana» (repetido) | Mensaje de error | «Ya hay un alumno que se llama Ana.» |
| Añadir con nota vacía, «11» o «abc» | Mensaje de error | «La nota tiene que ser un número de 0 a 10...» |
| Añadir Eva con 8 | 11 alumnos y sin mensaje | 11 alumnos, media 6.32, 8 aprobados, formulario limpio |
| Borrar a Eva | Vuelve a 10 alumnos | 10 alumnos, media 6.15 |
| Borrar a todos | Mensaje de tabla vacía | «No hay alumnos que mostrar.» y resumen con media 0.00 |
| Nombre con HTML (`<b>x</b>`) | Se ve como texto | Se ve como texto, no se interpreta |

**Una cosa que noté:** esta práctica no pide que «ana» y «Ana» cuenten como el mismo nombre, y `buscarPorNombre` compara tal cual, así que ahora mismo se pueden añadir las dos. Lo dejo así porque el enunciado dice que use `buscarPorNombre`.

**Otra:** la nota se escribe con punto (`7.5`). Si alguien escribe `7,5` sale el mensaje de error, que ya avisa de usar punto.

## Preguntas

**1. ¿Por qué `filtrarAlumnos` y `ordenarAlumnos` devuelven copias?**
Porque la lista verdadera es la que se queda guardada (`alumnos`), y filtrar y ordenar solo cambian lo que se *ve*, no los datos. Si `filtrarAlumnos` quitara alumnos de la lista original, al elegir «Suspensos» los aprobados se borrarían de verdad y no se podrían recuperar al volver a «Todos». Devolviendo copias puedo filtrar y ordenar tantas veces como quiera y la lista guardada sigue intacta.

**2. ¿Qué pasaría en la página si `ordenarAlumnos` cambiara la lista original?**
La lista guardada se quedaría reordenada cada vez que el usuario cambiara el selector. El orden en que se añadieron los alumnos se perdería, y no habría forma de volver a él. Además sería un efecto raro: algo que solo debería cambiar cómo se ve la tabla estaría modificando los datos por debajo. Con `sort` pasa porque (como vi en la Fase 1) cambia el array sobre el que se usa; por eso `ordenarPorNota` y `ordenarPorNombre` ordenan una copia hecha con `[...lista]`.

```bash
git add .
git commit -m "Fase 4: tabla dinámica con filtro y orden"
```
