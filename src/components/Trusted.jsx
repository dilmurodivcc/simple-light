import facebook from "../assets/icon/face.svg";
import tinder from "../assets/icon/tin.svg";
import airbnb from "../assets/icon/air.svg";
import hubspot from "../assets/icon/hub.svg";
import amazon from "../assets/icon/amazon.svg";
import caard from "../assets/img/Testimonial.svg"
function Trusted() {
  return (
    <div className="trusted">
      <div className="header">
        <h2>Trusted by over 20,000 companies <br /> all over the world</h2>
        <h5>
          Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar
          mattis <br /> blandit libero cursus mattis.
        </h5>
      </div>
      <div className="logos">
        <img src={facebook} alt="" />
        <img src={tinder} alt="" />
        <img src={airbnb} alt="" />
        <img src={hubspot} alt="" />
        <img src={amazon} alt="" />
      </div>
      <img src={caard} alt="" />

    </div>
  );
}

export default Trusted;
