import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

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
                <div>
                    <label>Name:</label>
                    <textarea
                        type="text"
                        className="Name"
                        required>
                    </textarea>
                    <label>Email Address:</label>
                    <textarea
                        type="text"
                        className="EmailAddress"
                        required>
                    </textarea>
                    <label>Message:</label>
                    <textarea type="text" className="message" required></textarea>
                    <button type="submit">Submit</button>
                </div>
        </form>
    )
}

export default Contact;