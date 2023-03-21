import React from 'react';

// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function Portfolio({ allProjects }) {
  return (
    <div className="container">
      <h1>My Projects</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {allProjects.map((project) => (
          <ul className="list-group-item" key={project.id}>
            <li>{`${project.name}`}</li>
            <li>{`${project.image}`}</li>
            <li><a href="Deployed Link">{`${project.deployedLink}`}</a></li>
            <li><a href="GitHub Link">{`${project.GitHubLink}`}</a></li>
          </ul>
        ))}
      </ul>
    </div>
  );
}