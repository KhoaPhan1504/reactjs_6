import { Component } from "react";

class ClassComponentWithDefaultProps extends Component {

    constructor (props) {
        super(props);
        this.state = {
            color: '',
            fontSize: '16px'
        }
    }

    randomColor = () => {
        let pattern = '0123456789ABCDEF';
        let colorRandom = '#';
        for (let i = 0; i < 6; i ++) {
            colorRandom += pattern[Math.floor(Math.random() * 16)];
        }
        this.setState({
            color: colorRandom
        })
    }

    // randomColor () {
    //     let pattern = '0123456789ABCDEF';
    //     let colorRandom = '#';
    //     for (let i = 0; i < 6; i ++) {
    //         colorRandom += pattern[Math.floor(Math.random() * 16)];
    //     }
    //     this.setState({
    //         color: colorRandom
    //     })
    // }

    render () {
        console.log('Props of the FunctionComponentWithDefaultProps: ', this.props);
        console.log(this.props.children);
        return (
            <div style={{color: this.state.color}}>
                <h1>Demo default props with class component</h1>
                <p>Mon hoc: {this.props.subject}</p>
                <p>Username: {this.props.username}</p>
                {this.props.children}
                <button onClick={this.randomColor}>Random Color</button>
            </div>
        )
    }

}

ClassComponentWithDefaultProps.defaultProps = {
    subject: 'ReactJS-Ro29'
}

export default ClassComponentWithDefaultProps;