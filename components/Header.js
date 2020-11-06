import Image from 'next/image';

const Header = () => {
  return (
    <div className='header'>
      <img src='/assets/logo.svg' layout='fill' width='200px' />
    </div>
  );
};

export default Header;
