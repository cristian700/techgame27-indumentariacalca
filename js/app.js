// =====================================
// TechGame27 + CALCA Indumentaria
// app.js
// =====================================

console.log("✅ TechGame27 cargado correctamente");

// ============================
// CARRITO (LOCALSTORAGE REAL)
// ============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar + actualizar UI
function actualizarCarrito() {

    localStorage.setItem("carrito", JSON.stringify(carrito));

    const contador = document.getElementById("contadorCarrito");

    if (contador) {
        contador.textContent = carrito.length;
    }
}

// Agregar producto
function agregar(nombre = "Producto", precio = 0) {

    carrito.push({
        id: Date.now(),
        nombre,
        precio,
        cantidad: 1
    });

    actualizarCarrito();

    mostrarToast("Producto agregado al carrito ✅");
}

// Vaciar carrito
function vaciarCarrito() {

    carrito = [];
    actualizarCarrito();

    mostrarToast("Carrito vaciado 🗑️");
}

// ============================
// TOAST (MENSAJES BONITOS)
// ============================

function mostrarToast(mensaje) {

    const toast = document.createElement("div");

    toast.textContent = mensaje;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#0066ff";
    toast.style.color = "#fff";
    toast.style.padding = "12px 18px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    toast.style.zIndex = "9999";
    toast.style.fontSize = "14px";
    toast.style.animation = "fadeUp .3s ease";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// ============================
// SCROLL SUAVE
// ============================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ============================
// BOTÓN VOLVER ARRIBA
// ============================

const botonArriba = document.getElementById("btnTop");

if (botonArriba) {

    window.addEventListener("scroll", () => {

        botonArriba.style.display =
            window.scrollY > 300 ? "block" : "none";

    });

    botonArriba.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ============================
// INICIO
// ============================

actualizarCarrito();