const ano = new Date().getFullYear();
document.getElementById("ano").textContent = ano;

const elementos = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));