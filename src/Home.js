import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import conf from '../src/assets/confi.jpg'
import Navbar from './components/Navbar';

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");

    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    }
  return (
    <div className=''>
        {/* NavBar */}
        <Navbar/>
         {/* Herro pack */}
        <div className='relative h-screen'> 
            {/* Hero Image */}
            <div className='absolute h-full w-full flex overflow-hidden'>
                <img src={conf} alt='conference' className='object-cover w-full h-full'></img>
            </div>
            {/* overlay on main image */}
            <div className='absolute h-full w-full flex overflow-hidden bg-black/60'>
            </div>
            {/* Hero Info */}
            <div className='lg:flex flex-col items-center justify-center relative z-10 px-6 lg:pt-40 md:max-w-[80vw] mx-auto'>
                {/* Main */}
                <div className='flex flex-col items-center justify-center pb-8'>
                    <h1 className='text-[27px] md:text-[60px] text-white font-bold pt-8 mt-20'>Telserve Conference Chat App</h1>
                    <p className='text-[10px] md:text-[30px] text-white -mt-1'>Enjoy unlimited smooth voice and video conference call with Telserve fast internet.</p>
                </div>
                <form action="" onSubmit={submitCode}
                className=" text-white md:pt-12 flex flex-col items-center justify-center"
                >
                <div className='flex flex-col items-center justify-center'>
                <label className='text-[25px] md:text-[40px] font-bold pt-12'>Enter The Room Code</label> <br/>
                <input type="text" 
                    required 
                    placeholder='Enter Room Code here' 
                    value={RoomCode}
                    onChange={(e) =>setRoomCode(e.target.value)}
                    className="bg-red-400 placeholder:text-white py-1.5 md:py-2 max-w-[16rem] rounded-full px-4 mt-2 md:mt-6 outline-0"> 
                </input>
                </div>
                
                <button type='submit' className='text-orange-500 bg-white rounded-full mt-4 py-[5px] md:py-[7px] font-bold md:mt-4 md:w-[10rem] w-[8rem] hover:bg-red-100 duration-100 ease-in-out' >Enter Room</button>
                </form> 
             </div>
            
        </div>
    </div>
   
  );
};

export default Home;