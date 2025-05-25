/*
 * && -> false && (qualquer outra coisa) -> false (retorno) vai retornar "o primeiro valor mesmo"
 * || -> true || (qualquer outra coisa) -> true (retorno) vai retornar "o primeiro valor verdadeiro ou o último valor falso"
 * FALSY (todos são avalidados como falso)
 * false
 * 0
 * '' "" ``
 * null / undefined
 * Nan
 */

function falaOi() {
  return "Oi";
}

let vaiExecutar = true;

console.log(vaiExecutar && falaOi());

console.log(vaiExecutar && falaOi() && true);

console.log(
  0 || false || null || undefined || "" || "Mateus Pampolini" || true
);

console.log(0 || false || null || undefined || "" || NaN);
