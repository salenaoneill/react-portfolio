import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
    alignItems: 'center'
  },
  heading: {
    maxWidth: "36.5%",
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
        maxWidth: "40%",
        height: "auto"
    }
};
export default function Portfolio({ allProjects }) {
  return (
    <Container class="mx-auto" styles={styles.card}>
      <h1>My Projects</h1>
      <Row className="list-group">
        {/* Here we use the map method to iterate through each project and return a new array of list items for each project */}
        {allProjects.map((project) => (
          <ul style={styles.content} key={project.id}>
            <li style={styles.heading}>{`${project.name}`}</li>
            <Col><img src={`${project.image}`} style={styles.img}/></Col>
            <Col>
              <li>Deployed Link: <a href={`${project.deployedLink}`}>{`${project.deployedLink}`}</a></li>
              <li>GitHub Link: <a href={`${project.gitHubLink}`}>{`${project.gitHubLink}`}</a></li>
            </Col>
          </ul>
        ))}
      </Row>
    </Container>
  );
}