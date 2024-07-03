import { Link } from "react-router-dom";
import LogoGreen from "../assets/LogoGreen.png";

function Logo() {
    return (
        <Link to="/">
            <img
                src={LogoGreen}
                alt="Green Logo of ZRW Initials"
                height="12px"
            />
            <p className="navbar-title">Zsofia Walter</p>
        </Link>
    );
}

export default Logo;
