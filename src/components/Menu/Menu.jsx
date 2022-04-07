import MenuItem from "components/MenuItem/MenuItem";
import s from "./Menu.module.css";

const Menu = ({ items = [] }) => {
  return (
    <>
      <ul className={s.list}>
        {items.map((item) => (
          <MenuItem key={item.id} textContent={item} />
        ))}
      </ul>
    </>
  );
};

export default Menu;
