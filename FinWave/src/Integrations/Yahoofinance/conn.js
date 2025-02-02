async function fetchStockData() {
    try {
        const response = await fetch('https://yfapi.net/v6/finance/quote?symbol=AAPL,MSFT,GOOG', {
            headers: { 'x-api-key': 'YOUR_API_KEY' }
        });
        const data = await response.json();
        console.log('Ações:', data);
    } catch (error) {
        console.error('Erro ao buscar dados das ações:', error);
    }
}

fetchStockData();
