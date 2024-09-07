import React from 'react'

const Logo = ({variant}) => {

  return (
    <h1 className={`${variant==="white" ? "text-white" : "text-black "} font-bold text-[4rem] leading-[4.8rem] `}>Furni<span className='font-bold text-[4rem] logo-accent'>Flex</span></h1>
  )
}

export default Logo