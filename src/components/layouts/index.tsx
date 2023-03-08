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
        <Footers />
      </footer>
    </div>
  )
}

export default Layouts