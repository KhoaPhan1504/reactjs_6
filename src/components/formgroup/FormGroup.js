const FormGroup = props => {
    return(
        <div className='form-group'
            style={{
                marginTop: '1.6rem',
                width: props.width ? props.width : '100%'
            }}
        >
            {props.children}
        </div>
    )
}

export default FormGroup;