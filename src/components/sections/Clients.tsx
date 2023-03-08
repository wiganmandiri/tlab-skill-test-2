import _ from 'lodash'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Rectanggle from '../../assets/content/Rectangle-51.svg'

const Clients = () => {
  return (
    <div className='mt-[100px]'>
      <img src={Rectanggle} className='w-full object-fill' />
      <div className='bg-[#049CFB] bg-opacity-5'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex justify-between'>
            <div>Connect & Collaborate</div>
            <div>
              <p>Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan produk terbaik</p>
              <NavLink to={"/"} className='whitespace-nowrap text-[16px] font-bold leading-[28.88px] text-[#5449D6]'>Lihat Semua partner TLab</NavLink>
            </div>
          </div>
          <div className='flex justify-between gap-[32px] -pb-24'>
            <div className='rounded bg-[#049CFB] w-full min-h-[400px]'></div>
            <div className='rounded bg-[#049CFB] w-full min-h-[400px]'></div>
            <div className='rounded bg-[#049CFB] w-full min-h-[400px]'></div>
          </div>
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto flex my-8 flex-wrap justify-center gap-6'>
        {
          _.map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], index => (
            <img src={''} className='bg-red-400 w-40 h-20' />
          ))
        }
      </div>
    </div>
  )
}

export default Clients