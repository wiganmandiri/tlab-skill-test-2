import React from 'react'

const Footers = () => {
  return (
    <div className='max-w-[1200px] m-auto'>
      <div className='flex py-[84.81px] space-x-[84px]'>
        <div className='gap-4 font-bold text-[32px] leading-[48px] whitespace-nowrap'>
          <div>TLab Amazing</div>
          <div>Delivering Innovation</div>
          <div>Icon</div>
          <div className='text-[11px] leading-[19.85px] font-normal'>2010 - 2021 © TLab. All rights reserved.</div>
        </div>
        <div className='flex space-x-[112px] w-full'>
          <div className='space-y-8'>
            <div className='text-[14px] leading-[25.27px] font-bold opacity-50'>Company</div>
            <div className='text-[16px] leading-[44.32px]'>
              <p>About</p>
              <p>Career</p>
              <p>Clients</p>
              <p>logo</p>
              <p>brand Identity</p>
              <p>Article</p>
              <p>Studi kasus</p>
              <p>Kontak</p>
            </div>
          </div>
          <div className='space-y-8'>
            <div className='text-[14px] leading-[25.27px] font-bold opacity-50'>Layanan</div>
            <div className='text-[16px] leading-[44.32px]'>
              <p>IT managed Services</p>
              <p>IT Consultant</p>
              <p>IT Training</p>
              <p>Big Data</p>
              <p>Atrificial intelegent</p>
              <p>Cloud Computing</p>
              <p>Internet Of Things</p>
              <p>Web Development</p>
              <p>Mobile App Development</p>
              <p>System Integration</p>
              <p>System Information</p>
            </div>
          </div>
          <div className='space-y-8 max-w-[244px]'>
            <div className='text-[14px] leading-[25.27px] font-bold opacity-50'>Kontak</div>
            <div className='space-y-8 text-[16px] leading-[44.32px]'>
              <div className='font-bold'>
                <p>PT. Teknologi Kode Indonesia</p>
                <p>contact@tlab.co.id</p>
              </div>
              <div>
                <p>Head Office</p>
                <p>
                  Jl Tanjung No.126, Sorosutan,
                  Umbulharjo,
                  Yogyakarta - 55162
                </p>
                <div>(0274) - 2870394</div>
              </div>
              <div>
                <p>Jakarta Office</p>
                <p>
                  SOHO Pancoran Unit S-1210
                  Jl. Let. Jend. MT. Haryono Kav 2-3
                  Pancoran,
                  Jakarta Selatan 12810
                </p>
                <div>(0274) - 2870394</div>
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