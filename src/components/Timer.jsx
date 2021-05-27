import "../styles.css";

const Timer = (props) => {
  return (
    <div className="box">
      <span>{props.time.hour} : </span>
      <span>{props.time.minute} : </span>
      <span>{props.time.second} : </span>
      <span>{props.time.mlsec}</span>
    </div>
  );
};
export default Timer;
