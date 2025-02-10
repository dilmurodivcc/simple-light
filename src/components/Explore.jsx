import explore from "../assets/img/explore.svg";
import icon1 from "../assets/icon/icon1.svg";
import Tab from "./Tab";
function Explore() {
  return (
    <section className="explore">
      <div className="container">
        <h2>Explore the solutions</h2>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p>
        <div className="content">
          <div className="left">
            <h3>Powerful suite of tools</h3>
            <h5>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa.
            </h5>
            <ul>
              <Tab
                b="Building the Simple ecosystem"
                p="Take collaboration to the next level with security and administrative features built for teams."
                i={icon1}
              />
              <Tab
                b="Building the Simple ecosystem"
                p="Take collaboration to the next level with security and administrative features built for teams."
                i={icon1}
              />
              <Tab
                b="Building the Simple ecosystem"
                p="Take collaboration to the next level with security and administrative features built for teams."
                i={icon1}
              />

            </ul>
          </div>
          <div className="right">
            <img src={explore} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
