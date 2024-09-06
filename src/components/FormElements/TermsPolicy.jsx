const TermsPolicy = ({value,onChange}) => {
  return (
    <div className="flex gap-2">
          <input id="terms" type="checkbox" checked={value} onChange={()=>onChange(!value)} />
          <label htmlFor="terms" className="font-medium text-[1.4rem]">
            I agree to the{" "}
            <a href="" className="underline">
              Terms & Policy
            </a>
          </label>
        </div>
  )
}

export default TermsPolicy