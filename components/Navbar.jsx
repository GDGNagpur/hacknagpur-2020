// import { useEffect, useState, useRef } from 'react';
// import Navigation from 'react-sticky-nav';

// const Navbar = () => {
//   let navbarClasses = ['navbar'];
//   const navbar = useRef(null);
//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     //const bodyRect = document.body.getBoundingClientRect();
//     const navRect = navbar.current.getBoundingClientRect();
//     //console.log(navRect.y);
//     if (navRect.y <= 20) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//   });

//   if (scrolled) {
//     navbarClasses.push('scrolled');
//   } else {
//     navbarClasses = ['navbar'];
//   }

//   return (
//     <nav className={navbarClasses.join(' ')} ref={navbar}>
//       <a href='#about'>About</a>
//       <a href='#tracks'>Tracks</a>
//       <a href='#prizes'>Prizes</a>
//       <a href='#sponsors'>Sponsors</a>
//       <a href='#faqs'>FAQs</a>
//     </nav>
//   );
// };

// export default Navbar;
