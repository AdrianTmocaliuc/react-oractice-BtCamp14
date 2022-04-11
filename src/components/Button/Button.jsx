import s from "./Button.module.css";

const Button = (props) => {
  const { type, name, clickHandler, icon, isActive = false } = props;
  return (
    <button
      className={s.button}
      type={type}
      onClick={clickHandler}
      disabled={isActive}
    >
      {icon ? <span className={s.icon}>{icon}</span> : null}
      {name}
    </button>
  );
};

export default Button;
