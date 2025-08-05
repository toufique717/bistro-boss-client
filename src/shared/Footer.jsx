 import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-2'>

        <div>
          <footer className="bg-neutral text-neutral-content p-10 flex justify-center">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-4">Contact us</h2>
              <p>123 abc sarani, Bashundhara, Dhaka</p>
              <p>+880178763873986</p>
              <p>Mon - Friday 7:00am - 8:00pm</p>
              <p>Sat - Thursday 7:00am - 8:00pm</p>
            </div>
          </footer>
        </div>

        <div className=''>
          <footer className="bg-base-300 text-neutral-content py-14  flex justify-center">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-4">follow us</h2>
              <p>Just click The Icon </p>
              <div className='grid grid-cols-3 justify-center pt-4 pb-2 pl-5'>
                <p><IoLogoFacebook /> </p>
                <p> <FaInstagramSquare /></p>
                <p><FaTwitter /></p>
              </div>
            </div>
          </footer>
        </div>

      </div>

      <footer className="footer footer-center p-2 bg-base-200 text-base-content rounded">
        <aside>
          <p>Copyright © 2025 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
