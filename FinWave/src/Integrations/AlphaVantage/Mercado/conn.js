async function fetchMarketIndex() {
    try {
        const response = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBOV&apikey=YOUR_API_KEY');
        const data = await response.json();
        console.log('Índice IBOV:', data);
    } catch (error) {
        console.error('Erro ao buscar índice IBOV:', error);
    }
}

fetchMarketIndex();
