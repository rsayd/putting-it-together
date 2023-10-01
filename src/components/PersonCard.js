import React, { Component } from 'react';

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            insertAge: this.props.age,
        };
    }
    render() {
        const { firstName, lastName, age, hairColor } = this.props;

        return (
            <>
                <h1>Putting It Together</h1>
                <h2> {lastName}, {firstName}</h2>
                <h3>Age {this.state.insertAge}</h3>
                <h4>Hair Color {hairColor}</h4>
                <button
                    onClick={() => {
                        this.setState({ insertAge: this.state.insertAge + 1 });
                    }}
                >
                    Birthday Button Click to increase Age +1
                </button>
            </>
        );
    }
}

export default PersonCard;