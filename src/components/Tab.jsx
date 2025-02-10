function Tab({ b, p, i }) {
  return (
    <li>
      <div className="text">
        <h4>{b}</h4>
        <small>{p}</small>
      </div>
      <span>
        <img src={i} alt="" />
      </span>{" "}
    </li>
  );
}

export default Tab;
