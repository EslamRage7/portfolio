function About() {
  const jobData = [
    {
      id: 1,
      title: "Education",
      duration: "Oct 2020 - Jul 2024",
      description:
        "Graduated from MET Academy with a B.Sc. in Computer Science.Achieved a very good grade with strong academic performance insoftware development.",
    },
    {
      id: 2,
      title: "Intern at Bayanat",
      duration: "Sept 2022 - Dec 2022",
      description:
        "Worked as an intern where I contributed to several development projects and gained valuable experience in flutter technologies.",
    },
    {
      id: 3,
      title: "Intern at Orange",
      duration: "jan 2025 - Mar 2025",
      description:
        "Gained hands-on experience in software engineering and worked with a team on large-scale enterprise projects.",
    },
    {
      id: 4,
      title: "Freelance Developer",
      duration: "Jan 2024 - Present",
      description:
        "As a freelancer, I have worked on various projects, building custom Flutter applications for clients using the latest flutter technologies.",
    },
    {
      id: 5,
      title: "IT Support",
      duration: "Present",
      description:
        "Troubleshooting hardware/software issues, OS installation & configuration, basic networking (IP, DNS, DHCP), user account management, printer/peripherals setup, remote technical support.",
    },
    {
      id: 6,
      title: "Programming Instructor",
      duration: "Present",
      description:
        "Teaching programming fundamentals, problem-solving skills, and coding logic, delivering hands-on practical sessions, guiding students through real-world examples, and supporting learners during exercises and projects.",
    },
  ];

  return (
    <>
      <div
        className="about about-section-wrap pt-5 mt-5"
        id="about"
        data-aos="fade-up">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <h1 className="main-btn text-center mb-5" data-aos="zoom-in-up">
              About Me
            </h1>

            <div className="experience mt-4" data-aos="fade-up" data-aos-delay="80">
              {jobData.map((e, index) => (
                <article
                  key={e.id}
                  className="job"
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 70, 350)}>
                  <div className="job-title">
                    <h3>{e.title}</h3>
                    <span className="job-duration">{e.duration}</span>
                  </div>
                  <p className="job-description">{e.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
