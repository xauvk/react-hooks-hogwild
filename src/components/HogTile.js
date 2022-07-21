import HogInfo from "./HogInfo"
import { useState } from "react"

function HogTile(props) {
    const [isClicked, setisClicked] = useState(false)
      
    return (
        <div className="ui eight wide column" onClick={() => { setisClicked(!isClicked)}}>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            { isClicked ? <HogInfo weight={props.weight} greased={props.greased} specialty={props.specialty} highestmedalachieved={props.highestmedalachieved}/> : "" }
        </div>
    )
}

export default HogTile