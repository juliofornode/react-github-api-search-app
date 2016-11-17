import React, { Component } from 'react';
import Profile from './profile.jsx';
import Steps from './steps.jsx';
import RepoList from './repo_list.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'juliofornode',
            userData: {},
            userRepos: [],
            perPage: 5
        };
    }

    componentWillMount() {
        this.getUserData();
        this.getRepoData();
    }

    getUserData() {
        const ROOT_URL = 'https://api.github.com/users/';
        const USER_NAME = this.state.userName;
        const CLIENT_ID =  `?client_id=${this.props.clientId}`;
        const CLIENT_SECRET = `&client_secret=${this.props.clientSecret}`;

        $.ajax({
            url: `${ROOT_URL}${USER_NAME}${CLIENT_ID}${CLIENT_SECRET}`,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ userData: data });
            }.bind(this),
            error: function(a,b,err) {
                console.log(err);
            }.bind(this)
        })
    }

    getRepoData() {
        const ROOT_URL = 'https://api.github.com/users/';
        const USER_NAME = this.state.userName;
        const CLIENT_ID =  `&client_id=${this.props.clientId}`;
        const CLIENT_SECRET = `&client_secret=${this.props.clientSecret}`;
        const REPOS = `/repos?per_page=${this.state.perPage}`;
        const SORT = `&sort=created`;

        $.ajax({
            url: `${ROOT_URL}${USER_NAME}${REPOS}${CLIENT_ID}${CLIENT_SECRET}${SORT}`,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ userRepos: data });
            }.bind(this),
            error: function(a,b,err) {
                console.log(err);
            }.bind(this)
        })
    }

    handleSubmit(eventObject) {
        eventObject.preventDefault();
        let nombre = this.refs.nombreUsuario.value;
        this.setState({userName: nombre}, function() {
            this.getUserData();
            this.getRepoData();
        });
        this.refs.nombreUsuario.value = '';
    }

    render() {
        return (
            <div style={{marginBottom: '300', marginTop: '80'}}>
                <Steps />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    Enter a github username: <input type="text" ref="nombreUsuario"/>
                    <input type="submit" />
                </form>
                <Profile userdata={this.state.userData} />
                <RepoList repodata={this.state.userRepos} />
            </div>
        );
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: '885985c102a1891a0258',
    clientSecret: 'cd7cd3eca544209f4eeb129eb059675894242f5e'
};

export default App;