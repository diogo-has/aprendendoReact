export default function Card(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img
                src={props.image}
                alt={props.image}
                width={800}
                height="auto"
            />
            <p>{props.text1}</p>
            <p>{props.text2}</p>

        </div>
    )
} 