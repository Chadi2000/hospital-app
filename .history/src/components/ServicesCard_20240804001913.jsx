import React from 'react'
import Doctor from '../assets/doctor.png'

const ServicesCard = () => {
  return (
    <div className='flex flex-col items-center relative bg-white w-[308px] h-[229px] rounded-[5px] ' >
        <div className='absolute top-[50%]'>
            <img src={Doctor} alt="" className='h-[111px]'/>
        </div>

        <div className='text-title font-semibold text-[20px] leading-[31.2px] '>
            Date
        </div>

        <div></div>

    </div>
  )
}

export default ServicesCard
