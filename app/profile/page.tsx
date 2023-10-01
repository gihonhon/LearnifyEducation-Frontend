import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PiBookOpenText } from 'react-icons/pi';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { signOut } from 'next-auth/react';
import LogOutBtn from '@/components/LogOutBtn';

const ProfilePage = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user.name || session?.user.fullname;
    const userImage = session?.user?.image ?? '';
    const userEmail = session?.user?.email;
    const intToOrdinalNumberString = (num: number): string => {
        num = Math.round(num);
        let numString = num.toString();
    
        if (Math.floor(num / 10) % 10 === 1) {
            return numString + "th";
        }
        switch (num % 10) {
            case 1: return numString + "st";
            case 2: return numString + "nd";
            case 3: return numString + "rd";
            default: return numString + "th";
        }
    }
  return (
    <div className='flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-4'>
        <div className='w-[20rem] lg:w-[20rem] border rounded-md mx-2 my-6 bg-[#7c32a1] bg-opacity-75'>
            <div className=' flex flex-col items-center my-4'>
                <div className="avatar mb-2">
                    <div className="w-24 rounded-full">
                        {userImage? (<img src={userImage} alt="User Image" />) : (<img src={`https://ui-avatars.com/api/?name=${user}&background=0D8ABC&color=fff`} alt="User Image" />) }
                    </div>
                </div>
                <h2 className='font-semibold text-white'>{(user)?.toUpperCase()}</h2>
                <h3 className='text-white'>{userEmail}</h3>
            </div>
            <div className='divider'></div>
            <div className='flex flex-col '>
                <div className='flex items-center mb-3 justify-between h-20 border rounded-lg border-slate-300 bg-[#7c32a1] bg-opacity-70 mx-2'>
                    <h1 className='text-xl text-white font-medium mx-4'>Rank</h1>
                    <p className='text-lg text-white mx-4'>{intToOrdinalNumberString(1)}</p>
                </div>
                <div className='flex items-center mb-3 justify-between h-20 border rounded-lg border-slate-300 bg-[#7c32a1] bg-opacity-70 mx-2'>
                    <h1 className='text-xl text-white font-medium mx-4'>Total Score</h1>
                    <p className='text-lg text-white mx-4'>1200pts</p> 
                </div>
            </div>
        </div>
        <div className='flex flex-col w-[24rem] lg:w-[28rem] mx-2 my-6  bg-opacity-75'>
            <div className='mb-4'>
                <span className='flex items-center space-x-2 text-xl my-2 px-2 text-[#7c32a1]'>
                    <PiBookOpenText/>
                    <p>Saku Belajar</p>
                </span>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 mx-1 lg:cursor-pointer'>
                    <button className='flex flex-col justify-center items-center border-2 py-4 rounded-lg gap-y-3'>
                        <img alt='' src='/IconLeaderBoard.png' />
                        <p>Leaderboard</p>
                    </button>
                    <button className='flex flex-col justify-center items-center border-2 py-4 rounded-lg gap-y-3'>
                        <img alt='' src='/IconLeaderBoard.png' />
                        <p>Leaderboard</p>
                    </button>
                    <button className='flex flex-col justify-center items-center border-2 py-4 rounded-lg gap-y-3'>
                        <img alt='' src='/IconLeaderBoard.png' />
                        <p>Leaderboard</p>
                    </button>
                </div>
            </div>
            <div>
                <span className='flex items-center space-x-2 text-xl my-2 px-2 text-[#7c32a1]'>
                    <AiTwotoneSetting/>
                    <p>Pengaturan Akun</p>
                </span>
                <div className='grid grid-cols-1 gap-2 ml-8 lg:cursor-pointer'>
                    <div className='w-full flex items-center justify-between'>
                        <p>Edit Profil</p>
                        <BiChevronRight/>
                    </div>
                    <LogOutBtn/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage
//https://img.freepik.com/free-vector/hand-drawn-teacher-s-day-background-spanish_23-2149354765.jpg