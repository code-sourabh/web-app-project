import React, { useState, useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import infra from "../../image/property.png";
import cloud from "../../image/cloud-data.png";
import app from "../../image/app-development.png";
import data from "../../image/analytics.png";
import finops from "../../image/cost-optimization.png";
import auto from "../../image/software.png";
import cyber from "../../image/security.png";
import devops from "../../image/devops.png";
import sas from "../../image/saas.png";
import financial from "../../image/financial.png";
import tele from "../../image/broadcast.png";
import banking from "../../image/mobile-banking.png";
import media from "../../image/social-media.png";
import tech from "../../image/virtual.png";
import about from "../../image/team.png";
import partner from "../../image/deal.png";
import customer from "../../image/help-desk.png";

import "./Navbar.css";
import logo from "../../assets/main logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropDown, setDropDown] = useState(true);
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
      title: "What we do",
      dropDown: true,
      link: "",
      sidebar: [
        {
          title: "Accelerate",
          cards: [
            {
              title: "Cloud-Services",
              name: "cloud-services",
              icon: cloud,
              link: "/services",
            },

            {
              title: "Application-Services",
              icon: app,
              link: "/services",
              name: "application-services",
            },
            {
              title: "Cyber-Security",
              icon: cyber,
              link: "/services",
              name: "cyber-security",
            },
            {
              title: "Data-Analytics",
              icon: data,
              link: "/services",
              name: "data-analytics",
            },
          ],
        },
        {
          title: "Innovate",
          cards: [
            {
              title: "Automation",
              icon: auto,
              link: "/services",
              name: "automation",
            },
            {
              title: "Infrastructure",
              icon: infra,
              link: "/services",
              name: "infrastructure",
            },
            {
              title: "Finops",
              icon: finops,
              link: "/services",
              name: "finops",
            },
          ],
        },
        {
          title: "Multiply",
          cards: [
            {
              title: "Devops",
              icon: devops,
              link: "/services",
              name: "devops",
            },
            { title: "AIops", icon: sas, link: "/services", name: "aiops" },
          ],
        },
      ],
    },

    {
      title: "Industries",
      link: "",
      dropDown: true,
      sidebar: [
        {
          title: "Accelerate",
          cards: [
            {
              title: "Finance",
              icon: financial,
              link: "/industries",
              name: "finance",
            },
            {
              title: "Banking",
              icon: banking,
              link: "/industries",
              name: "banking",
            },
            { title: "Media", icon: media, link: "/industries", name: "media" },
          ],
        },
        {
          title: "Innovate",
          cards: [
            {
              title: "Telecom",
              icon: tele,
              link: "/industries",
              name: "telecom",
            },
            {
              title: "Technology",
              icon: tech,
              link: "/industries",
              name: "technology",
            },
          ],
        },
      ],
    },
    {
      title: "Insights",
      link: "",
      dropDown: true,
      sidebar: [
        {
          title: "Know Us",
          cards: [
            { title: "About us", icon: about, link: "", name: "about" },
            {
              title: "Customer Support",
              icon: customer,
              link: "",
              name: "contact",
            },
            { title: "Partners", icon: partner, link: "", name: "partner" },
          ],
        },
      ],
    },
    {
      title: "Carriers",
      dropDown: false,
      link: "/carriers",
    },
    {
      title: "About",
      dropDown: false,
      link: "/about",
    },
  ];
  const [navigationTarget, setNavigationTarget] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigationTarget) {
      navigate(navigationTarget);
      setNavigationTarget(null);
    }
  }, [navigationTarget, navigate]);

  // Function to handle language change
  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang); // Change the language
  };
  // Function to handle click on menu item
  const handleClick = (index, dropDownValue, link) => {
    if (!dropDownValue) {
      // For non-dropdown items like "Carriers"
      setActiveNavItem(index);
      closeDropdown(); // Close any open dropdown
      setNavigationTarget(link); // Set navigation target
      setMenuOpen(false);
      setActiveNavItem(index);
      // closeDropdown()
      return; // Exit the function
    }

    // For dropdown items
    if (activeDropdown === index) {
      // If clicking on the already active dropdown, close it
      closeDropdown();
    } else {
      // If clicking on a new dropdown, open it
      setActiveDropdown(index);
      setDropDown(true);
      setActiveNavItem(index);
      if (isMobile) {
        setMobileMenuLevel("submenu");
        setMenuOpen(true);
      }
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setDropDown(false);
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
          <Link to="/">
            {" "}
            <img src={logo} className="logo h-12 font-bold" alt="Logo" />
          </Link>
        </div>

        {isMobile && (
          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? (
              <MdOutlineClose size={30} color="white" />
            ) : (
              <IoMenu size={30} color="white" />
            )}
          </div>
        )}
        <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={activeNavItem === index ? "active-nav-item" : ""}
              onClick={() => handleClick(index, item.dropDown, item.link)}
            >
              {item.title}
            </li>
          ))}
          {isMobile && (
            <div className="flex justify-center items-center gap-2 bg-transparent text-white">
              {/* Dropdown for language selection */}

              <Link to="/contact">
                <button className="bg-[#ff6600] text-white border-none py-2 px-4 rounded cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </div>
          )}
        </ul>

        {/* google translator */}
        {isMobile&& <div className="flex justify-center items-center gap-2 bg-transparent text-white">
          {/* Dropdown for language selection */}

          <select
            className=" bg-transparent text-white"
            onChange={handleLanguageChange}
          >
            <option className=" bg-transparent text-black" value="en">
              {t("english")}
            </option>
            <option className=" bg-transparent text-black" value="hu">
              {t("hungarian")}
            </option>
            <option className=" bg-transparent text-black" value="de">
              {t("german")}
            </option>
          </select>
        </div>}

        {!isMobile && (
          <div className="flex justify-center items-center gap-2 bg-transparent text-white">
            {/* Dropdown for language selection */}
            <select
              className=" bg-transparent text-white"
              onChange={handleLanguageChange}
            >
              <option className=" bg-transparent text-black" value="en">
                {t("english")}
              </option>
              <option className=" bg-transparent text-black" value="hu">
                {t("hungarian")}
              </option>
              <option className=" bg-transparent text-black" value="de">
                {t("german")}
              </option>
            </select>
            <Link to="/contact">
              <button className="bg-[#ff6600] text-white border-none py-2 px-4 rounded cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </nav>
      {/* Render dropdown menu for desktop view */}
      {dropDown && !isMobile && activeDropdown !== null && (
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
      {dropDown && isMobile && menuOpen && (
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
