import Image from 'next/image'
import React from 'react'
import card1 from '@/assets/card-1.jpg'
import card2 from '@/assets/card-2.jpg'
import card3 from '@/assets/card-3.jpg'

//! Card info goes here

const cardInfo = [
  {
    image: card1,
    title: '50+ Best creative website themes & templates',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ',
  },
  {
    image: card2,
    title: '50+ Best creative website themes & templates',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ',
  },
  {
    image: card3,
    title: '50+ Best creative website themes & templates',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ',
  },
  {
    image: card1,
    title: '50+ Best creative website themes & templates',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ',
  }
]

//! {  {cardInfo.map((card, index) => ( is to map the cardInfo array to the Card component}

function Card() {
  return (
    <div className="w-full max-w-[1480px] flex overflow-x-auto snap-x snap-mandatory scroll-px-6 sm:overflow-visible no-scrollbar">
      <div className="flex gap-4 pl-4 pr-3  sm:grid sm:grid-cols-2 lg:grid-cols-4 place-items-center">
        {cardInfo.map((card, index) => (
          <div key={index} className="border rounded-lg shadow-sm overflow-hidden max-w-[360px] flex flex-col items-center snap-start">
            <div className="h-[230px] w-[370px]">
              <Image src={card.image} alt={card.title} loading="lazy" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="p-8 flex flex-col items-center gap-4 text-center">
              <p className="text-black text-lg font-semibold">{card.title}</p>
              <p className="text-[#637381] text-base">{card.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 cursor-pointer hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
