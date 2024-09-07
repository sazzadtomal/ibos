import icon from "../../assets/icons/icon.png"

const Logo = ({variant}) => {

  return (
    <div className="flex items-center gap-1">
         <img className=" w-8 h-8 md:w-12  md:h-12 " src={icon} alt="icon" />
        <div className={`${variant==="white" ? "text-white" : "text-black "} font-bold text-[1.4rem] lg:text-[2rem] leading-[4.8rem] `}>Furni<span className='font-bold text-[1.4rem] lg:text-[2rem] logo-accent'>Flex</span></div>
    </div>
  )
}

export default Logo