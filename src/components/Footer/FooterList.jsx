import React from 'react'

const FooterList = ({header,items}) => {
  return (
    <div className=" text-[1.2rem] md:text-[1.8rem]">
                <h3 className="text-white font-semibold mb-4">{header}</h3>
                <ul>
                  {items.map((item)=><li key={item}>{item}</li>)}
                </ul>
            </div>
  )
}

export default FooterList