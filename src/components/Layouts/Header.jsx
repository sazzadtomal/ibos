import Logo from "../Logo/Logo_small";
import CartIcon from "../Cart/CartIcon";
import user from "../../assets/icons/user.png";
import { NavLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const headerNav = [
  { text: "Home", path: "/" },
  { text: "Products", path: "/products" },
  { text: "Categories", path: "/categories" },
  { text: "Custom", path: "/custom" },
  { text: "Blog", path: "/blog" },
];

const Header = () => {
  const {auth} = useAuth();
  const logout=useLogout()
  const navigate = useNavigate();
  const {clearCart}=useCart()

  const signOut = async () => {
    await logout();
    clearCart()
    navigate("/user_management/login");
}

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
          <img className="shrink-0" src={user} alt="user" />
          {auth?.accessToken &&  <div onClick={()=>signOut()} className="text-[1.4rem] cursor-pointer font-medium">Logout</div>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
