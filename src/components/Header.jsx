import Logo from "./Logo_small";
import CartIcon from "./CartIcon";
import user from "../assets/icons/user.png";
import { NavLink } from "react-router-dom";

const headerNav = [
  { text: "Home", path: "/" },
  { text: "Products", path: "/products" },
  { text: "Categories", path: "/categories" },
  { text: "Custom", path: "/custom" },
  { text: "Blog", path: "/blog" },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-24 header flex justify-center items-center border-header z-50">
      <nav className="w-full xl:w-[80%] flex items-center justify-between">
        <Logo />
        <ul className="flex [&>*]:mx-16 text-[1.8rem] font-medium justify-evenly">
          {headerNav.map((item) => (
            <li key={item.path}>
              <NavLink
                className={({isActive}) =>isActive ? "active px-4 py-1 rounded-lg flex justify-center items-center" : ""
                }
                to={item.path}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-8">
          <CartIcon />
          <img className="shrink-0" src={user} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
