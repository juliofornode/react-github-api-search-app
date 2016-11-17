import React from 'react';

const Steps = () => {
    return(
      <div>
          <h3>Steps to build the Github API search</h3>
          <ol>
              <li>App component: define state.</li>
              <li>Create ajax function to get user data from Github API.</li>
              <li>Profile component: user data.</li>
              <li>Pass data from App to Profile via props.</li>
              <li>RepoList component: user-repos</li>
              <li>Repo component: each individual repo listed by RepoList</li>
              <li>Create ajax function to get user-repos data from Github API.</li>
              <li>Pass user-repos data from App to RepoList via props.</li>
              <li>Search functionality: form, input field, onSubmit method</li>
              <li>onSubmit method updates this.state.username and calls fetch methods again</li>
          </ol>
      </div>
    );
};

export default Steps;