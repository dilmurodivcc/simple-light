import img from "../assets/img/illustration.svg";

function Video() {
  return (
    <>
      <div className="video">
        <img src={img} alt="" />
        <button className="play">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="11" stroke="#999999" stroke-width="2" />
            <path d="M10 17L16 12L10 7V17Z" fill="#999999" />
          </svg>
          Watch the full video (2 min)
        </button>
      </div>
    </>
  );
}

export default Video;
