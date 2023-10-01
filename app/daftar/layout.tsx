import NavbarLogin from "@/components/Navbar/NavbarLogin"

export const metadata = {
    title: "Daftar Akun"
}

const DaftarLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <NavbarLogin/>
        {children}
    </div>
  )
}

export default DaftarLayout