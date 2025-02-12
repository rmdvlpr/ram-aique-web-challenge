import React from 'react'
import '@/styles/home.scss'
import Image from 'next/image'
import rocket from '@/assets/rocket.png'
import icon from '@/assets/icon.png'
import Card from './_components/card'
import house from '@/assets/house.png'
import TextInput from '../_components/TextInput'
import Button from '../_components/Button'

function HomePage() {
  return (
    <div className='main-container'>
      <div className="flex flex-col items-center text-center gap-3 p-[12px]">
        <Image src={rocket} alt="Hero" width={44} height={32} />
        <h1 className="text-[29px] lg:text-[44px] font-semibold leading-[35.1px] lg:leading-[50px] text-center font-inter text-[#2D68F8]">
          Build and Launch Reliable and Market-Ready Products
        </h1>
        <div className='p-2'>
        <p className='text-sm text-center text-black'>This 2025, Aique DANG aims to optimize internal 
          structures and processes, ensuring enhanced reliability, integrity, and efficien
          cy, ultimately driving increased profitability <br></br>for its clients.</p>
        </div>
        <Button icon={icon} text="Check our solutions" />
      </div>
      <div className='card-container w-full'>
        <Card />
      </div>
      <div className='contact-section'>
        <div className='contact-line'>
          <div className='contact-header'>
            <p className='text-base text-[#2D68F8] font-bold text-start'>Contact Us</p>
            <p className="font-semibold text-black text-[20px] sm:text-[42px]">Get In Touch With Us</p>
            <p className='text-sm text-black text-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor</p>
          </div>
          <div>
         <div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className='location'>
                <div className='logo'>
                  <Image src={house} alt="Icon" width={16.14} height={18} />
                </div>
                <div className='address'>
                  <p className='text-black font-semibold'>Our Location</p>
                  <p className='text-base text-black decoration-none '>One World Place, Lane R, BGC</p>
                </div>
              </div>
            ))}
          </div>
          </div>
          
          
        </div>

        <div className='contact-form-container'>
          <div className='contact-form'>
            <div className='form-header'>
              <p className='text-lg font-bold text-black'>
              Send us a message
            </p>
            </div>
           <TextInput label="Full Name" type="text" />
           <TextInput label="E-mail" type="text" />
           <TextInput label="Phone" placeholder="+63" type="text" />
           <TextInput label="Message" placeholder="Type your message here" type="text" />
           <div className='button-container'>
            <button className='button bg-blue-500 text-white px-6 py-2 rounded-3xl mt-4 cursor-pointer hover:bg-blue-600'>
              Send
            </button>
          </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default HomePage
