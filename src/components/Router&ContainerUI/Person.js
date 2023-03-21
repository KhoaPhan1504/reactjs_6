import { Link } from "react-router-dom"

const Person = props => {
    return (
        <Link to={`${props.match.url +'/'+ props.id}`}>
            <div>
                <h2>Full Name: {props.firstName + ' ' + props.lastName}</h2>
                <p>Age: {props.age}</p>
            </div>
        </Link>
    )
}

export default Person;