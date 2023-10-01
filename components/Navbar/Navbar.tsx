import { FiSearch } from 'react-icons/fi';
import BtnRouter from '../BtnRouter';
// import { useRouter } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountNav from '../UserAccountNav';
import { RiMenu3Line } from 'react-icons/ri';


const Navbar = async () => {
  // const router = useRouter();
  const session = await getServerSession(authOptions);
  return (
    <div className="navbar bg-[#7C32A1] ">
    {/** Menu */}
    <div className="navbar-start">
      <BtnRouter style='btn btn-ghost normal-case text-xl text-white' content='LearniFy' path='/'/>
      <ul className="menu menu-horizontal px-1 text-white hidden lg:flex">
      <li className='' tabIndex={0}>
        <details className='dropdown dropdown-end'>
          <summary className=''>Kelas</summary>
          <ul className="grid grid-cols-3 gap-4 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96 text-black">
            <li>
                <a>Kelas I</a>
                <a>Kelas II</a>
                <a>Kelas III</a>
                <a>Kelas IV</a>
                <a>Kelas V</a>
                <a>Kelas VI</a>
            </li>
            <li>
                <a>Kelas VII</a>
                <a>Kelas VIII</a>
                <a>Kelas IX</a>
            </li>
            <li>
                <a>Kelas X</a>
                <a>Kelas XI</a>
                <a>Kelas XII</a>
            </li>
          </ul>
        </details>
      </li>
      <li><BtnRouter content='Blog' style='' path='/blog'/></li>
    </ul>
    </div>

  <div className="navbar-end lg:space-x-4 lg:mr-4">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white text-2xl">
        <RiMenu3Line/>
      </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[20rem]">
          <li><input type="text" placeholder="Belajar apa hari ini.." className="input input-bordered w-full md:w-auto" /></li>
          <li><div className="divider"></div> </li>
          <li><a>Kelas</a></li>
          <li><BtnRouter content='Blog' style='' path='/blog'/></li>
          <li><BtnRouter content='Masuk/Daftar' style='' path='/masuk'/></li>
        </ul>
    </div>
    {/** */}
    <div className="lg:form-control hidden">
      <input type="text" placeholder="Belajar apa hari ini.." className="input input-bordered w-24 md:w-auto" />
    </div>
    {session?.user ? (
      <UserAccountNav/>
    ) : (
      <BtnRouter style='btn hidden lg:flex' path='/masuk' content='Masuk/Daftar'/>
    )}
    
    {/* <button className="btn hidden lg:flex">Masuk/Daftar</button> */}
  </div>
</div>
  )
}

export default Navbar