import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

  const navigate = useNavigate();
  return (
    <div
      className="px-4 sm:px-20 xl:pgx-32 relative inline-flex flex-col w-full justify-center
      bg-[url('/gradientBackground.pn')] bg-cover min-h-screen bg-no-repeat"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Creating amazing content <br /> with <span className="text-primary">AI Tools</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-black">
          Transform your content creation with our suite of premium AI tools. 
          Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      <div className='flex gap-4 justify-center flex-wrap text-sm  max-sm:text-x5'>
        <button onClick={() => navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102
        actiuve:scale-95 transition cursor-pointer'>Start creating now </button>

        <button className='bg-white px-10 py-3 rounded-lg border 
        border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch demo</button>
      </div>

      <div className='flex items-center gap-4 text-gray-600 mx-auto mt-8'>
        <img src={assets.user_group} alt="" className="h-8" />Trusted by 10k+ peoples worldwide
      </div>

    </div>

  )
}

export default Hero
