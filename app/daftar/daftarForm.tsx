'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import toast, { Toaster } from 'react-hot-toast';


const schema = yup.object({
    fullname: yup.string().min(1,"Fullname is required").max(100),
    email: yup.string().email('Invalid email').required("Email is required"),
    password: yup.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
    confpassword: yup.string().oneOf([yup.ref('password')], 'Password must match').min(1,"Password Confirmation is required"),
  });
  type FormData = yup.InferType<typeof schema>;

const DaftarForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
      });
      const onSubmit = async (data: FormData) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname: data.fullname,
                email: data.email,
                password: data.password,
            })
        })
        if(response.ok) {
            router.push('/masuk')
        } else {
            toast.error('Error!. Something went wrong')
        }
      };

  return (
    <div className='w-full lg:w-[50%] lg:flex justify-center items-center'>
    <div className='p-5 lg:flex lg:h-auto lg:flex-col lg:justify-center lg:items-center lg:border-2 lg:rounded-md lg:p-10'>
        <h1 className='text-lg lg:text-2xl lg:font-medium p-1'>Daftar Akun</h1>
        <h3 className='p-1 mb-2 text-sm lg:text-base lg:mb-1'>Di Learnify bisa belajar kapan saja kok</h3>
        {/** Form Input for Sign In */}
        <form className='p-1' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
                <label className="label p-0">Fullname</label>
                <input 
                type="text" 
                placeholder="Input your name" 
                className="input input-bordered w-full"
                {...register("fullname")}
                />
                <label className="label">
                    <span className="label-text-alt text-error">{errors.fullname?.message}</span>
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label p-0">Email</label>
                <input 
                type="email" 
                placeholder="Input your email" 
                className="input input-bordered w-full" 
                {...register("email")}/>
                <label className="label">
                    {/* {errors.email && <span className="label-text-alt">This Requerid</span>} */}
                    <span className="label-text-alt text-error">{errors.email?.message}</span>
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label p-0">Password</label>
                <input 
                type="password" 
                placeholder="Input your email" 
                className="input input-bordered w-full" 
                {...register("password")}
                />
                <label className="label">
                    <span className="label-text-alt text-error">{errors.password?.message}</span>
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label p-0">Password Confirmation</label>
                <input 
                type="password" 
                placeholder="Re-type password" 
                className="input input-bordered w-full" 
                {...register("confpassword")}
                />
                <label className="label ">
                    <span className="label-text-alt text-error">{errors.confpassword?.message}</span>
                </label>
            </div>

            <button
            type='submit'
            className='btn btn-primary w-full my-1'
            >
            Daftar
            </button>
        </form>
        <p className='my-1 font-light text-sm'>sudah memiliki akun? <a className='text-blue-600 cursor-pointer' onClick={() => router.push('/masuk')}>Masuk Sekarang</a></p>
        <p className='my-1 font-light text-sm'>By sign in or registering you agree with our <a className='text-blue-600 cursor-pointer'>Terms & Conditions</a></p>
    </div>
    <Toaster
        position='top-left'
        reverseOrder={true}
        />
</div>
  )
}

export default DaftarForm