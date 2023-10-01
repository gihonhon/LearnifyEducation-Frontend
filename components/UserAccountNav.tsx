'use client'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';



const UserAccountNav = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const user = session?.user.name || session?.user.fullname;
    const userImage = session?.user?.image ?? '';
  return (
    <details className="dropdown dropdown-end">
      <summary className="hidden lg:m-1 lg:btn lg:bg-transparent lg:border-none lg:hover:bg-transparent">
      <div className="avatar">
        <div className="w-12 rounded-full">
        {userImage? (<img src={userImage} alt="User Image" />) : (<img src={`https://ui-avatars.com/api/?name=${user}&background=0D8ABC&color=fff`} alt="User Image" />) }
        </div>
      </div>
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a onClick={() => router.push('/profile')}>My Profile</a>
        </li>
        <li>
          <a onClick={() => signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/masuk`
            })}>
              Keluar
          </a>
        </li>
      </ul>
    </details>

    )
  }
  
  export default UserAccountNav
