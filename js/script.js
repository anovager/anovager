// Mostra ou oculta o botão de retorno ao topo conforme o usuário rola a página
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

// Função para rolar suavemente para o topo da página quando o botão é clicado
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

// Adiciona classe ao navbar quando a página é rolada para baixo
$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('#navbar').addClass('navbar-scrolled');
    } else {
        $('#navbar').removeClass('navbar-scrolled');
    }
});
