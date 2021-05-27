const Action = ({ reset, start, stop }) => {
  return (
    <div>
      <button onClick={reset}>reset</button>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
};
export default Action;
