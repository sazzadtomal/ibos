import React from 'react'

const FooterList = ({header,items}) => {
  return (
    <div className="text-[1.8rem]">
                <h3 className="text-white font-semibold ">{header}</h3>
                <ul className="text-[#81859F]">
                  {items.map((item)=><li key={item}>{item}</li>)}
                </ul>
            </div>
  )
}

export default FooterList