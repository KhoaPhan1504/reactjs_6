import CustomCheckbox from "../customcheckbox/CustomCheckbox";
import CustomInput from "../custominput/CustomInput";
import FormGroup from "../formgroup/FormGroup";

const Form = props => {
    return (
        <div className='form'
            style={{
                width: '500px',
                height: '300px',
                margin: 'auto',
                border: '1px solid lightgray',
                float: 'right',
                padding: '50px 20px',
                marginBottom: '500px'
            }}
        >   
            <h1 style={{textAlign: 'center'}}>Form Signin</h1>
            <FormGroup width="200px">
                <CustomInput 
                    label='Username *'
                    type='text'
                />
            </FormGroup>
            {/* <CustomInput 
                label='Username *'
                type='text'
            /> */}
            <FormGroup width="300px">
                <CustomInput 
                    label='Password *'
                    type='password'
                />
            </FormGroup>
            <FormGroup>
                <CustomCheckbox 
                    label="Remember Me"
                    size="24px"
                />
            </FormGroup>
        </div>
    )
}

export default Form;