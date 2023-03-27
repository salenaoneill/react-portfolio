import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const styles = {
    card: {
      margin: 0,
      background: '#e8eaf6',
      align: 'center',
      display: 'block',
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
      listStyleType: 'none',
    },
  };

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            "service_blfoi0v",
            "template_4iuqxw8",
            e.target,
            "3M-Gmkf0pl6oh03Mv"
        )
        .then(
            (result) => {
                    console.log(result.text);
                    alert("Your email has been successfully sent");
            },
            (error) => {
                console.log(error.text);
                alert("Something went wrong");
            }
        )
        
    }

    return (
        <form onSubmit={sendEmail}>
                <h2>Contact Me!</h2>
                <ul style={styles.content}>
                    <li>
                        <label style={styles.heading}>Name:</label>
                            <textarea
                                style={styles.card}
                                type="text"
                                className="Name"
                                required>
                            </textarea>
                    </li>
                    <li>
                        <label style={styles.heading}>Email Address:</label>
                        <textarea
                            style={styles.card}
                            type="text"
                            className="EmailAddress"
                            required>
                        </textarea>
                    </li>
                    <li>
                        <label style={styles.heading}>Message:</label>
                        <textarea style={styles.card} type="text" className="message" required></textarea>
                    </li>
                    <li>
                        <button style={styles.card}type="submit">Submit</button>
                    </li>
                    
                </ul>
        </form>
    )
}

export default Contact;