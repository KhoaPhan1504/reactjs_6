import MessageContext from "./MessageContext";

const ChildComponent = props => {
    return (
        <div>
            <h2>This is child component</h2>
            {/* <p>Message form grand parent: {props.message}</p> */}
            <MessageContext.Consumer>
                {({username}) => <p>Message form grand parent: {username}</p>}
            </MessageContext.Consumer>
        </div>
    )
}

export default ChildComponent;