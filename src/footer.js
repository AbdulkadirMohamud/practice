import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="social-links">
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="copyright">
        &copy; {2024} Abdulkadir Mohamud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
