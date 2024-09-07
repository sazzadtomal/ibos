import { Outlet } from "react-router-dom";
import icon from "../../assets/icons/icon.png";
import Logo from "../Logo/Logo_big"

const UserManagement = () => {
  return (
    <div className="flex h-screen w-screen ">
      <div className="flex justify-center items-center w-full lg:basis-1/2 lg:max-w-[50%]">
        <Outlet />
      </div>
      <div className="hidden lg:flex basis-1/2 max-w-[50%] user-management-background  justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 text-[1.6rem] text-white 2xl:mx-[22rem]">
          <img src={icon} alt="icon" />
          <Logo variant="white"/>
          <p className="text-center ">
            Discover a seamless shopping experience with our curated collection of
            products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
