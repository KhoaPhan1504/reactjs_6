import CustomCheckbox from "../../components/customcheckbox/CustomCheckbox";
import CustomInput from "../../components/custominput/CustomInput";
import FormGroup from "../../components/formgroup/FormGroup";

const Signup = props => {
    return(
        <div className="signup-wrapper">
            <div className="signup-content">
                <div className="signup-header">
                    <div signin-avatar>

                    </div>
                    <h1>Sing Up</h1>
                </div>
                
                <form className="signup-main">
                    <FormGroup>
                        <CustomInput 
                            label='Username *'
                            type='text'
                        />
                    </FormGroup>
                    <FormGroup>
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
                </form>
            </div>
        </div>
    )
}

export default Signup;