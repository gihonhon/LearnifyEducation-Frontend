import React from 'react'
import NavbarLogin from '@/components/Navbar/NavbarLogin'
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Masuk Akun"
}

const MasukLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <NavbarLogin/>
        {children}
    </div>
  )
}

export default MasukLayout