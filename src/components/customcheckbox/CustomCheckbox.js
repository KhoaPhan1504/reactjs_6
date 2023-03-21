import { Component } from 'react';
import { MdCheckBox } from 'react-icons/md';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

import './CustomCheckbox.css';

class CustomCheckbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    _onClick = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        // const lable = this.props.label;
        // const size = this.props.size;

        const { label, size } = this.props;
        
        return (
            <div className='checkbox' onClick={this._onClick}>
                <div>
                    {
                        this.state.checked ? 
                        <MdCheckBox 
                            size={size ? size : this.props.sizeDefault}
                            color="rgb(25, 118, 210)"
                        /> :
                        <MdCheckBoxOutlineBlank size={size ? size : this.props.sizeDefault}/>
                    }
                </div>
                <span>{label}</span>
            </div>
        )
    }
}

CustomCheckbox.defaultProps = {
    sizeDefault: "24px"
}

export default CustomCheckbox;