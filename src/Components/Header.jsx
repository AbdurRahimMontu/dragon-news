import logo from "../assets/logo.png";
import DateTime from "./DateTime";

const Header = () => {
  return (
    <div className="flex flex-col items-center py-5 border">
      <img src={logo} alt="" />
      <h3>Journalism Without Fear of Favour</h3>
      <DateTime></DateTime>
    </div>
  );
};

export default Header;
