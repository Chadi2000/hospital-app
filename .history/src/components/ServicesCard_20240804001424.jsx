import React from 'react'
import Doctor from '../assets/doctor.png'

const ServicesCard = () => {
  return (
    <div className='flex flex-col items-center relative bg-white' >
        <div>
            <img src={Doctor} alt="" />
        </div>

        <div className='text-title font-semibold text-[20px] leading-[31.2px] '>
            Date
        </div>

        <div></div>

    </div>
  )
}

export default ServicesCard
