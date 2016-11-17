import React, {Component} from 'react';

class RepoList extends Component {

    displayRepos() {
        return this.props.repodata.map(repo => {
            return (
              <li key={repo.name}>{repo.name}</li>
            );
        })
    }

    render() {
        return(
            <div>
                <h3>This is the user-repos data from GitHub API</h3>
                <ul>
                    {this.displayRepos()}
                </ul>
            </div>
        );
    }
}

export default RepoList;