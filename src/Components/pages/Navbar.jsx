/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useMemo, useState } from "react";
import image from "../images/logo.png";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdAccountTree } from "react-icons/md";

function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { path: "#home", label: "Home", icon: <IoHome className="me-2" /> },
      { path: "#about", label: "About", icon: <FaUser className="me-2" /> },
      {
        path: "#skills",
        label: "Skills",
        icon: <MdAccountTree className="me-2" />,
      },
      {
        path: "#projects",
        label: "Projects",
        icon: <GrProjects className="me-2" />,
      },
      {
        path: "#contact",
        label: "Contact",
        icon: <BsEnvelope className="me-2" />,
      },
    ],
    []
  );

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.path.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const updateOnScrollFallback = () => {
      const offset = window.innerHeight * 0.35;
      let currentId = "home";

      for (const section of sections) {
        if (section.offsetTop - offset <= window.scrollY) {
          currentId = section.id;
        }
      }

      setActiveSection(`#${currentId}`);
    };

    updateOnScrollFallback();
    window.addEventListener("scroll", updateOnScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateOnScrollFallback);
    };
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar fixed-top site-nav">
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          aria-label="Go to Home"
          onClick={() => setIsMenuOpen(false)}
        >
          <img className="img-fluid" loading="lazy" src={image} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="offcanvasDarkNavbar"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <HiMiniBars3CenterLeft className="bars-icon" />
        </button>

        <div
          className={`offcanvas offcanvas-start ${isMenuOpen ? "show d-block" : ""}`}
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
          aria-hidden={!isMenuOpen}
        >
          <div className="offcanvas-header">
            <img className="img-fluid" loading="lazy" src={image} alt="logo" />
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={() => setIsMenuOpen(false)}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${activeSection === link.path ? "active" : ""}`}
                    href={link.path}
                    aria-current={activeSection === link.path ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.icon} {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
