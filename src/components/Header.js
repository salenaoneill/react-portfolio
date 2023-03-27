import React from 'react';

const styles = {
    header: {
        display: 'block',
        background: '#f9b713',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.6rem',
     
      }
}

function Header() {
    return (
        <section>
            <div>
                <h1 style={styles.header}>Salena O'Neill Portfolio</h1>
            </div>
        </section>
    )
}

export default Header;