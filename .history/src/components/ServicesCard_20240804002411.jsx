import React from 'react'
import Doctor from '../assets/doctor.png'

const ServicesCard = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center relative bg-white w-[308px] h-[229px] rounded-[5px] px-[30px]' >
        <div className='absolute top-[-30%]'>
            <img src={Doctor} alt="" className='h-[111px]'/>
        </div>

        <div className='text-title font-semibold text-[20px] leading-[31.2px] '>
            Date
        </div>

        <div className='text-title font-medium text-[18px] leading-[28px]'>choose what date to check</div>

    </div>
  )
}

export default ServicesCard
