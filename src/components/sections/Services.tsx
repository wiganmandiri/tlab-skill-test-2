import React from 'react'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <div className='flex gap-[35px] items-end max-w-[1200px] m-auto'>
      <div className='w-3/5 gap-[64px] flex flex-col'>
        <div className='flex flex-col space-y-[16px]'>
          <div className='text-[32px] font-bold leading-[48px] max-w-[480.99px]'>
            Rangkaian Proyek
            Menarik TLab
          </div>
          <div className='text-[18px] font-normal leading-[32.04px] max-w-[607px]'>
            Integritas dan kreativitas menjadi kunci dalam membangun produk digital terbaik untuk bisnis Anda
          </div>
          <NavLink to={"/"} className='whitespace-nowrap text-[16px] font-bold leading-[28.88px] text-[#5449D6]'>Lihat Semua Layanan TLab</NavLink>
        </div>
        <div className='bg-blue-300 h-[457px] relative rounded-[8px] overflow-hidden'>
          <div className='bg-white absolute bottom-0 top-[52.34%] right-[34.85%] left-0 rounded-tr-[8px] p-[24px]'>
            <div className='flex flex-col justify-center h-full gap-2'>
              <div className='font-bold leading-[180.5%] text-[14px]'>IT Managed Services</div>
              <div className='font-bold leading-[150%] text-[24px] max-w-[332px]'>kesan.id - Kedaulatan Santri dan Kepribadian Muslim</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/5 flex flex-col gap-[32px] h-full justify-end'>
        <div className='bg-blue-300 h-[321px] relative rounded-[8px] overflow-hidden'>
          <div className='bg-white absolute bottom-0 top-[52.34%] right-[34.85%] left-0 rounded-tr-[8px] p-[24px]'>
            <div className='flex flex-col justify-center h-full gap-2'>
              <div className='font-bold leading-[180.5%] text-[14px]'>Appliaction Development</div>
              <div className='font-bold leading-[150%] text-[24px] max-w-[332px]'>Anterin.id Ridesharing company</div>
            </div>
          </div>
        </div>
        <div className='bg-blue-300 h-[321px] relative rounded-[8px] overflow-hidden'>
          <div className='bg-white absolute bottom-0 top-[52.34%] right-[34.85%] left-0 rounded-tr-[8px] p-[24px]'>
            <div className='flex flex-col justify-center h-full gap-2'>
              <div className='font-bold leading-[180.5%] text-[14px]'>Artificial intelligence</div>
              <div className='font-bold leading-[150%] text-[24px] max-w-[332px]'>Juru.id Smart Parking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services