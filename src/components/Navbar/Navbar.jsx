import React, { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileMenuLevel, setMobileMenuLevel] = useState("main");

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const menuItems = [
    {
      title: "Solutions",
      sidebar: [
        {
          title: "Accelerate",
          cards: [
            {
              title: "Cloud Consulting, Strategy, and Migration",
              icon: "cloud-icon.png",
            },
            { title: "DevSecOps", icon: "devsecops-icon.png" },
            { title: "Cloud Security Engineering", icon: "security-icon.png" },
            { title: "Application Assessment", icon: "assessment-icon.png" },
            {
              title: "Cloud Native Application Development & Testing",
              icon: "cloud-native-icon.png",
            },
            {
              title: "SaaS Product & Platform Development",
              icon: "saas-icon.png",
            },
            { title: "Data Strategy", icon: "data-strategy-icon.png" },
          ],
        },
        {
          title: "Innovate",
          cards: [
            { title: "Innovation 1", icon: "innovation1-icon.png" },
            { title: "Innovation 2", icon: "innovation2-icon.png" },
          ],
        },
        {
          title: "Multiply",
          cards: [
            { title: "Multiply 1", icon: "multiply1-icon.png" },
            { title: "Multiply 2", icon: "multiply2-icon.png" },
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

  console.log(i18n.language);
  // Function to handle click on menu item
  const handleClick = (index) => {
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
      <nav className="navbar">
        <div className="logo">Webrass</div>
        {isMobile && (
          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? "Close" : "Menu"}
          </div>
        )}
        <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              {item.title}
            </li>
          ))}
        </ul>

       
        <div className="flex justify-center items-center gap-2">
          {/* Dropdown for language selection */}
          <select onChange={handleLanguageChange}>
            <option value="en">{t("english")}</option>
            <option value="hu">{t("hungerian")}</option>
            <option value="de">{t("german")}</option>
          </select>

          <button className="bg-[#ff6600] text-white border-none py-2 px-4 rounded cursor-pointer">
            Contact Us
          </button>
        </div>
      </nav>
      {/* Render dropdown menu for desktop view */}
      {!isMobile && activeDropdown !== null && (
        <DropdownMenu
          items={menuItems[activeDropdown]}
          closeDropdown={closeDropdown}
          isMobile={isMobile}
          isTopLevel={true}
          onBackToMain={handleBackToMain}
          mobileMenuLevel={mobileMenuLevel}
          setMobileMenuLevel={setMobileMenuLevel}
        />
      )}
      {/* Render dropdown menu for mobile view */}
      {isMobile && menuOpen && (
        <DropdownMenu
          items={activeDropdown !== null ? menuItems[activeDropdown] : null}
          closeDropdown={closeDropdown}
          isMobile={isMobile}
          isTopLevel={true}
          onBackToMain={handleBackToMain}
          mobileMenuLevel={mobileMenuLevel}
          setMobileMenuLevel={setMobileMenuLevel}
        />
      )}
    </>
  );
};

export default Navbar;
