

const FormInput = ({id,label,type,value,onChange}) => {
  return (
    <div className="bg-white w-full border-input rounded-[5px] overflow-hidden px-[1rem] py-[0.5rem]">
              <label htmlFor={id}  className="block muted text-[1.2rem]">
                {label}
              </label>
              <input
                id={id}
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                className="w-full outline-none text-[1.4rem]"
                type={type}
              />

    </div>
  )
}

export default FormInput