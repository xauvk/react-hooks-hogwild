import HogInfo from "./HogInfo"
import {useState} from "react"

function HogTile(props) {
    
    const [isRendering, setIsRendering] = useState(false)


    function renderPigInfo (e) {
        console.log('saf')
        
        // if (isRendering) {
        //     setIsRendering(false)
        // } else {
        //     setIsRendering(true)
        // }
        
        return (
            <div>
                <p>{props.weight} lbs</p>
                <p>{props.greased ? "greased" : "not greased"}</p>
                <p>Specialty: {props.specialty}</p>
            </div>
        )
    }
    
    return (
        <div className="map" onClick={renderPigInfo}>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <p>{renderPigInfo}</p>
        </div>
    )
}

export default HogTile