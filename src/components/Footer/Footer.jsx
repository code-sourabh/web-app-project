import React from "react";
// import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
// import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";
import logo from '../../assets/main logo.png';

const FooterLinks = [
  {
    title: "Cloud-Services",
    link: "/services/cloud-services",
  },
  {
    title: "Application-Services",
    link: "/services/application-services",
  },
  {
    title: "Cyber-Security",
    link: "/services/cyber-security",
  },
  {
    title: "Data-Analytics",
    link: "/services/data-analytics",
  },
  {
    title: "Automation",
    link: "/services/automation",
  },
  {
    title: "Infrastructure",
    link: "/services/infrastructure",
  },
];
const IndustryLinks = [
  {
    title: "Finance",
    link: "/industries/finance",
  },
  {
    title: "Technology",
    link: "/industries/technology",
  },
  {
    title: "Banking & Insurance",
    link: "/industries/banking",
  },
  {
    title: "Telecom",
    link: "/industries/telecom",
  },
  {
    title: "Media Industry",
    link: "/industries/media",
  },
];
const KnowUsLinks = [
  {
    title: "About ",
    link: "/about",
  },
  {
    title: "Leaders ",
    link: "/leaders",
  },
  {
    title: "Customer Service",
    link: "/contact",
  },
  {
    title: "Partners",
    link: "/partner",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    
        <div className=" dark:bg-gray-100 relative overflow-hidden w-full mt-[4rem]">
       
          <div className="grid md:grid-cols-3 py-5 bg-black bg-opacity-80 ">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <Link to='/' onClick={() => window.scrollTo(0, 0)}><img src={logo} alt="" className="max-h-[80px]" /></Link>  
                
              </h1>
              <p className="text-[1rem] text-start text-white">
              Encapsulates our unwavering commitment to realizing your dreams
              </p>
              <br />
              
              <div>
                <div className="flex items-center gap-3 mt-6 text-white">
                  <a href="#">
                    <FaInstagram className="text-3xl text-white" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 text-white">
              <div>
                <div className="py-8 px-4 text-white">
                  <h1 className="text-[1.25rem] font-bold text-justify sm:text-left mb-3 text-[#ff6600] ">
                  Our Services
                  </h1>
                  <ul className="flex flex-col gap-3 text-white">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-100 dark:text-black text-start text-[0.8rem]">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          
                          <span className="text-white">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-[1.25rem] font-bold text-justify sm:text-left mb-3 text-[#ff6600] ">
                    Industries
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {IndustryLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-black text-left text-[0.8rem]">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          
                          <span className="text-white">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-[1.25rem] font-bold text-justify sm:text-left mb-3 text-[#ff6600] ">
                    Who we are
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {KnowUsLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-black text-left text-[0.8rem]">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          
                          <span className="text-white">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50  bg-[orange] text-black font-bold">
              @copyright 2024 All rights reserved 
            </div>
            
          </div>
        </div>
     
  );
};

export default Footer;
