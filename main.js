const secciones = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animar-entrada');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

secciones.forEach(seccion => {
  observer.observe(seccion);
});