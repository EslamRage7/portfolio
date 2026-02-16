import { useEffect, useState } from "react";
import image from "../images/fedaa.jpg";
import file from "../images/Fedaa_Amin_CV.pdf";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaDownload,
} from "react-icons/fa";

const rotatingHeadlines = [
  "Hi, I'm Fedaa Amin.",
  "Flutter Developer.",
  "UI/UX Designer.",
];

function Home() {
  const [typedText, setTypedText] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentHeadline = rotatingHeadlines[headlineIndex];
    const typingSpeed = isDeleting ? 45 : 90;
    let timeoutId;

    if (!isDeleting && typedText === currentHeadline) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1150);
    } else if (isDeleting && typedText === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setHeadlineIndex((prev) => (prev + 1) % rotatingHeadlines.length);
      }, 380);
    } else {
      timeoutId = setTimeout(() => {
        const nextLength = typedText.length + (isDeleting ? -1 : 1);
        setTypedText(currentHeadline.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, headlineIndex]);

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/15mAm6KVqK/",
      icon: FaFacebookF,
      label: "Facebook",
    },
    { href: "https://github.com/fedaaamin", icon: FaGithub, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/fedaa-amin-1b7806218",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "https://www.behance.net/fedaaamin",
      icon: FaBehance,
      label: "Behance",
    },
  ];

  return (
    <div className="home pb-5" id="home">
      <div className="home-ambient" aria-hidden="true">
        <span className="blob blob-one"></span>
        <span className="blob blob-two"></span>
        <span className="blob blob-three"></span>
      </div>
      <div className="container">
        <div className="row align-items-center hero-row">
          <div className="col-lg-6 col-md-6 col-sm-12 pt-5 mt-5 order-lg-first order-md-first order-last">
            <div className="landing mt-lg-5">
              <span className="hero-eyebrow intro-reveal reveal-1">
                Flutter Developer & UI Designer
              </span>
              <h1 className="hero-title intro-reveal reveal-2">
                <span className="typed-text">{typedText}</span>
                <span className="typed-cursor">|</span>
              </h1>

              <h4 className="hero-description mt-3 intro-reveal reveal-3">
                I build fast, user-focused mobile apps with clean architecture
                and polished design to deliver smooth and reliable user
                experiences.
              </h4>

              <div className="hero-tags mt-4 intro-reveal reveal-4">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Firebase</span>
                <span>UI/UX</span>
              </div>
              <div className="hero-stats mt-4 intro-reveal reveal-5">
                <div className="stat-item">
                  <strong>10+</strong>
                  <span>Projects</span>
                </div>
                <div className="stat-item">
                  <strong>2+</strong>
                  <span>Years Practice</span>
                </div>
                <div className="stat-item">
                  <strong>100%</strong>
                  <span>Client Focus</span>
                </div>
              </div>

              <div className="cta-group mt-5 d-flex justify-content-center justify-content-lg-start align-items-center gap-3 flex-wrap intro-reveal reveal-6">
                <a
                  className="download-btn"
                  href={file}
                  download="Fedaa_Amin_CV">
                  <FaDownload className="me-2" />
                  Download CV
                </a>
                <a className="secondary-btn" href="#contact">
                  Let's Talk
                </a>
              </div>

              <div className="social mt-4 text-lg-start text-md-start text-center intro-reveal reveal-7">
                {socialLinks.map(({ href, icon: Icon, label }, index) => (
                  <a
                    key={index}
                    className="social-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}>
                    <Icon className="icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-center pt-5 mt-5">
            <div className="hero-visual mt-4 intro-scale-in">
              <div className="bg-img">
                <img
                  className="img-fluid"
                  loading="lazy"
                  src={image}
                  alt="Fedaa Amin"
                />
              </div>
              <div className="hero-badge hero-badge-top">
                Available for freelance
              </div>
              <div className="hero-badge hero-badge-bottom">
                Design + Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
