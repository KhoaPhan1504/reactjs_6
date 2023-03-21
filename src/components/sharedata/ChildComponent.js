const ChildComponent = props => {
    console.log('props child component: ', props);
    const randomColor = () => {
        let pattern = '0123456789ABCDEF';
        let colorRandom = '#';

        for (let i = 0; i < 6; i ++) {
            colorRandom += pattern[Math.floor(Math.random() * 16)];
        }
        props.getColor(colorRandom);
    }

    return (
        <div>
            <h2>This is child component</h2>
            <p>Current count from parent: {props.count}</p>
            <button onClick={randomColor}>Random Color</button>
        </div>
    )
}

export default ChildComponent;