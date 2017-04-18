import React from "react";
import {Link, Route} from "react-router-dom";
import PEEPS from "../../data/PEEPS";

const Person = ({match}) => {
    const find = id => PEEPS.find(p => p.id == id);
    const person = find(match.params.id);

    return (
        <div>
            <h3>{person.name}'s Friends</h3>
            <ul>
                {person.friends.map(id => (
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>
                            {find(id).name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Route path={`${match.url}/:id`} component={Person} />
        </div>
    );
};

export default Person;
