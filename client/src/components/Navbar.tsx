import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <span className="left">
          <Logo />
        </span>
        <span className="right">
          <NavbarItem name="CV" ext="cv" />
          <NavbarItem name="Travels" ext="travels" />
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
