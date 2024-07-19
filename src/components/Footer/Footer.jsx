import React from "react";
// import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
// import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

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
    title: "About Us",
    link: "/about",
  },
  {
    title: "Customer Service",
    link: "/contact",
  },
  {
    title: "Partners",
    link: "/partner",
  },
];

const Footer = () => {
  return (
    <>
      {/* <div className=" dark:bg-gray-950 py-10 relative overflow-hidden"> */}
        {/* <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src="https://images.pexels.com/videos/3129671/free-video-3129671.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </video> */}
        <div className=" dark:bg-gray-950 py-10 px-10 relative overflow-hidden">
        {/* <img src="https://img.freepik.com/free-vector/3d-style-black-background-with-paper-layer_206725-669.jpg" alt="" className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-0.5]" /> */}
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src="" alt="" className="max-h-[60px]" />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm">
              Encapsulates our unwavering commitment to realizing your dreams
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
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
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Services We Offer
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-100 dark:text-black text-start">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Industries
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {IndustryLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-black text-left">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Know Us
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {KnowUsLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-black text-left">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-white text-black">
              @copyright 2024 All rights reserved 
            </div>
            
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Footer;
