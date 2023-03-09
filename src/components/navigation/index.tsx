import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoTlab from '../../assets/logo/brand_logo.svg'
import _ from 'lodash'

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
  return (
    <div className='flex items-center h-[48px] mt-[23px]'>
      <img src={LogoTlab} alt="" className="w-[140px] h-[40px] object-contain mr-[64px]" />
      <div className='w-full space-x-8 flex'>
        {
          _.map(data, (index: Headers, key: number) => (
            <NavLink key={key} to={index?.url}><h2>{index?.name}</h2></NavLink>
          ))
        }
      </div>
      <button className='w-fit text-white px-[24px] py-[9.5px] whitespace-nowrap bg-[#00DE9C] rounded-[100px]'>
        Hubungi Kami
      </button>
    </div>
  )
}

export default Navigation