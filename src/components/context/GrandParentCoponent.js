import ParentComponent from "./ParentComponent";
import MessageContext from "./MessageContext";
const GrandParentComponent = props => {
    const message = "Hello child component";
    const value = {
        message: message,
        username: 'quanghai',
        password: '111111'
    }
    return (
        <div>
            <h2>This is grand parent component</h2>
            {/* <ParentComponent message={message}/> */}
            {/* Using context */}
            <MessageContext.Provider value={{message: 'hello word', username: '123abc'}}>
                <ParentComponent />
            </MessageContext.Provider>
        </div>
    )
}

export default GrandParentComponent;