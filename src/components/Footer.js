import React from "react";

const styles = {
    footer: {
        display: 'block',
        background: '#f9b713',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.3rem'
      }
}

function Footer() {
    return (
        <footer style={styles.footer}>
                <h3>Design & Devlopment by Salena O'Neill</h3>
                <div className="github">
                    <a href="https://github.com/salenaoneill">https://github.com/salenaoneill</a>
                </div>
        </footer>
    )
}

export default Footer;