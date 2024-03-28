import Menu from "./components/Menu"
import style from './Calc.module.css'
import { useState, useEffect } from "react"


export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [soma, setSoma] = useState()
    const [sub, setSub] = useState()
    const [multi, setMulti] = useState()
    const [divis, setDivis] = useState()

    // useEffect(() => {
    //     if (numero1 !== undefined && numero2 !== undefined) {
    //         setSoma(parseFloat(numero1) + parseFloat(numero2))
    //         setSub(parseFloat(numero1) - parseFloat(numero2))
    //         setMulti(parseFloat(numero1) * parseFloat(numero2))
    //         setDivis(parseFloat(numero1) / parseFloat(numero2))
    //     }
    // }, [numero1, numero2])

    const handleSoma = () => setSoma(parseFloat(numero1) + parseFloat(numero2))
    const handleSub = () => setSub(parseFloat(numero1) - parseFloat(numero2))
    const handleMulti = () => setMulti(parseFloat(numero1) * parseFloat(numero2))
    const handleDivis = () => setDivis(parseFloat(numero1) / parseFloat(numero2))

    return (
        <>
            <Menu />
            <div className={style.sectionCalc}>
                <h1>Calculos</h1>
                <div>
                    <label htmlFor="n1"></label>
                    <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="n2"></label>
                    <input type="text" id="n2" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
                </div>
                <div>
                    <div>
                        <h1>Soma</h1>
                        {!isNaN(soma) ? soma : "Digite um número valido"}
                        <button onClick={handleSoma}>Soma</button>
                    </div>
                    <div>
                        <h1>Subtração</h1>
                        {!isNaN(sub) ? sub : "Digite um número valido"}
                        <button onClick={handleSub}>Subtração</button>
                    </div>
                    <div>
                        <h1>Multiplicação</h1>
                        {!isNaN(multi) ? multi : "Digite um número valido"}
                        <button onClick={handleMulti}>Multiplicação</button>
                    </div>
                    <div>
                        <h1>Divisão</h1>
                        {!isNaN(divis) ? divis : "Digite um número valido"}
                        <button onClick={handleDivis}>Divisão</button>
                    </div>
                </div>
            </div>
        </>
    )
}