import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoTlab from '../../assets/logo/brand_logo.svg'
import _ from 'lodash'
import Hamburger from '../hamburger'

type Headers = {
  id: number
  name: string
  url: string
}

const data: Headers[] = [
  {
    id: 1,
    name: 'Company',
    url: '/'
  },
  {
    id: 2,
    name: 'Layanan',
    url: '/layanan'
  },
  {
    id: 3,
    name: 'Studi Kasus',
    url: '/studi-kasus'
  },
  {
    id: 4,
    name: 'Data Center',
    url: '/data-center'
  },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex bg-white items-center justify-end md:justify-start h-fit shadow md:shadow-none md:h-[48px] md:mt-[23px] py-4 md:py-0 px-6 md:px-0 fixed md:relative inset-0 z-20'>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} className='' />
      <div className={`absolute inset-0 md:invisible w-full h-screen transform ${!isOpen ? '-translate-x-full' : ''} md:translate-x-0 transition-transform duration-50 ease-in bg-white`}>
        <div className='flex flex-col h-full gap-9 text-2xl justify-center items-center'>
          {_.map(data, (index: Headers, key: number) => (
            <NavLink key={key} to={index?.url}><h2>{index?.name}</h2></NavLink>
          ))}
        </div>
      </div>
      <img src={LogoTlab} alt="" className="w-[140px] h-[30px] md:h-[40px] z-20 object-contain mr-[30px] md:mr-[64px]" />
      <div className='w-0 md:w-full space-x-8 flex invisible md:visible'>
        {
          _.map(data, (index: Headers, key: number) => (
            <NavLink key={key} to={index?.url}><h2>{index?.name}</h2></NavLink>
          ))
        }
      </div>
      <button className='w-fit z-20 text-white px-[24px] py-[9.5px] whitespace-nowrap bg-[#00DE9C] rounded-[100px]'>
        Hubungi Kami
      </button>
    </div>
  )
}

export default Navigation