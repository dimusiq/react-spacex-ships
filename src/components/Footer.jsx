import React from 'react';

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='p-10 bg-gray-700 footer text-primary-content footer-center'>
      <div>
        <p>
          Copyright &copy; {footerYear} Все права защищены
        </p>
      </div>
    </footer>
  );
};

export default Footer;
