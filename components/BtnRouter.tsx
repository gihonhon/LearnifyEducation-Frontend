'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const BtnRouter = ({content, path, style} : {
    content: string,
    path: string,
    style: string
}) => {
    const router = useRouter();
  return (
    <button onClick={() => router.push(path)} className={style}>{content}</button>
  )
}

export default BtnRouter