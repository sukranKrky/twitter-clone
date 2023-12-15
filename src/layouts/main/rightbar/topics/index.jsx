import React from 'react'
import Topic from './topic'
import { topics } from '../../../../utils/consts'

export default function Topicks() {
  return (
   <section className="bg-[#16181c] mb-4 rounded-2xl  border border-[#16181c] ">

    <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]">İlgini Çekebilecek gündemler</h5>
  <div className='grid'>
  {topics.map((topic, index)=><Topic key={index} item={topic}/>)}
   

   
  </div>
   </section>
  )
}
