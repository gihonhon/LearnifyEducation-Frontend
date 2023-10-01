'use client'
import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

const NavbarLogin = () => {
    const router = useRouter();
  return (
    <nav className='navbar bg-base-100 border-b'>
    <div className='navbar-start'>
        <a className='btn btn-ghost text-xl font-semibold' onClick={() => router.back()}>
            <BiArrowBack/>
        </a>
    </div>
    <div className="navbar-center">
        <a className="btn btn-ghost lg:text-xl text-lg" onClick={() => router.push('/')}>Learnify Education</a>
    </div>
    <span className="navbar-end"/>
</nav>
  )
}

export default NavbarLogin