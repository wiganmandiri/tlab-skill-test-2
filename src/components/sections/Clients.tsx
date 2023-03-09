import _ from 'lodash'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Rectanggle from '../../assets/content/Rectangle-51.svg'
import { baseUrl } from '../../helpers/baseUrl'

type Logo = {
  name: string
}
type Partner = {
  text: string
  img?: string
  bgColor?: string
  name?: string
  position?: string
  photo?: string
}

const partners: Partner[] = [
  {
    img: "assets-testimonial-1.svg",
    text: "Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better.",
    bgColor: 'bg-[#049CFB]',
    name: 'Hamdan Hamedan',
    position: 'CEO of Kesan Indonesia',
    photo: '8.svg'
  },
  {
    img: "assets-testimonial-2.svg",
    text: "Sejak akhir 2012, mulai dari konsep POS sederhana. Terus berkembang memenuhi kebutuhan. Dengan Tlab sistem dapat bertumbuh sesuai kebutuhan.",
    bgColor: 'bg-[#5449D6]',
    name: 'Hamdan Hamedan',
    position: 'CEO of Kesan Indonesia',
    photo: '8.svg'
  },
  {
    img: "assets-testimonial-3.svg",
    text: "Kreativitas, tanggung jawab, serta komunikasi yang andal menjadi kunci kelancaran kerjasama kami bersama TLab dalam membangun aplikasi Anterin.",
    bgColor: 'bg-[#00DE9C]',
    name: 'Hamdan Hamedan',
    position: 'CEO of Kesan Indonesia',
    photo: '8.svg'
  },
]

const data: Logo[] = [
  {
    name: 'rectangle-28.svg'
  },
  {
    name: 'rectangle-29.svg'
  },
  {
    name: 'rectangle-30.svg'
  },
  {
    name: 'rectangle-31.svg'
  },
  {
    name: 'rectangle-32.svg'
  },
  {
    name: 'rectangle-33.svg'
  },
  {
    name: 'rectangle-34.svg'
  },
  {
    name: 'rectangle-35.svg'
  },
  {
    name: 'rectangle-36.svg'
  },
  {
    name: 'rectangle-37.svg'
  },
  {
    name: 'rectangle-38.svg'
  },
  {
    name: 'rectangle-39.svg'
  }
]

const Clients = () => {
  return (
    <div className='mt-[100px]'>
      {/* <img src={Rectanggle} className='w-full h-full object-fill' /> */}
      {/* <div className={`w-full h-[64.09px] object-cover bg-[url(${baseUrl('/bg/Rectangle-51.svg')})]`}>asd</div> */}
      <svg width="100%" height="100%" viewBox="0 -2 1440 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.05" d="M0 61.3837C0 43.9707 13.9233 29.7539 31.3325 29.3907L1407.33 0.68158C1425.26 0.307476 1440 14.7402 1440 32.6746V64.0947H0V61.3837Z" fill="#049CFB" />
      </svg>
      <div className='relative'>
        <div className='absolute -z-10 bg-[#049CFB] bg-opacity-5 w-full h-[76%]'></div>
        <div className='max-w-[1200px] mx-auto space-y-[79.75px] pt-[42.91px]'>
          <div className='flex justify-between'>
            <div className='text-[32px] leading-[48px] font-bold'>
              <h1>Connect</h1>
              <h1>& Collaborate</h1>
            </div>
            <div>
              <h2 className='text-[18px] leading-[32.04px] max-w-[580px] mb-[16px]'>Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan produk terbaik</h2>
              <NavLink to={"/"} className='flex w-fit items-center hover:cursor-pointer gap-5 whitespace-nowrap text-[16px] font-bold leading-[28.88px] text-[#5449D6]'>
                <h1>Lihat Semua partner TLab</h1>
                <img src={baseUrl(`/icon/Vector.svg`)} className='w-2 h-2 object-contain' />
              </NavLink>
            </div>
          </div>
          <div className='flex items-stretch justify-between gap-[32px] -pb-24'>
            {_.map(partners, (index, key) => (
              <div key={key} className={`${index.bgColor ? `${index.bgColor}` : 'bg-[#049CFB]'} flex flex-col rounded-lg w-full min-h-[10px] gap-[80px] hover:shadow`}>
                <h1 className='flex-1 font-bold text-[24px] leading-[36px] text-white pl-[23.94px] pr-[51.86px] pt-[31.7px] '>{index.text}</h1>
                <div className='relative'>
                  <div className='absolute bg-white rounded-tr-lg bottom-0'>
                    <div className='flex p-[24px] items-center gap-[24px]'>
                      <img src={baseUrl(`/photo/${index.photo}`)} className='w-[64px] h-[64px] rounded-full' />
                      <div>
                        <h2 className='text-[16px] leading-[28.88px]'>{index.name}</h2>
                        <h2 className='text-[14px] leading-[25.27px]'>{index.position}</h2>
                      </div>
                    </div>
                  </div>
                  <img src={baseUrl(`/bg/${index.img}`)} className='w-full object-contain' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto flex flex-wrap justify-center gap-[50px] pb-[100.19px] pt-[79.75px]'>
        {
          _.map(data, (index, key) => (
            <img key={key} src={baseUrl(`/logo/${index.name}`)} className='w-[153.38px] h-[71.81px] object-contain' />
          ))
        }
      </div>
    </div>
  )
}

export default Clients