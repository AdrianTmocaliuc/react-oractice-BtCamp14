import style from "./textContent.module.css";
const TextContent = ({ textContent, capsLock }) => {
  return (
    <div className={style.wrapper}>
      <img
        className={style.imgStyle}
        src={textContent.url}
        alt={textContent.name}
      />
      <p className={capsLock ? style.upper : style.lower}>{textContent.name}</p>
    </div>
  );
};

export default TextContent;
