
const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const btnResetar = document.getElementById("resetar");

let valor = localStorage.getItem("contador") ? parseInt(localStorage.getItem("contador")) : 0;

atualizarContador();

function atualizarContador() {
    contador.textContent = valor;
    localStorage.setItem("contador", valor);

    contador.style.transform = "scale(1.2)";
    contador.style.color = valor > 0 ? "green" : valor < 0 ? "red" : "black";

    setTimeout(() => {
        contador.style.transform = "scale(1)";
    }, 150);
}

btnIncrementar.addEventListener("click", () => {
    valor++;
    atualizarContador();
});

btnDecrementar.addEventListener("click", () => {
    if (valor > 0) {
        valor--;
        atualizarContador();
    }
});

btnResetar.addEventListener("click", () => {
    valor = 0;
    atualizarContador();
});

atualizarContador();



