import "./index.css";

const Button = ({ textButton, send }) => {
  // Todo el JS para el component aca antes del render.
  // state, useEffect, JS puro.

  return (
    <div>
      <div className="button">algo {textButton}</div>
      <button onClick={send}>Presionate</button>
    </div>
  );
};

export default Button;
