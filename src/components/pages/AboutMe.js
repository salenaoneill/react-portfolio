import React from 'react';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';
import ProfilePic from '../../images/profile-page.jpg';
const styles = {
    img: {
        display: "block",
        justifyContent: "center",
        maxWidth: "40%",
        height: "auto"
    }
}

function AboutMe() {
    return (
        <div>
            <img src={ProfilePic} style={styles.img}></img>
            <p>
            I am new to the tech industry, but confident in my ability to succeed. I have
            always been hardworking and driven in any job setting, and throughout my coding
            bootcamp experience at the University of Minnesota I have been resilient and I feel
            that I know enough to get me started and I absolutely cannot wait to further my
            knowledge.
            </p>
        </div>
    )
}

export default AboutMe;