import { useState } from "react";

function ConversorMoeda() {
    const [valor, setValor] = useState('');
    const [moedaOrigem, setMoedaOrigem] = useState('USD');
    const [moedaDestino, setMoedaDestino] = useState ('BRL');
    const [resultado, setResultado] = useState(null);

    return (
        <div>
            <h1>Conversor de Moedas</h1>

            <div>
                <input 
                    type="number"
                    value={valor}  /* Mostra o que está no estado `valor`. */
                    onChange={(e) => setValor(e.target.value)} /* Atualiza o estado `valor` quando o usuário digita. */
                    placeholder="Valor" 
                />

                {/* Moeda que o usuário escolheu como origem */}
                <select value={moedaOrigem} onChange={(e) => setMoedaOrigem(e.target.value)}>
                    <option value="USD">Dólar (USD)</option>
                    <option value="BRL">Real (BRL)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">Libra esterlina (GBP)</option>
                    <option value="ARS">Peso argentino (ARS)</option>
                </select>

                {/* Moeda de destino */}
                <select value={moedaDestino} onChange={(e) => setMoedaDestino(e.target.value)}>
                    <option value="USD">Dólar (USD)</option>
                    <option value="BRL">Real (BRL)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">Libra esterlina (GBP)</option>
                    <option value="ARS">Peso argentino (ARS)</option>
                </select>

                <button>Converter</button>
            </div>

            {/* Mostrar o valor convertido */}
            <p>{resultado ? `Resultado: ${resultado}` : 'Resultado...'}</p>
        </div>
    )
}

export default ConversorMoeda;