import ecommerce from "../videos/ecommerce.mp4";
import ActiveLife from "../videos/active-life.mp4";
import Academia from "../videos/Academia.mp4";
import WalkMate from "../videos/walk-mate.mp4";

function Projects() {
  const projects = [
    {
      num: 1,
      id: "home",
      buttonTitle: "E-Commerce App",
      title: "E-Commerce App",
      description: `Developed a full-featured e-commerce mobile app using Flutter.
    The app includes user authentication, product browsing, a shopping cart, and order management.`,
      subDescription: `Integrated with APIs for real-time data and payment processing.
    Focused on responsive design and smooth user experience.`,
      video: ecommerce,
    },
    {
      num: 2,
      id: "profile",
      buttonTitle: "Active Life",
      title: "Active Life",
      description: `Developed a fitness mobile application as a graduation project using Flutter.`,
      subDescription: `Implemented calorie calculations, meal plans, and RESTful APIs.`,
      video: ActiveLife,
    },
    {
      num: 3,
      id: "contact",
      buttonTitle: "Academia",
      title: "Academia",
      description: `AI-powered classroom management app using facial recognition.`,
      subDescription: `Allows attendance tracking, quizzes, reports, and lecture uploads.`,
      video: Academia,
    },
    {
      num: 4,
      id: "WalkMate",
      buttonTitle: "Walk Mate",
      title: "Walk Mate",
      description: `A step counter application that tracks daily walking activity and helps users stay active.`,
      subDescription: `Provides real-time step tracking with a simple and user-friendly interface.`,
      video: WalkMate,
    },
  ];
  return (
    <>
      <div
        className="projects pt-5 mt-5"
        id="projects"
        data-aos="fade-up">
        <div className="container text-center">
          <div className="row mb-5">
            <h1 className="main-btn mb-5" data-aos="zoom-in-up">
              My Projects
            </h1>

            <ul
              className="nav nav-pills project-tabs mb-4 justify-content-center mt-4"
              id="pills-tab"
              role="tablist"
              data-aos="fade-up"
              data-aos-delay="80">
              {projects.map((project, index) => (
                <li className="nav-item" role="presentation" key={project.num}>
                  <button
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    data-bs-toggle="pill"
                    data-bs-target={`#pills-${project.id}`}
                    type="button">
                    {project.buttonTitle}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-container">
              <div className="tab-content" id="pills-tabContent">
                {projects.map((project, index) => (
                  <div
                    key={project.num}
                    className={`tab-pane fade ${
                      index === 0 ? "show active" : ""
                    }`}
                    id={`pills-${project.id}`}>
                    <div
                      className="row project-shell align-items-center"
                      data-aos="fade-up"
                      data-aos-delay="120">
                      <div className="col-lg-6 col-md-6 col-sm-12 order-last order-md-first">
                        <div
                          className="project-info p-lg-5 text-start position-relative"
                          data-aos="fade-right"
                          data-aos-delay="140"
                        >
                          <span className="project-kicker">
                            Featured Project {project.num}
                          </span>
                          <h1 className="mt-3">{project.title}</h1>
                          <p className="mt-4">{project.description}</p>
                          <p className="mt-3">{project.subDescription}</p>
                          <div className="project-meta mt-4">
                            <span>Flutter</span>
                            <span>Clean UI</span>
                            <span>Production Ready</span>
                          </div>
                          <div className="line position-absolute"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="video" data-aos="fade-left" data-aos-delay="180">
                          <video
                            className="video-inside-phone"
                            src={project.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
