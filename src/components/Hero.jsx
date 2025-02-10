import Video from "./Video";
function Hero() {
  return (
    <>
      <section className="hero">
        <h1>
          Make your website
          <span> wonderful</span>
        </h1>
        <p>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="btns">
          <button className="primary">Start free trial</button>
          <button className="secondary">Learn more</button>
        </div>
      
        <Video />
      </section>
    </>
  );
}

export default Hero;
