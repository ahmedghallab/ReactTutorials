import React, { Component } from 'react';

class Course extends Component {
    render () {
        console.log(this.props.match.params.id);
        return (
            <div>
              <h2>
                    ({this.props.match.params.title})
                </h2>
                <p>You selected the Course with ID: <strong>{this.props.match.params.id}</strong></p>
            </div>
        );
    }
}

export default Course;