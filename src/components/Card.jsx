function Card(props) {
    return (
      <div className="card">
        <img src={props.img} alt="" />
        <h4>{props.title}</h4>
        <p>{props.p}</p>
      </div>
    );
  }
  
  export default Card;
  