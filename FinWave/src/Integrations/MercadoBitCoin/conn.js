// API key e URL para Mercado Bitcoin (exemplo usando a API de ticker para preços de criptomoedas)
const btcUrl = 'https://www.mercadobitcoin.net/api/BTC/ticker/';
const ethUrl = 'https://www.mercadobitcoin.net/api/ETH/ticker/';

// Função para buscar e atualizar os preços
async function fetchCryptoPrices() {
    try {
        // Fetch Bitcoin data
        const btcResponse = await fetch(btcUrl);
        const btcData = await btcResponse.json();
        const btcPrice = parseFloat(btcData.ticker.last).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        // Atualizar o preço do Bitcoin no HTML
        document.getElementById('btc-price').textContent = btcPrice;

        // Fetch Ethereum data
        const ethResponse = await fetch(ethUrl);
        const ethData = await ethResponse.json();
        const ethPrice = parseFloat(ethData.ticker.last).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        // Atualizar o preço do Ethereum no HTML
        document.getElementById('eth-price').textContent = ethPrice;
        
    } catch (error) {
        console.error('Erro ao buscar preços das criptomoedas:', error);
    }
}

// Chama a função ao carregar a página
fetchCryptoPrices();
