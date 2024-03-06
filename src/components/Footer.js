import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-flow-col bg-black justify-items-center h-44 w-full mt-auto pb-5">
      <div className="flex  flex-col justify-center ">
        <h3 className="font-bold text-xl text-white mb-2">Company</h3>
        <span className="text-slate-300">About</span>
        <span className="text-slate-300">Careers</span>
        <span className="text-slate-300">Team</span>
      </div>
      <div className="flex  flex-col justify-center ">
        <h3 className="font-bold text-xl text-white mb-2">Contact</h3>
        <span className="text-slate-300">Help and Support</span>
        <span className="text-slate-300">Partner with us</span>
        <span className="text-slate-300">Ride with us</span>
      </div>
      <div className="flex  flex-col justify-center ">
        <h3 className="font-bold text-xl text-white mb-2">Legal</h3>
        <span className="text-slate-300">Terms & Conditions</span>
        <span className="text-slate-300">Cookie Policy</span>
        <span className="text-slate-300">Privacy Policy</span>
      </div>
      <div className="flex  flex-col justify-center ">
        <h3 className="font-bold text-xl text-white mb-2">More</h3>
        <span className="text-slate-300">Made by Dhaval Gala</span>
        <span className="text-slate-300">
          <Link to={process.env.REACT_APP_GITHUB}>Github Link</Link>
        </span>
        <span className="text-slate-300">
          <Link to={process.env.REACT_APP_LINKEDIN}>LinkedIn</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
