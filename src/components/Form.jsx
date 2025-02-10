import img from "../assets/img/form-oval.svg";

function Form() {
  return (
    <div className="start">
      <div className="content">
        <h2>Powering your business</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit nemo <br />
          expedita voluptas culpa sapiente.
        </p>
        <form>
          <input type="email" placeholder="Your email" />
          <button className="primary">Start free trial</button>
        </form>
      </div>
      <img className="oval" src={img} alt="" />
    </div>
  );
}

export default Form;
