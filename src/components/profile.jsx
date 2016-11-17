import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return(
            <div>
                <h3>This the user data from GitHub API</h3>
                <p>{this.props.userdata.login}</p>
            </div>
        );
    }
}

export default Profile;