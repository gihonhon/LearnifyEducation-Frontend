'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react';
import { PiBookOpenText } from 'react-icons/pi';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';

const LogOutBtn = () => {
  return (
    <div className='w-full flex items-center justify-between' onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/masuk`
        })}>
            <p>Keluar</p>
            <BiChevronRight/>
        </div>
  )
}

export default LogOutBtn