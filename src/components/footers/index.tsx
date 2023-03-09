import React from 'react'
import { baseUrl } from '../../helpers/baseUrl'

const Footers = () => {
  return (
    <div className='max-w-[1200px] m-auto px-4 md:px-0'>
      <div className='flex flex-col md:flex-row py-[84.81px] space-y-8 md:space-y-0 md:space-x-[84px]'>
        <div className='gap-4 font-bold text-[32px] leading-[48px] whitespace-nowrap'>
          <h1>TLab Amazing</h1>
          <h1>Delivering Innovation</h1>
          <div className='flex space-x-5 mt-[24.39px] mb-[39.42px]'>
            <img src={baseUrl(`/icon/Facebook.svg`)} className='w-6 h-6 object-contain' />
            <img src={baseUrl(`/icon/Instagram.svg`)} className='w-6 h-6 object-contain' />
            <img src={baseUrl(`/icon/YouTube.svg`)} className='w-6 h-6 object-contain' />
          </div>
          <h2 className='text-[11px] leading-[19.85px] font-normal'>2010 - 2021 © TLab. All rights reserved.</h2>
        </div>
        <div className='flex flex-wrap md:flex-nowrap gap-10 md:gap-0 md:space-x-[112px] w-full'>
          <div className='space-y-8'>
            <h1 className='text-[14px] leading-[25.27px] font-bold opacity-50'>Company</h1>
            <div className='text-[16px] leading-[44.32px]'>
              <h2>About</h2>
              <h2>Career</h2>
              <h2>Clients</h2>
              <h2>logo</h2>
              <h2>brand Identity</h2>
              <h2>Article</h2>
              <h2>Studi kasus</h2>
              <h2>Kontak</h2>
            </div>
          </div>
          <div className='space-y-8'>
            <h1 className='text-[14px] leading-[25.27px] font-bold opacity-50'>Layanan</h1>
            <div className='text-[16px] leading-[44.32px]'>
              <h2>IT managed Services</h2>
              <h2>IT Consultant</h2>
              <h2>IT Training</h2>
              <h2>Big Data</h2>
              <h2>Atrificial intelegent</h2>
              <h2>Cloud Computing</h2>
              <h2>Internet Of Things</h2>
              <h2>Web Development</h2>
              <h2>Mobile App Development</h2>
              <h2>System Integration</h2>
              <h2>System Information</h2>
            </div>
          </div>
          <div className='space-y-8 max-w-[244px]'>
            <h1 className='text-[14px] leading-[25.27px] font-bold opacity-50'>Kontak</h1>
            <div className='space-y-8 text-[16px] leading-[44.32px]'>
              <div className='font-bold'>
                <h1>PT. Teknologi Kode Indonesia</h1>
                <h1 className='hover:cursor-pointer'>contact@tlab.co.id</h1>
              </div>
              <div>
                <h2>Head Office</h2>
                <h2>
                  Jl Tanjung No.126, Sorosutan,
                  Umbulharjo,
                  Yogyakarta - 55162
                </h2>
                <div className='flex space-x-2 items-center'>
                  <img src={baseUrl(`/icon/phone.svg`)} className='w-6 h-6 object-contain' />
                  <h2>(0274) - 2870394</h2>
                </div>
              </div>
              <div>
                <h2>Jakarta Office</h2>
                <h2>
                  SOHO Pancoran Unit S-1210
                  Jl. Let. Jend. MT. Haryono Kav 2-3
                  Pancoran,
                  Jakarta Selatan 12810
                </h2>
                <div className='flex space-x-2 items-center'>
                  <img src={baseUrl(`/icon/phone.svg`)} className='w-6 h-6 object-contain' />
                  <h2>(0274) - 2870394</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div >
  )
}

export default Footers