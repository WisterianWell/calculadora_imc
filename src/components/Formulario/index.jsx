import { useState } from "react";
import styles from './Formulario.module.css'

const Formulario = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setImc] = useState(null);

    const calcIMC = (weight, height) => {
        const heightSquared = Math.pow(height/100, 2);
        return (weight / heightSquared).toFixed(1);
    }

    const handleCalc = () => {
        if (weight && height) {
            const calculatedImc = calcIMC(parseInt(weight), parseFloat(height));
            setImc(calculatedImc);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form__container}>
                <div className={styles.form__group}>
                    <label htmlFor="height">Altura(cm):</label>
                    <input 
                    type="number" 
                    id="height" 
                    onChange={event => setHeight(parseInt(event.target.value))}/>
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="weight">Peso(Kg):</label>
                    <input 
                    type="number" 
                    id="weight" 
                    onChange={event => setWeight(parseInt(event.target.value))}/>
                </div>
            </div>
            <button onClick={handleCalc} className={styles.form__button}>Calcular</button>
            {imc && (
                <div className={styles.form__result}>
                    <p>Seu IMC é: <b>{imc}</b></p>
                    <p>
                        Sua Classificação é: 
                        <b>{imc < 16.9 && ' Muito abaixo do peso'}</b>
                        <b>{imc >= 17 && imc < 18.4 && ' Abaixo do peso'}</b>
                        <b>{imc >= 18.5 && imc < 24.9 && ' Peso normal'}</b>
                        <b>{imc >= 25 && imc < 29.9 && ' Acima do peso'}</b>
                        <b>{imc >= 30 && imc < 34.9 && ' Obesidade grau I'}</b>
                        <b>{imc >= 35 && imc < 40 && ' Obesidade grau II'}</b>
                        <b>{imc >= 40 && ' Obesidade grau III'}</b>
                    </p>
                </div>
                )}
        </form>
    )
}

export default Formulario;