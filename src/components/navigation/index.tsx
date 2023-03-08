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
    id: 1,
    name: 'Layanan',
    url: '/layanan'
  },
  {
    id: 1,
    name: 'Studi Kasus',
    url: '/studi-kasus'
  },
  {
    id: 1,
    name: 'Data Center',
    url: '/data-center'
  },
]

const Navigation = () => {
  return (
    <div className='flex items-center h-[48px] bg-blue-200 mt-[23px]'>
      <img src={LogoTlab} alt="" className="w-[140px] h-[40px] object-contain mr-[64px]" />
      <div className='w-full space-x-8'>
        {
          _.map(data, (index: Headers, key: number) => (
            <NavLink key={key} to={index?.url}>{index?.name}</NavLink>
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