import { useState } from 'react';
import './CustomInput.css';

const CustomInput = props => {

    const [inputFocus, setInputFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    const [value, setValue] = useState('');

    const _onFocus = (e) => {
        setInputFocus(true);
    }

    const _onBlur = (e) => {
        //console.log(e);
        setInputFocus(false);

        if (value !== null && value !== '') {
            setIsEmpty(false);
        }else setIsEmpty(true);
    }

    const _onChange = (e) => {
        // console.log(e.target);
        // console.log(e.target.value);

        //setInputFocus(false);
        setValue(e.target.value);
    }

    return (
        <div className='formcontrol-input'>
            <label
                className={inputFocus ? 'active' : (isEmpty ? '': 'valid')}
            >
            {props.label}
            </label>
            <div className='input-item'>
                <input 
                    className={inputFocus ? 'active' : (isEmpty ? '': 'valid')}
                    type={props.type} 
                    onFocus={_onFocus}
                    onBlur={_onBlur}
                    onChange={_onChange}
                    value={value}
                />
                <fieldset className={inputFocus ? 'active' : (isEmpty ? '': 'valid')}>
                    <legend>
                        <span>{props.label}</span>
                    </legend>
                </fieldset>
            </div>
        </div>
    )
}

export default CustomInput;