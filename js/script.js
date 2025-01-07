let menuButton = document.querySelector("#menu-button")
let listMenu = document.querySelector("#list-menu")
const navbar = document.querySelector('.header');

menuButton.addEventListener('click', () => {
  if (menuButton.className == 'closed') {
    menuButton.className = 'opened'
    listMenu.style.display = 'flex'
  }else if (menuButton.className == 'opened') {
    menuButton.className = 'closed'
    listMenu.style.display = 'none'
  }
})

// Função para verificar se uma seção está visível na tela
function isSectionInView(section) {
  const rect = section.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight;
}

// Função para adicionar a classe 'visible' quando a seção estiver visível
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('.transition_effect'); // Seleciona todas as seções

  sections.forEach(section => {
    if (isSectionInView(section)) {
      section.classList.add('visible'); // Adiciona a classe 'visible' quando a seção estiver visível
    }
  });
}

// Chama a função quando o evento de scroll ocorre
window.addEventListener('scroll', revealSectionsOnScroll);

// Chama a função ao carregar a página para verificar se alguma seção já está visível
document.addEventListener('DOMContentLoaded', revealSectionsOnScroll);

// Adicionar evento de scroll
window.addEventListener('scroll', () => {
if (window.scrollY > 80) { // Checa se a rolagem passou de 50px
  navbar.classList.add('scrolled');
} else {
  navbar.classList.remove('scrolled');
}
});
