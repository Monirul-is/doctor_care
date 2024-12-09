import React from 'react'
import expricencesImg from "../../assets/expricences.png";
import Button from '../../components/Button';

const Expriences = () => {
  return (
    <section className='section-container my-24 flex flex-co md:flex-row items-center justify-between md:gap-20 gap-8'>
      <div className='md:w-1/2 md:h-[541px]'>
        <img src={expricencesImg} alt="" className='h-full w-full'/>
      </div>

      <div className='md:w-1/2 mx-auto '>
        <h3 className='uppercase text-lg font-semibold text-primary mb-4'>experiences</h3>
        <h2 className=' capitalize text-4xl font-bold lg:w-1/2'>we provide you the best experience</h2>
        <p className='text-secondery dark:text-white mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
        <Button text="More Info"/>
      </div>
    </section>
  )
}

export default Expriences