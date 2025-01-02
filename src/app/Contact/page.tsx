import { Input } from '@/components/ui/input'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='w-full h-auto flex flex-col lg:flex-row justify-evenly items-center gap-9 mt-[120px]'>
        <div className='w-auto lg:w-[340px] h-auto '>
          <div className='w-[262px] h-[122px] '>
            <h1 className='font-poppin font-[500]'>Call To Us</h1>
            <h2 className='pt-4'>We are available 24/7, 7 days a week.</h2>
            <h2>Phone: +8801611112222</h2>

          </div>
          <div className='w-[262px] h-auto mt-10'>
            <h1 className='font-poppin font-[500]'>Write To US</h1>
            <h2 className='pt-4'>Fill out our form and we will contact you within 24 hours.</h2>
            <h2 className='pt-4'>Emails: customer@exclusive.com</h2>
            <h2>Emails: support@exclusive.com</h2>

          </div>

        </div>
        <div className='w-auto h-auto lg:w-[800px] lg;h-[457px] flex flex-col gap-4'>
          <div className='flex gap-3 flex-col lg:flex-row justify-center items-center'>
            <Input className='w-[235px] bg-slate-100' placeholder='Your Name *' />
            <Input className='w-[235px] bg-slate-100' placeholder='Your Email *' />
            <Input className='w-[235px] bg-slate-100' placeholder='Your Phone *' />

          </div>
          <div className='flex justify-center items-center'>
            <Input className='w-[235px] lg:w-[737px] h-[207px] bg-slate-100' placeholder='Your Massage' />
          </div>

        </div>
       

      </div>
       <div className="w-full h-[100px] mt-[40px] flex justify-center items-center">
        <div className='w-[70%] flex justify-center lg:justify-end items-center'>
         <button className="w-[215px] sm:w-[234px] h-[56px] font-poppin  bg-black text-[14px] text-white  border-[1px] border-oranges rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-[0.5s]">Send Massage</button>
         </div>
       </div>










    </div>
  )
}

export default Contact