'use client'
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface ProviderProps {
    children: ReactNode
}

const ProviderNext: FC<ProviderProps> = ({ children }) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default ProviderNext