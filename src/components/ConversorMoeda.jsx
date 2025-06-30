import { useState } from "react";

function ConversorMoeda() {
    const [valor, setValor] = useState('');
    const [moedaOrigem, setMoedaOrigem] = useState('USD');
    const [moedaDestino, setMoedaDestino] = useState ('BRL');
    const [resultado, setResultado] = useState(null);
    const [temaEscuro, setTemaEscuro] = useState(false);

    const converterMoeda = async () => {
        if (!valor || isNaN(valor)) {
            alert ('Por favor, insira um valor válido.');
            return;
        }

        {/* Condicional caso o usuário tentar converter a mesma moeda */}
        if (moedaOrigem === moedaDestino) {
            alert ('Escolha moedas diferentes para conversão.');
            return;
        }

        try {  {/* Monta a URL da API com a moeda de origem e destino */}
            const url = `https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`;
            const resposta = await fetch(url);  {/* Faz uma requisição HTTP GET para buscar os dados de câmbio */}

            {/* Verifica se a resposta foi bem-sucedida (status HTTP 200-299) */}
            if (!resposta.ok) {
                throw new Error (`Erro na requisição: ${resposta.status}`);
            }

            {/* Converte a resposta para json */}
            const dados = await resposta.json();

            const par = `${moedaOrigem}${moedaDestino}`;

            {/* Verifica se o par existe nos dados retornados */}
            if (!dados[par] || !dados[par].bid) {
                throw new Error ("Par de moedas inválido ou não disponível na API.");
            }
            
            const taxa = parseFloat(dados[par].bid);

            {/* Verifica se a taxa é um número válido */}
            if (isNaN(taxa)) {
                throw new Error ("Taxa de câmbio inválida.");
            }

            const valorConvertido = (parseFloat(valor) * taxa).toFixed(2);
            setResultado(valorConvertido);
        } catch (error) {
            alert ('Erro ao converter moeda. Tente novamente mais tarde.');{/* Mensagem amigável de erro */}
            console.error("Detalhes do erro: ", error); {/* Exibe detalhes técnicos no console para debug */}
        }
    }

    
    return (
        <div className = {temaEscuro ? 'dark' : ''}>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100  to-gray-200">
                <div className="flex flex-col items-end gap-5">

                    <button 
                        onClick={() => setTemaEscuro(!temaEscuro)}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:opacity-80 transition"
                    >
                        {temaEscuro ? 'Light' : 'Dark'}
                    </button>

                    <div className="flex flex-col gap-5 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-center text-2xl font-medium text-emerald-950">Conversor de Moedas</h1>

                        <div className="flex flex-col gap-4 mt-6">
                            <input 
                                type="number"
                                value={valor}  /* Mostra o que está no estado `valor`. */
                                onChange={(e) => setValor(e.target.value)} /* Atualiza o estado `valor` quando o usuário digita. */
                                placeholder="Digite o valor" 
                                className="p-3 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2      focus:ring-green-900 focus:border-transparent transition"
                            />

                            {/* Moeda que o usuário escolheu como origem */}
                            <select 
                                value={moedaOrigem}    
                                onChange={(e) => setMoedaOrigem(e.target.value)}
                            className="p-3 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2      focus:ring-green-900 focus:border-transparent transition"
                            >
                                <option value="USD">Dólar (USD)</option>
                                <option value="BRL">Real (BRL)</option>
                                <option value="EUR">Euro (EUR)</option>
                                <option value="GBP">Libra esterlina (GBP)</option>
                                <option value="ARS">Peso argentino (ARS)</option>
                            </select>

                            {/* Moeda de destino */}
                            <select 
                                value={moedaDestino} 
                                onChange={(e) => setMoedaDestino(e.target.value)}
                                className="p-3 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2      focus:ring-green-900 focus:border-transparent transition"
                            >
                                <option value="USD">Dólar (USD)</option>
                                <option value="BRL">Real (BRL)</option>
                                <option value="EUR">Euro (EUR)</option>
                                <option value="GBP">Libra esterlina (GBP)</option>
                                <option value="ARS">Peso argentino (ARS)</option>
                            </select>

                            <button 
                                onClick={converterMoeda}
                                className="bg-emerald-900 text-white font-semibold py-3 rounded-md hover:bg-emerald-950 transition"
                            >
                                Converter
                            </button>
                        </div>

                        {/* Mostrar o valor convertido */}
                        <p className={`text-center text-xl font-semibold mt-2 transition ${resultado ? 'text-emerald-900' :         'text-gray-500'}`}>
                            {resultado ? `Resultado: ${resultado}` : 'Resultado...'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConversorMoeda;