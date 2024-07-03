import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

function Navbar() {
    return (
        <header>
            <div className="navbar">
                <span className="left">
                    <Logo />
                </span>
                <span className="right">
                    <NavbarItem name="CV" ext="cv" />
                </span>
            </div>
        </header>
    );
}

export default Navbar;
