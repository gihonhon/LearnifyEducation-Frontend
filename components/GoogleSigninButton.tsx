import { signIn, useSession } from "next-auth/react";
import { FC, ReactNode } from "react";

interface GoogleSignInButtonProps {
    children: ReactNode;
}

const GoogleSigninButton: FC<GoogleSignInButtonProps> = ({ children }) => {
    const loginWithGoogle = () => signIn('google', { callbackUrl: 'http://localhost:3000' })
  return (
    <div className="px-2 w-64">
        <button onClick={loginWithGoogle} className="btn btn-neutral w-full my-1">
            {children}
        </button>
    </div>
  )
}

export default GoogleSigninButton