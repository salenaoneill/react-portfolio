import React, { useState } from 'react';

const styles = {
  navbar: {
    margin: 0,
    padding: 0,
    background: '#333',
    listStyleType: 'none',
  },
  card: {
    display: 'block',
    textAlign: 'center',
    fontSize: '1.2rem',
    color: 'white',
    padding: '14px 16px',
  },
  clickedCard: {
    display: 'block',
    textAlign: 'center',
    fontSize: '1.2rem',
    color: 'white',
    background: '#3f51b5',
    padding: '14px 16px',
  },
};

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.navbar}>
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          //If current page is Home nav-link-active className is used. else use nav-link
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} 
          style={currentPage === 'AboutMe' ? styles.clickedCard : styles.card}
        >
          About Me!
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // If current page is About, nav-link-active className is used. else use nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'Portfolio' ? styles.clickedCard : styles.card}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
          style={currentPage === 'Contact' ? styles.clickedCard : styles.card}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
          style={currentPage === 'Resume' ? styles.clickedCard : styles.card}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
