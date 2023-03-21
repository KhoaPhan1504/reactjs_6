import ChildComponent from "./ChildComponent";

const ParentComponent = props => {
    return (
        <div>
            <h2>This is parent component</h2>
            {/* <ChildComponent message={props.message}/> */}
            <ChildComponent />
        </div>
    )
}

export default ParentComponent;