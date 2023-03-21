const TemperatureInput = props => {
    const _onChange = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value);
        props.inputChange(e);
    }
    return (
        <fieldset>
            <legend>Enter temperature in {props.temperatureType}</legend>
            <input 
                name={props.name}
                value={props.temp}
                onChange={_onChange}
            />
        </fieldset>
    )
}

export default TemperatureInput;