import { Component } from "react";

class FormControlInput extends Component {
    
    render () {
        return (
            // <div className='form-control-input'>
            //     <label>Username</label>
            //     <input  
            //         type="text"
            //         placeholder='Enter your username...'
            //     />
            // </div>
            <div className='form-control-input'>
                <label>{this.props.label}</label>
                <input  
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

export default FormControlInput;