import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = props => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Green");

    const _getColor = (color) => {
        setColor(color);
    }

    return (
        <div>
            <h2 style={{color: color}}>This is parent component</h2>
            <ChildComponent 
                count={count}
                getColor={_getColor}
            />
        </div>
    )
}

export default ParentComponent;