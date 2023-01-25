import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='bg-white/10'>
        <div className='h-[6rem] flex items-center justify-between px-4 md:max-w-[80vw] mx-auto'>
        {/* left */}
        <div className='flex items-center'>
            <div className='h-[5rem] flex'>
                <img src={logo} alt=''className='object-cover p-2'></img>
            </div>
            <div className='text-white font-bold'>
                <p></p>
            </div>
        </div>
        <div className=''>
            <ul className='text-red-600 font-bold flex items-center gap-4'>
                <li><a href=''>About Us</a></li>
                <li><a href=''>Our Products</a></li>
                <li><a href=''>Contact Us</a></li>
            </ul>
</div>

        

    </div>
    </div>
    
  )
};

export default Navbar