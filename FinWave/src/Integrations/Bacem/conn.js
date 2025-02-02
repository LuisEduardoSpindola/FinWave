// Função para buscar o preço do Dólar (Banco Central ou GovPricing)
async function fetchDollarPrice() {
    try {
        const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados?formato=JSON');
        const data = await response.json();
        const lastDollar = data[data.length - 1];
        document.getElementById('dolar-price').textContent = `R$ ${lastDollar.valor}`;
    } catch (error) {
        console.error('Erro ao buscar o preço do Dólar:', error);
        document.getElementById('dolar-price').textContent = 'Erro ao buscar dados';
    }
}

// Função para buscar a Taxa SELIC (Banco Central)
async function fetchSelicRate() {
    try {
        const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=JSON');
        const data = await response.json();
        const lastSelic = data[data.length - 1];
        document.getElementById('selic-rate').textContent = `${lastSelic.valor}%`;
    } catch (error) {
        console.error('Erro ao buscar a taxa SELIC:', error);
        document.getElementById('selic-rate').textContent = 'Erro ao buscar dados';
    }
}

// Função para buscar o IPCA (Inflação)
async function fetchInflationRate() {
    try {
        const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=JSON');
        const data = await response.json();
        const lastInflation = data[data.length - 1];
        document.getElementById('inflacao-rate').textContent = `${lastInflation.valor}%`;
    } catch (error) {
        console.error('Erro ao buscar a inflação (IPCA):', error);
        document.getElementById('inflacao-rate').textContent = 'Erro ao buscar dados';
    }
}


// Função para inicializar as chamadas de dados
function initState() {
    fetchDollarPrice();
    fetchSelicRate();
    fetchInflationRate();
}

initState();
