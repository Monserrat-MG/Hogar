document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const destino = document.querySelector(link.getAttribute("href"));
    if (destino) {
      event.preventDefault();
      destino.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
