
// =========================
// MENU MOBILE
// =========================

const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});


// Fecha o menu quando clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// ANIMAÇÃO AO ROLAR //

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// FILTRO DE PROJETOS //

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // Remove o estado ativo dos outros botões
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {

      const category = card.dataset.category;

      if (filter === "todos" || category === filter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });

});

// MODAL DE IMAGENS//

const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalClose = document.querySelector("#modalClose");

const zoomButtons = document.querySelectorAll(".zoom-button");

zoomButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const image = button.dataset.image;
    const title = button.dataset.title;

    modalImage.src = image;
    modalImage.alt = title;
    modalTitle.textContent = title;

    imageModal.classList.add("active");

  });

});


// Fecha o modal

modalClose.addEventListener("click", () => {
  imageModal.classList.remove("active");
});


// Fecha clicando fora da imagem

imageModal.addEventListener("click", (event) => {

  if (event.target === imageModal) {
    imageModal.classList.remove("active");
  }

});


// Fecha apertando ESC

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    imageModal.classList.remove("active");
  }

});