import React from 'react'
import LoginForm from './loginForm';
import Slider from './slider';

const Masuk = () => {
  return (
    <div className='flex lg:h-screen w-full'>
        <LoginForm/>
        <Slider/>
    </div>
  )
}

export default Masuk