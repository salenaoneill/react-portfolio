//depdendencies
import React, { useState } from 'react';
import allProjects from '../allProjects';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
//the about me section is loaded by default
  const [currentPage, setCurrentPage] = useState('AboutMe');

  //renders JSX to the dom depending on the chosen current page
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio allProjects={allProjects}/>;
      
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header/>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* call render page */}
      {renderPage()}
      <Footer/>
    </div>
  );
}
