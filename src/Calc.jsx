import Menu from "./components/Menu"
import style from './Calc.module.css'


export const Calc = () => {
    return(
        <>
            <Menu/>
            <div className={style.sectionCalc}>
                <h1>Calculos</h1>
            </div>
        </>
    )
}