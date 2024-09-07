import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdVisibility } from "react-icons/md";

const PassowordElement = ({value,onChange,showPwd,setShowPwd}) => {
  return (
    <div className="flex bg-white items-center border rounded-[5px] overflow-hidden px-4 py-2">
    <div className="flex-grow">
      <label htmlFor="password" className="block muted text-[1.2rem]">
        Password
      </label>
      <input
        id="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full flex-grow outline-none text-[1.4rem]"
        type={showPwd ? "text" : "password"}
      />
    </div>
    <div className="text-3xl muted" onClick={() => setShowPwd(!showPwd)}>
      {showPwd ? <MdOutlineVisibilityOff /> : <MdVisibility />}
    </div>
  </div>
  )
}

export default PassowordElement