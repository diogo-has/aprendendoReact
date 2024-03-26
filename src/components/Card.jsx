import style from './Card.module.css'

export default function Card(props) {
    return (
        <div className={style.card}>
            <h2>{props.title}</h2>
            <img
                src={props.image}
                alt={props.image}
                width={300}
                height="auto"
            />
            <p>{props.text1}</p>
            <p>{props.text2}</p>

        </div>
    )
} 