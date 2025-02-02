// Sua chave de API do Alpha Vantage
const apiKey = 'KVEXH8AT7H03ZC3O';

// URL da API para obter notícias financeiras
const apiUrl = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${apiKey}`;

// Função para formatar a data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString(); // Retorna a data formatada
}

// Função assíncrona para obter e exibir notícias financeiras
async function fetchFinancialNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data); // Para depuração, verifique a estrutura dos dados

        if (data && data.feed && data.feed.length > 0) {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; // Limpa o conteúdo

            // Limita a exibição a 8 notícias
            data.feed.slice(0, 8).forEach((news, index) => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                // Adiciona o conteúdo HTML de cada notícia
                newsItem.innerHTML = `
                    <h4><a href="${news.url}" target="_blank">${news.title}</a></h4>
                    <p>${news.summary}</p>
                    <small>Noticia semanal</small>
                `;

                newsContainer.appendChild(newsItem);
            });
        } else {
            newsContainer.innerHTML = 'Não há notícias disponíveis no momento.';
        }
    } catch (error) {
        console.error('Erro ao buscar notícias financeiras:', error);
        newsContainer.innerHTML = 'Erro ao carregar as notícias.';
    }
}

// Chama a função para obter as notícias ao carregar a página
fetchFinancialNews();

