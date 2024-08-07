import React from 'react'
import Doctor from '../assets/doctor.png'

const ServicesCard = () => {
  return (
    <div className='flex flex-col items-center justify-center relative bg-white w-[308px] h-[229px] rounded-[5px] px-[30px]' >
        <div className='absolute top-[-30%]'>
            <img src={Doctor} alt="" className='h-[111px]'/>
        </div>

        <div className='text-title font-semibold text-[20px] leading-[31.2px] '>
            Date
        </div>

        <div>choose what date to checkkkkkk</div>

    </div>
  )
}

export default ServicesCard
