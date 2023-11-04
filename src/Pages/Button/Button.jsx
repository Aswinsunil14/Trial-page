import React from 'react'
import './button.css';
import Button1 from '../../Components/Buttons/Button1';
import Button2 from '../../Components/Buttons/Button2';

const Button = () => {
  return (
    <div className='flex items-center md:ml-12 sm:ml-auto lg:pl-96 lg:ml-12 '>
      
      <div  className='container-1'>
      
      <Button1 />
      </div>

      <div className='container-2'>
     
      <Button2 />
      </div>
    </div>
  )
}

export default Button