import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { ReactNode } from "react"

export const metadata = {
    title: "My-Profile"
}

const ProfileLayout = ({ children }: {children : ReactNode}) => {
  return (
    <div className="">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default ProfileLayout