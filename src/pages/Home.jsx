import React from 'react'
import Germany from "../assets/images/germany.png"
import Usa from '../assets/images/usa.png'
import Brazil from '../assets/images/brazil.png'
import Iceland from '../assets/images/iceland.png'
import Afghanistan from "../assets/images/afghanistan.png"
import Albania from "../assets/images/albaniya.png"
import Aland from "../assets/images/aland.png"
import Algeria from "../assets/images/algeria.png"
function Home() {
  return (
    <div className='max-w-[1440px] mx-auto mt-11'>

      <div className='flex items-center justify-between'>
        <div>
          <input type="text" placeholder='Search for a country…' />
        </div>
        <div>
          <select>
            <option value=""></option>
          </select>
        </div>
      </div>

      <div className='flex items-center justify-between mt-9'>
        <div className='border shadow-md p-2 transform hover:scale-[1.05] transition duration-500'>
          <img className='mb-[24px] rounded-md' src={Germany} alt="germany images flage" />
          <h3 className='mb-[16px]'>Germany</h3>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Population: <span className='font-light text-[#11151]'>81,770,900</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Region: <span className='font-light text-[#111517]'>Europe</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Capital: <span className='font-light text-[#111517]'> Berlin</span></h5>
        </div>
        <div className='border shadow-md p-2 transform hover:scale-[1.05] transition duration-500'>
          <img className='mb-[24px] rounded-md' src={Usa} alt="germany images flage" />
          <h3 className='mb-[24px] rounded-md'>United States of America</h3>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Population: <span className='font-light text-[#11151]'>323,947,000:</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Region:<span className='font-light text-[#11151]'> Americas:</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Capital:<span className='font-light text-[#11151]'> Washington, D.C.:</span></h5>
        </div>
        <div className='border shadow-md p-2 transform hover:scale-[1.05] transition duration-500'>
          <img className='mb-[24px] rounded-md' src={Brazil} alt="germany images flage" />
          <h3 className='mb-[24px] rounded-md'>Brazil</h3>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Population:<span className='font-light text-[#11151]'>206,135,893</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Region:<span className='font-light text-[#11151]'>Americas</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Capital:<span className='font-light text-[#11151]'>Brasília</span></h5>
        </div>
        <div className='border shadow-md p-2 transform hover:scale-[1.05] transition duration-500'>
          <img className='mb-[24px] rounded-md' src={Iceland} alt="germany images flage" />
          <h3 className='mb-[24px] rounded-md'>Iceland</h3>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Population:<span className='font-light text-[#11151]'>334,300</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Region:<span className='font-light text-[#11151]'>Europe</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Capital:<span className='font-light text-[#11151]'>Reykjavík</span></h5>
        </div>
      </div>
      <div className='flex items-center justify-between mt-9'>
        <div className='border shadow-md p-2 transform hover:scale-[1.05] transition duration-500'>
          <img className='mb-[24px] rounded-md' src={Afghanistan} alt="germany images flage" />
          <h3 className='mb-[16px]'>Afghanistan</h3>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Population: <span className='font-light text-[#11151]'>27,657,145</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Region: <span className='font-light text-[#111517]'>Asia</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Capital: <span className='font-light text-[#111517]'> Kabul</span></h5>
        </div>
        <div className='border shadow-md p-2 transform hover:scale-[1.05] transition duration-500'>
          <img className='mb-[24px] rounded-md' src={Aland} alt="germany images flage" />
          <h3 className='mb-[24px] rounded-md'>United States of America</h3>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Population: <span className='font-light text-[#11151]'>28,875</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Region:<span className='font-light text-[#11151]'>Europe</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Capital:<span className='font-light text-[#11151]'> Mariehamn</span></h5>
        </div>
        <div className='border shadow-md p-2 transform hover:scale-[1.05] transition duration-500'>
          <img className='mb-[24px] rounded-md' src={Albania} alt="germany images flage" />
          <h3 className='mb-[24px] rounded-md'>Brazil</h3>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Population:<span className='font-light text-[#11151]'>2,886,026</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Region:<span className='font-light text-[#11151]'>Europe</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Capital:<span className='font-light text-[#11151]'>Tirana</span></h5>
        </div>
        <div className='border shadow-md p-2 transform hover:scale-[1.05] transition duration-500'>
          <img className='mb-[24px] rounded-md' src={Algeria} alt="germany images flage" />
          <h3 className='mb-[24px] rounded-md'>Iceland</h3>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Population:<span className='font-light text-[#11151]'> 40,400,000</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Region:<span className='font-light text-[#11151]'> Africa</span></h5>
          <h5 className='mb-[8px] text-base text-[#111517] font-normal '>Capital:<span className='font-light text-[#11151]'> Algiers</span></h5>
        </div>
      </div>


    </div>
  )
}

export default Home