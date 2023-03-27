import React from 'react';
import Evenster from '../../images/Evenster.png';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
    listStyleType: 'none'
  },
  img: {
        maxWidth: "100%",
        height: "auto"
    }
};
export default function Portfolio({ allProjects }) {
  return (
    <div styles={styles.card}>
      <h1>My Projects</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each project and return a new array of list items for each project */}
        {allProjects.map((project) => (
          <ul style={styles.content} key={project.id}>
            <li style={styles.heading}>{`${project.name}`}</li>
            <li><img src={`${project.image}`} style={styles.img}/></li>
            <li><a href={`${project.deployedLink}`}>{`${project.deployedLink}`}</a></li>
            <li><a href={`${project.gitHubLink}`}>{`${project.gitHubLink}`}</a></li>
          </ul>
        ))}
      </ul>
    </div>
  );
}