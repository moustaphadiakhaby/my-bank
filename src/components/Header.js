import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <User username="Moustapha" />
      </div>
    </header>
  );
};

export default Header;
