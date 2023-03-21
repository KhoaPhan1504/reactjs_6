// function DemoFunctionComponent() {

// }
const DemoFunctionComponent = (props) => {
    
    console.log(props);

    return (
        <div>
            <div>
                <h1>Demo function component</h1>
                <h3>props received from parent: {props.x}</h3>
            </div>
            <div>

            </div>
        </div>
    )
}

DemoFunctionComponent.defaultProps = {
    subject: 'ReactJS-Ro29'
}

export default DemoFunctionComponent;

