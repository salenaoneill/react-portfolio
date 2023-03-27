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
            <h3>Resume</h3>
            <img src={ResumePic} style={styles.img}></img>
        </section>
    )
}

export default Resume;