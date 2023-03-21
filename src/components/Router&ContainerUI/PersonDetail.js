const PersonDetail = props => {

    console.log('props person detail: ', props);

    const { id } = props.match.params;

    const person = props.persons.find(person => person.id == id);

    console.log(person);

    return (
        <div style={{border: '1px solid green'}}>
            <h2>Id: {person.id}</h2>
            <p>First Name: {person.firstName }</p>
            <p>Last Name: {person.lastName}</p>
            <p>Age: {person.age}</p>
        </div>
    )
}

export default PersonDetail;