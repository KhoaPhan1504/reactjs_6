import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const ParentManageState = props => {
    const [tempCel, setTempCel] = useState('');
    const [tempFah, setTempFah] = useState('');

    const _inputChange = (e) => {
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        if (e.target.name === 'tempCel') {
            setTempCel(e.target.value);
            setTempFah(celToFah(e.target.value));
        }else {
            setTempFah(e.target.value);
            setTempCel(fahToCel(e.target.value));
        }
    }

    const fahToCel = fah => {
        return (fah - 32) * 5 / 9;
    }

    const celToFah = celTemp => {
        return celTemp * 9 / 5 + 32;
    }

    return (
        <div>
            <h3>Parent manage state component</h3>
            <TemperatureInput 
                temperatureType='Cel'
                name='tempCel'
                inputChange={_inputChange}
                temp={tempCel}
            />
            <TemperatureInput 
                temperatureType='Fah'
                name='tempFah'
                inputChange={_inputChange}
                temp={tempFah}
            />
        </div>
    )
}

export default ParentManageState;