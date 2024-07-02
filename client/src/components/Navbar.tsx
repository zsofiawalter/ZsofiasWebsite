import { Link } from "react-router-dom"
import LogoGreen from "../assets/LogoGreen.png"

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <span className="left">
                    <Link to="/">
                        <img src={LogoGreen} alt="Green Logo of ZRW Initials" height="12px"/>
                        <p className="navbar-title">Zsofia Walter</p>
                    </Link>
                </span>
                <span className="right">
                    <Link to="/cv">
                        <p className="navbar-item">CV</p>
                    </Link>
                    <Link to="/projects">
                        <p className="navbar-item">Projects</p>
                    </Link>
                    <Link to="/art">
                        <p className="navbar-item">Art</p>
                    </Link>
                    <Link to="/travel">
                        <p className="navbar-item">Travel</p>
                    </Link>
                </span>
            </div>
        </header>
    )
}

export default Navbar