import Card from "./Card";

// Images of cards
import img1 from "../assets/icon/icon-1.svg";
import img2 from "../assets/icon/icon 2.svg";
import img3 from "../assets/icon/icon-3.svg";
import img4 from "../assets/icon/icon-4.svg";
import img5 from "../assets/icon/icon-5.svg";
import img6 from "../assets/icon/icon-6.svg";

function Cards() {
  let data = [
    {
      id: 1,
      img: img1,
      title: "Initial Contact",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: img6,
      title: "Discovery Session",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      img: img4,
      title: "Contracting",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      img: img2,
      title: "Fast Prototyping",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      img: img3,
      title: "Design Phase",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      img: img5,
      title: "Develop & Launch",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="simple">
      <div className="overlay"></div>

    <div className="container">
    <h2>How Simple works</h2>
      <h5>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat <br /> nulla pariatur excepteur sint occaecat
        cupidatat.
      </h5>
      <div className="cards">
        {data.map((item) => (
          <Card key={item.id} img={item.img} title={item.title} p={item.p} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Cards;
