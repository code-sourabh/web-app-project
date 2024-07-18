import React, { useState, useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

import "./Navbar.css";
import logo from '../../assets/webrass-logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileMenuLevel, setMobileMenuLevel] = useState("main");
  const [activeNavItem, setActiveNavItem] = useState(null);
  const navbarRef = useRef(null); // Add ref for the navbar
  const dropdownRef = useRef(null); // Add ref for the dropdown

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        if (newIsMobile) {
          setActiveDropdown(null);
          setMenuOpen(false);
        }
      }
    };

    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  const menuItems = [
    {
      title: "Services",
      sidebar: [
        {
          title: "Accelerate",
          cards: [
            {
              title: "cloud-services",
              icon: "cloud-icon.png",
            },
            { title: "application-services", icon: "https://www.cloudflare.com/resources/images/slt3lc6tev37/2SOsNYYwPqKnvBzn4fdJf6/9a83153da4f073ca44383c9c5a9f0749/icon-machine-learning-1-orange.png" },
            { title: "cyber-security", icon: "security-icon.png" },
            { title: "data-analytics", icon: "assessment-icon.png" },
          ],
        },
        {
          title: "Innovate",
          cards: [
            { title: "automation", icon: "innovation1-icon.png" },
            { title: "infrastructure", icon: "innovation1-icon.png" },
            { title: "finops", icon: "innovation2-icon.png" },
          ],
        },
        {
          title: "Multiply",
          cards: [
            { title: "devops", icon: "multiply1-icon.png" },
            { title: "saas", icon: "multiply2-icon.png" },
          ],
        },
      ],
    },
    {
      title: "Insights",
      sidebar: [
        {
          title: "Accelerate",
          cards: [
            { title: "Insight 1", icon: "icon1.png" },
            { title: "Insight 2", icon: "icon2.png" },
          ],
        },
        {
          title: "Innovate",
          cards: [
            { title: "Insight 3", icon: "icon3.png" },
            { title: "Insight 4", icon: "icon4.png" },
          ],
        },
      ],
    },
    {
      title: "Industries",
      sidebar: [
        {
          title: "Accelerate",
          cards: [
            { title: "Industry 1", icon: "icon1.png" },
            { title: "Industry 2", icon: "icon2.png" },
            { title: "Industry 3", icon: "icon3.png" },
            { title: "Industry 4", icon: "icon4.png" },
            { title: "Industry 5", icon: "icon5.png" },
          ],
        },
        {
          title: "Innovate",
          cards: [
            { title: "Industry 6", icon: "icon6.png" },
            { title: "Industry 7", icon: "icon7.png" },
          ],
        },
      ],
    },
  ];

  // Function to handle language change
  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang); // Change the language
  };

  // Function to handle click on menu item
  const handleClick = (index) => {
    setActiveNavItem(index); // Update the active nav item
    if (isMobile) {
      setActiveDropdown(index);
      setMobileMenuLevel("submenu");
      setMenuOpen(true);
    } else {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  // Function to close dropdown menu
  const closeDropdown = () => {
    setActiveDropdown(null);
    setMobileMenuLevel("main");
  };

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
    setMobileMenuLevel("main");
  };

  // Function to handle back to main menu level
  const handleBackToMain = () => {
    setMobileMenuLevel("main");
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="logo">
          <img src={logo} className="logo h-8" alt="Logo" />
        </div>
        {isMobile && (
          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <MdOutlineClose size={30} /> : <IoMenu size={30} />}
          </div>
        )}
        <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={activeNavItem === index ? "active-nav-item" : ""}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-2">
          {/* Dropdown for language selection */}
          <select onChange={handleLanguageChange}>
            <option value="en">{t("english")}</option>
            <option value="hu">{t("hungarian")}</option>
            <option value="de">{t("german")}</option>
          </select>
          <button className="bg-[#ff6600] text-white border-none py-2 px-4 rounded cursor-pointer">
            Contact Us
          </button>
        </div>
      </nav>
      {/* Render dropdown menu for desktop view */}
      {!isMobile && activeDropdown !== null && (
        <div ref={dropdownRef}>
          <DropdownMenu
            items={menuItems[activeDropdown]}
            closeDropdown={closeDropdown}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            isMobile={isMobile}
            isTopLevel={true}
            onBackToMain={handleBackToMain}
            mobileMenuLevel={mobileMenuLevel}
            setMobileMenuLevel={setMobileMenuLevel}
          />
        </div>
      )}
      {/* Render dropdown menu for mobile view */}
      {isMobile && menuOpen && (
        <DropdownMenu
          items={activeDropdown !== null ? menuItems[activeDropdown] : null}
          closeDropdown={closeDropdown}
          isMobile={isMobile}
          isTopLevel={true}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onBackToMain={handleBackToMain}
          mobileMenuLevel={mobileMenuLevel}
          setMobileMenuLevel={setMobileMenuLevel}
        />
      )}
    </>
  );
};

export default Navbar;
