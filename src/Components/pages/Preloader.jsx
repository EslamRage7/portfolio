import image from "../images/logo.png";

function Preloader({ isLeaving = false }) {
  return (
    <div
      className={`preloader-overlay ${isLeaving ? "is-leaving" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className="preloader-card">
        <div className="preloader-ring">
          <img src={image} alt="Loading" className="preloader-logo" />
        </div>
        <h2 className="preloader-title">Preparing Something Great...</h2>
        <div className="preloader-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
