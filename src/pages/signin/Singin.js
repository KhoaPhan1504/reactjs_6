import CustomCheckbox from "../../components/customcheckbox/CustomCheckbox";
import CustomInput from "../../components/custominput/CustomInput";
import FormGroup from "../../components/formgroup/FormGroup";

const Signin = props => {
    return(
        <div className="signin-wrapper">
            <div className="signin-content">
                <div className="sigin-header">
                    <div className="signin-avatar">

                    </div>
                    <h1>Sing In</h1>
                </div>
                
                <form className="signin-main">
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

export default Signin;