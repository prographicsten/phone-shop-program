import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-4 shadow-lg">
                <Logo></Logo>
                <ul className="flex items-center gap-4 md:gap-7">
                    <li>
                        <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                        >
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                        >
                        Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                        >
                        Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;