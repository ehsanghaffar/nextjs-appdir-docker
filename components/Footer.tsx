import React from "react";


const Footer: React.FC = () => {
  return (
    <footer id="footer" className=" sticky bottom-0 border-t-2 border-gray-100">
      <div className="copyright">
        <p className="copyright-text">
        Design and Developed with
        <a href="https://github.com/ehsanghaffar" className="mx-2 text-cyan-500 hover:text-cyan-700">
        Ehsan Ghaffar
        </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
