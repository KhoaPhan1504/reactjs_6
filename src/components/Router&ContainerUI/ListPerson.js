import Person from "./Person";

const ListPerson = props => {
    console.log(props)
    return (
        <div>
            {
                props.persons.map((person, index, arr) => {
                    return (
                        <Person
                            key={person.id}
                            id={person.id}
                            firstName={person.firstName}
                            lastName={person.lasttName}
                            age={person.age}
                            match={props.match}
                        />
                    )
                })
            }
        </div>
    )
}

export default ListPerson;