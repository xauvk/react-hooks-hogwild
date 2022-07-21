function RenderPigInfo (props) {
   
    return (
        <p>
            <p>{props.weight} lbs</p>
            <p>{props.greased ? "greased" : "not greased"}</p>
            <p>Specialty: {props.specialty}</p>
            <p>{props.highestmedalachieved}</p>
        </p>    
    )
}
export default RenderPigInfo;