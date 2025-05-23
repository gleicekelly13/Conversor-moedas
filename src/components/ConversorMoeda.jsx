function ConversorMoeda() {
    return (
        <div>
            <h1>Conversor de Moedas</h1>

            <div>
                <input type="number" placeholder="Valor" />

                <select>
                    <option value="USD">Dólar (USD)</option>
                    <option value="BRL">Real (BRL)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">Libra esterlina (GBP)</option>
                    <option value="ARS">Peso argentino (ARS)</option>
                </select>

                <select>
                    <option value="USD">Dólar (USD)</option>
                    <option value="BRL">Real (BRL)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">Libra esterlina (GBP)</option>
                    <option value="ARS">Peso argentino (ARS)</option>
                </select>

                <button>Converter</button>
            </div>

            <p>Resultado...</p>
        </div>
    )
}

export default ConversorMoeda;