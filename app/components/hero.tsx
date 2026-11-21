import React from 'react'

export const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center text-center mx-auto mt-25 text-sm font-medium bg-gray-100 rounded-3xl px-4 py-1 border-[0.1] border-gray-300 hover:bg-gray-200 cursor-pointer'> Finta Finance: instantly forecast the future using real accounting data →</div>
      <div className='flex flex-col mt-12 text-6xl items-center leading-16 font-medium text-gray-900'>
      <h1>Magically simplify</h1>
      <h1>accounting and taxes</h1>
      </div>
      <div className='mt-6 leading-6 flex text-center flex-col text-gray-600'>
        <p>Automated bookkeeping. Effortless tax filing. Financial clarity.</p>
        <p>Set up in 10 mins. Back to building by 5:00pm.</p>
      </div>

      <div className='flex mt-2 flex-row items-center gap-4'>
      <button className='flex text-center mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white'>Get started</button>
      <button className='flex text-center px-4 py-2 mt-4 hover:bg-gray-300 rounded-lg'>Pricing  →</button>
     
      </div>
       <p className='mt-6 text-gray-600'>For US-based startups.</p>
      
    </div>
  )
}

export default Hero
