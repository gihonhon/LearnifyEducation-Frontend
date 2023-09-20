"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdArrowDropDown, MdOutlineSearch } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronRight } from 'react-icons/bi';

const Navbar = () => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const [kelasOpen, setKelasOpen] = useState<boolean>(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const toggleKelas = () => {
        setKelasOpen(!kelasOpen);
      };
    const toggleSearch = () => {
      setSearchOpen(!searchOpen);
    }


  return (
    <div className="bg-[#7C32A1] flex justify-between items-center p-4 h-auto w-screen">
      <div className="flex gap-x-4 text-white">
        <h1 className="text-3xl font-semibold p-1 mx-1 cursor-pointer" onClick={() => router.push('/')}>Learnify</h1>
        <button className=" items-center text-xl font-medium p-2 mx-1 cursor-pointer lg:flex md:flex sm:hidden" onClick={toggleKelas}>
          Kelas <MdArrowDropDown className="ml-2" />
        </button>
        <button className="text-xl font-medium p-2 ml-1 lg:flex md:flex sm:hidden" onClick={() => router.push('/blog')}>Blog</button>
      </div>
      <div className="flex gap-x-2 items-center mr-8 lg:flex md:flex sm:hidden">
        <button className="text-white text-3xl mx-2 p-1" onClick={toggleSearch}>
          <MdOutlineSearch />
        </button>
        <button className="px-6 py-2.5 border bg-white bg-opacity-70 rounded-xl text-[#7C32A1] font-medium" type='button' onClick={() => router.push('/auth/login')}>
          Masuk/Daftar
        </button>
      </div>

      <button className='text-white text-3xl mx-2 p-1 cursor-pointer lg:hidden md:hidden' onClick={toggleMenu}>
        <GiHamburgerMenu/>
      </button>
        {/** Menu Hamburger */}
        {menuOpen && (
        <div className="absolute top-16 right-4 bg-white border rounded-md shadow-lg flex flex-col p-4">
            <div className='flex flex-col items-start py-1 px-2 gap-y-1'>
          <button className="my-2 text-[#7C32A1] font-medium">Learnify</button>
          <button className="my-2 text-[#7C32A1] font-medium">Blog</button>
          <button className="my-2 text-[#7C32A1] font-medium">Search Materi</button>
          <button className="my-2 text-[#7C32A1] font-medium">Masuk/Daftar</button>
            </div>
        </div>
        )}
        {/** Menu Kelas */}
        {kelasOpen && (
        <div className="absolute top-16 left-36 bg-white border rounded-md shadow-lg flex flex-col p-4">
            <div className='flex justify-between items-start py-1 px-2 '>
                <div className='flex items-start flex-col gap-y-4 m-1 p-1 '>
                    <h1 className='mr-8 text-lg font-medium'>Sekolah Dasar</h1>
                    <button>Kelas I</button>
                    <button>Kelas II</button>
                    <button>Kelas III</button>
                    <button>Kelas IV</button>
                    <button>Kelas V</button>
                    <button>Kelas VI</button>
                </div>
                <div className='flex items-start flex-col gap-y-4 m-1 ml-4 p-1 '>
                    <h1 className='mr-8 text-lg font-medium'>Sekolah Menengah Pertama</h1>
                    <button>Kelas VII</button>
                    <button>Kelas VIII</button>
                    <button>Kelas IX</button>
                </div>
                <div className='flex items-start flex-col gap-y-4 m-1 ml-4 p-1 '>
                    <h1 className='text-lg font-medium'>Sekolah Menengah Atas</h1>
                    <button>Kelas X IPA</button>
                    <button>Kelas X IPS</button>
                    <button>Kelas XI IPA</button>
                    <button>Kelas XI IPS</button>
                    <button>Kelas XII IPA</button>
                    <button>Kelas XII IPS</button>
                </div>
            </div>
        </div>
        )}
        {searchOpen && (
          <div className="absolute top-16 right-48 bg-white border rounded-md shadow-lg flex flex-col p-4">
              <input
              className='px-2 py-2 w-[300px] border'
              type='text'
              placeholder='Apa yang ingin kamu pelajari ??'
              />
          </div>
        )}
    </div>
  );
};

export default Navbar;
