import React from 'react';
import PortfolioPic from '../../images/portfolio-pic.jpeg';
function AboutMe() {
    return (
        <div>
            <img src={PortfolioPic}></img>
            <p>
                My name is Salena and I am currently a boot camp student! 
                I am almost a full-stack developer and I look forward to beginning the
                interview process & finding a job doing what I love soon!
            </p>
        </div>
    )
}

export default AboutMe;