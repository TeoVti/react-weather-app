function LeftSideComponent(props) {
  const d = new Date();
  const date = d.toDateString();
  return (
    <div className="left">
      <div className="btm">
        <p className="temp">{props.temp ? props.temp + '°' : ''}</p>
        <div className="city-date">
          <p className="city">{props.city}</p>
          <p className="date">{props.description ? date : ''}</p>
        </div>
        <div className="dai">
          <p className="description">{props.description}</p>
          <div className={props.description} />
        </div>
      </div>
    </div>
  );
}

export default LeftSideComponent;
