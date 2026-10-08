console.log("%c=== 1. VARIABLES ===", "color: #f7df1e; font-weight: bold;");
let puntos = 0;
puntos = puntos + 10;
const nombreUsuario = "Carlos";
console.log("Usuario:", nombreUsuario, "| Puntos:", puntos);

console.log("\n%c=== 2. FUNCIONES ===", "color: #f7df1e; font-weight: bold;");
function saludar(nombre) {
  return "¡Hola, " + nombre + "! Bienvenido.";
}
let mensaje = saludar("Ana");
console.log(mensaje);

console.log("\n%c=== 3. CONDICIONALES ===", "color: #f7df1e; font-weight: bold;");
let edad = 18;
if (edad >= 18) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado: eres menor de edad");
}

console.log("\n%c=== 4. ARREGLOS (ARRAYS) ===", "color: #f7df1e; font-weight: bold;");
let frutas = ["Manzana", "Banano", "Naranja"];
console.log("Primera fruta:", frutas[0]);
frutas.push("Uva");
console.log("Lista completa de frutas:", frutas);

console.log("\n%c=== 5. BUCLES (FOR) ===", "color: #f7df1e; font-weight: bold;");
let amigos = ["Juan", "María", "Pedro"];
for (let i = 0; i < amigos.length; i++) {
  console.log("Saludo a amigo:", amigos[i]);
}


  const botonesCopiar = document.querySelectorAll(".boton-copiar");

  botonesCopiar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const bloqueCodigo = boton.closest(".bloque-codigo");
      const textoCodigo = bloqueCodigo.querySelector("code").innerText;

      navigator.clipboard.writeText(textoCodigo).then(() => {
        const iconoOriginal = boton.innerHTML;
        boton.innerHTML = `✓ Copiado`;
        boton.classList.add("copiado");

        setTimeout(() => {
          boton.innerHTML = iconoOriginal;
          boton.classList.remove("copiado");
        }, 2000);
      });
    });
  });