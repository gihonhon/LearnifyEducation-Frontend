'use client'
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { signIn } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';
import GoogleSigninButton from '@/components/GoogleSigninButton';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }).required();
  type FormData = yup.InferType<typeof schema>;

const LoginForm = () => {
    const router = useRouter();


    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = async (data: yup.InferType<typeof schema>) => {
        const masukData = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        });
        if(masukData?.error) {
            toast.error("Error!. Something went wrong", {
                style: {
                    border: '2px solid #DC143C',
                    padding: '16px'
                }
            })
        } else {
            router.refresh();
            router.push('/');
        }
    };
    
  return (
<div className='w-full lg:w-[50%] lg:flex justify-center items-center'>
    <div className='p-5 lg:flex h-screen lg:h-auto lg:flex-col lg:justify-center lg:items-center lg:border-2 lg:rounded-md lg:p-10'>
        <h1 className='text-lg p-1 lg:text-2xl lg:font-medium lg:p-2'>Masuk Akun</h1>
        <h3 className='p-1 text-sm lg:text-base lg:p-2'>Di Learnify bisa belajar kapan saja kok</h3>
        {/** Form Input for Sign In */}
        <form className='p-2' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
                <label className="label ">Email</label>
                <input 
                type="email" 
                placeholder="Input your email" 
                className="input input-bordered w-full" 
                {...register("email")}
                />
                <label className="label ">
                    <span className="label-text-alt text-error">{errors.email?.message}</span>
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label">Password</label>
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
            <button type='submit' className='btn btn-primary w-full my-1'>
            Masuk
            </button>
        </form>
        <div className='flex justify-center w-full'>
            <div className="divider w-[50%]">OR</div>
        </div>
            <GoogleSigninButton>
                google
            </GoogleSigninButton>
        <p className='my-2 font-light text-sm'>tidak memilik akun? <a className='text-blue-600 cursor-pointer' onClick={() => router.push('/daftar')}>Daftar Sekarang</a></p>
        <p className='my-2 font-light text-sm'>By sign in or registering you agree with our <a className='text-blue-600 cursor-pointer'>Terms & Conditions</a></p>
    </div>
    <Toaster
        position='top-left'
        reverseOrder={true}
        />
</div>
  )
}

export default LoginForm