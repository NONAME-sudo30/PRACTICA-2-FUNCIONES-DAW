
// ---------- Bloque A · Posiciones ----------
{
  const a = ["x", "y", "z"];
  console.log("1. a[0]:", a[0]);
  console.log("2. a[3]:", a[3]);
  console.log("3. a.length:", a.length);
  console.log("4. [1, 'dos', true].length:", [1, "dos", true].length);
}
 
// ---------- Bloque B · const y copias ----------
{
  const c = [1];
  c.push(2);
  console.log("5. c:", c);
 
  let p = [1, 2, 3];
  let q = p;
  q.push(4);
  console.log("6. p después de q.push(4):", p);
 
  let r = [...p];
  r.push(5);
  console.log("7. p después de r.push(5):", p);
  console.log("   r:", r);
}
 
// ---------- Bloque C · Ordenar ----------
console.log("8. sort() sin función:", [10, 9, 1].sort());
console.log("9. sort((x, y) => x - y):", [10, 9, 1].sort((x, y) => x - y));
 
// ---------- Bloque D · ¿Cambia el array original? ----------
{
  const n = [3, 1, 2];
  console.log("10. n.push(4) devuelve:", n.push(4), "| n queda:", n);
}
{
  const n = [3, 1, 2];
  console.log("11. n.pop() devuelve:", n.pop(), "| n queda:", n);
}
{
  const n = [3, 1, 2];
  console.log("12. n.slice(0, 2) devuelve:", n.slice(0, 2), "| n queda:", n);
}
{
  const n = [3, 1, 2];
  console.log("13. n.map(x => x * 2) devuelve:", n.map(x => x * 2), "| n queda:", n);
}