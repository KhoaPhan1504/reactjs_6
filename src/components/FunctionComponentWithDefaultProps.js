import { useState } from "react";

const FunctionComponentWithDefaultProps = (props) => {

    //console.log('Props of the FunctionComponentWithDefaultProps: ', props);
    const [color, setColor] = useState();//Hooks State
    console.log('color: ' + color);

    const randomColor = () => {
        let pattern = '0123456789ABCDEF';
        let colorRandom = '#';
        for (let i = 0; i < 6; i ++) {
            colorRandom += pattern[Math.floor(Math.random() * 16)];
        }
        //setColor(randomColor);
        setColor(colorRandom);
    }

    console.log('Function Component With Default Props rendered...');

    return (
        <div style={{color: color}}>
            <h1>Demo default props with function component</h1>
            <p>Mon hoc: {props.subject}</p>
            <button onClick={randomColor}>Random Color</button>
        </div>
    )

}

FunctionComponentWithDefaultProps.defaultProps = {
    subject: 'ReactJS-Ro29',
    position: 'dev'
}

export default FunctionComponentWithDefaultProps;