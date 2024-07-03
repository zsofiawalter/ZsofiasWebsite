import { Link } from "react-router-dom";

function NavbarItem({ name, ext }: { name: string; ext: string }) {
    return (
        <Link to={"/" + ext}>
            <p className="navbar-item">{name}</p>
        </Link>
    );
}

export default NavbarItem;
