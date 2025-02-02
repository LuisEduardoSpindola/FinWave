document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar .link');
    const sections = document.querySelectorAll('.section');

    // Função para adicionar/remover a classe 'active' ao link correspondente
    function highlightMenu() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Verifica se a seção está na tela
            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        // Adiciona/remover a classe 'active' nos links
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Evento de rolagem
    window.addEventListener('scroll', highlightMenu);

    // Inicializa com o menu correto ativo
    highlightMenu();
});
