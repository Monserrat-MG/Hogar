document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("ver-mensaje");
  const mensaje = document.getElementById("mensaje-final");
  const nota = document.getElementById("nota-mensaje");

  if (boton && mensaje && nota) {
    boton.addEventListener("click", () => {
      mensaje.classList.remove("mensaje-revelado");
      void mensaje.offsetWidth;
      mensaje.classList.add("mensaje-revelado");
      nota.textContent = "Y aunque ya te haya mandado 50, siempre encuentro algo más que contarte. ♡";
      boton.textContent = "Último mensaje recibido ✓";
    });
  }

  const observables = document.querySelectorAll(".bloque, .abrazo, .intento, .futuro, .carta");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aparecer");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    observables.forEach(section => {
      section.classList.add("pendiente");
      observer.observe(section);
    });
  }
});
