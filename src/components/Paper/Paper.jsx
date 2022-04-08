import s from "./Paper.module.css";

const Paper = ({ children, height }) => {
  return (
    <div
      className={s.wrapper}
      style={
        height
          ? {
              height: `${height}px`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default Paper;
