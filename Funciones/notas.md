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