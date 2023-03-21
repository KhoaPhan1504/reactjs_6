import { Component } from 'react';

class DemoClassComponent extends Component {
    //props
    constructor(props) {
        super(props);

        //state class component
        this.state = {
            count: 0,
            y: 200
        }
    }

    increaseCount = () => {
        //alert('123abc');
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        console.log(this.props);
        console.log('state of the componnet: ', this.state)
        return (
            <div>
                <h1>Demo class component</h1>
                <h3>
                    props received from parent: 
                    {this.props.x + ';' + this.props.username}
                </h3>
                <h2>Current count: {this.state.count}</h2>
                <button onClick={this.increaseCount}>Increment Count</button>
            </div>
        )
    }
}

export default DemoClassComponent;