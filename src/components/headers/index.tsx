import React from 'react'
import Openess from '../../assets/content/Openess.svg'

const HeaderHero = () => {
  return (
    <div className='mt-[120px] md:mt-[88px] mb-[100px] flex flex-col items-center space-y-[32px] text-center'>
      <h1 className='text-[25px] md:text-[48px] max-w-[850px] font-bold leading-[42px] md:leading-[72px]'>
        Dapatkan solusi digital terbaik untuk mengembangkan bisnis Anda
      </h1>
      <h2 className='md:text-[24px] max-w-[780px] font-normal md:leading-[36px]'>
        Jadikan bisnis semakin berkembang dengan pemilihan teknologi yang tepat dan andal
      </h2>
      <img src={Openess} alt="" className="w-fit md:h-[533px] object-contain" />
    </div>
  )
}

export default HeaderHero