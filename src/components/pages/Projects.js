import React from 'react';

// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function Projects({ allProjects }) {
  return (
    <div className="container">
      <h1>My Projects</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {users.map((allProjects) => (
          <li className="list-group-item" key={user.login.uuid}>
            {`${allProjects.name} ${allProjects.image} ${allProjects.deployedLink} ${allProjects.gitHubLink}`}
          </li>
        ))}
      </ul>
    </div>
  );
}