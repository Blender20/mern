import React, { Component} from 'react';

class PersonCard extends Component{
    render(){
    let {lastName, name, age, hair_color} = this.props;
        return(
        <div>
            <h4>{lastName}, {name}</h4>
            <h4></h4>
            <p>Age: {age}</p>
            <p>hair color: {hair_color}</p>
        </div>
        );
    }
}

export default PersonCard;