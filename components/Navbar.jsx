import { useState } from 'react';
import Navigation from 'react-sticky-nav';
import MenuButton from '../svgs/MenuButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='navbar scrolled'>
        <a className='nav-link' href='#about'>
          About
        </a>
        <a className='nav-link' href='#schedule'>
          Schedule
        </a>
        <a className='nav-link' href='#tracks'>
          Tracks
        </a>
        <a className='nav-link' href='#prizes'>
          Prizes
        </a>
        <a className='nav-link' href='#sponsors'>
          Sponsors
        </a>
        <a className='nav-link' href='#judges'>
          Judges
        </a>
        <a className='nav-link' href='#faqs'>
          FAQs
        </a>
        <a className='nav-link' href='#communities'>
          Communities
        </a>
        <a className='nav-link' href='#team'>
          Team
        </a>
        <div id='menu-button' onClick={() => setMenuOpen(!menuOpen)}>
          <MenuButton />
        </div>
      </nav>
      <div
        className='sidebar'
        style={{
          transform: menuOpen ? 'translateX(-100%)' : 'translateX(0)',
        }}
      >
        <a href='#about' onClick={() => setMenuOpen(!menuOpen)}>
          About
        </a>
        <a href='#schedule' onClick={() => setMenuOpen(!menuOpen)}>
          Schedule
        </a>
        <a href='#tracks' onClick={() => setMenuOpen(!menuOpen)}>
          Tracks
        </a>
        <a href='#prizes' onClick={() => setMenuOpen(!menuOpen)}>
          Prizes
        </a>
        <a href='#sponsors' onClick={() => setMenuOpen(!menuOpen)}>
          Sponsors
        </a>
        <a href='#judges' onClick={() => setMenuOpen(!menuOpen)}>
          Judges
        </a>
        <a href='#faqs' onClick={() => setMenuOpen(!menuOpen)}>
          FAQs
        </a>
        <a href='#communities' onClick={() => setMenuOpen(!menuOpen)}>
          Communities
        </a>
        <a href='#team' onClick={() => setMenuOpen(!menuOpen)}>
          Team
        </a>
      </div>
    </>
  );
};

export default Navbar;
