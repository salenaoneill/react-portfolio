import React from "react";
import ResumePic from '../../images/resume.png';

const styles = {
    img: {
        maxWidth: "80%",
        height: "auto"
    }
  };

function Resume() {
    return (
        <section className="resume">
            <h1>Resume</h1>
            <div>
                <h3>Technologies and Languages</h3>
                <ol>Languages: HTML, CSS, JavaScript, MySQL, Python</ol>
                <ol>Technologies: Git, Github, Node, Express, Handlebars, Jest, MongoDB, React, GraphQL</ol>
                <ol>Other: Kanban (Agile)</ol>
            </div>
            <a href="https://docs.google.com/document/d/1d0Al0m04UftuI-DpOKGfKCSzl3epPFr7M9v5Xo4V6f4/edit?usp=sharing">View my Resume Here</a>
        </section>
    )
}

export default Resume;