function HogInfo (props) {
    return (
        <div>
            <p>{props.weight} lbs</p>
            <p>{props.greased ? "greased" : "not greased"}</p>
            <p>Specialty: {props.specialty}</p>
        </div>
    )
}

export default HogInfo