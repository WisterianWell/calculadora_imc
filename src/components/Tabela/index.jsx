import styles from './Tabela.module.css'

const Tabela = () => {
    const tableData = [
        {imcTxt: 'Menor que 16,9', classification: 'Muito abaixo do peso'},
        {imcTxt: '17 a 18,4', classification: 'Abaixo do peso'},
        {imcTxt: '18,5 a 24,9', classification: 'Peso normal'},
        {imcTxt: '25 a 29,9', classification: 'Acima do peso'},
        {imcTxt: '30 a 34,9', classification: 'Obesidade grau I'},
        {imcTxt: '35 a 40', classification: 'Obesidade grau II'},
        {imcTxt: 'Maior que 40', classification: 'Obesidade grau III'},
    ]

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row) => (
                    <tr key={row.classification}>
                        <td>{row.imcTxt}</td>
                        <td>{row.classification}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;