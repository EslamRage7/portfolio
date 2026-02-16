import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiFigma,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

function Skills() {
  const devSkills = [
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiDart, name: "Dart", color: "#0175C2" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiPostman, name: "Postman", color: "#EF5B25" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", color: "#181717" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" },
    { icon: SiAdobeillustrator, name: "Illustrator", color: "#FF9A00" },
    { icon: SiCanva, name: "Canva", color: "#00C4CC" },
  ];

  return (
    <>
      <div
        className="skills-section-wrap pt-5 mt-5"
        id="skills"
        data-aos="fade-up">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <h1 className="main-btn text-center mb-5" data-aos="zoom-in-up">
              My Skills
            </h1>

            <div className="skills-grid" data-aos="fade-up" data-aos-delay="80">
              {devSkills.map((skill, index) => (
                <article
                  key={index}
                  className="skill-card text-center"
                  data-aos="zoom-in"
                  data-aos-delay={Math.min(index * 45, 260)}
                  style={{
                    "--skill-color": skill.color,
                    "--skill-delay": `${index * 70}ms`,
                  }}>
                  <div className="skill-icon-wrap">
                    <skill.icon className="tech-icon" />
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
