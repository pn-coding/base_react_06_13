import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/sub01"}>menu1</Link>
      <Link to={"/sub02"}>menu2</Link>
    </div>
  );
};
