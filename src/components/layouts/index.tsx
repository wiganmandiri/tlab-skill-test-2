import React from 'react'
import Footers from '../footers'
import HeaderHero from '../headers'
import Navigation from '../navigation'

const Layouts = ({ children }: any) => {
  return (
    <div className='main-content'>
      <header>
        <Navigation />
        <HeaderHero />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className='absolute rounded-[224px] opacity-10 bg-[#5A5A5A] w-[550px] h-[550px] top-[78%] md:top-[59.79%] md:-left-[15.49%] right-[77.29%] md:-bottom-[31.78%]'></div>
        <Footers />
      </footer>
    </div>
  )
}

export default Layouts