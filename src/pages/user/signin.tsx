import React from 'react'
import { useForm } from 'react-hook-form'
import { trpc } from '../../utils/trpc'

const Signin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const user = trpc.user.doUserSignUp.useMutation({})
    const onSubmit = () => {
        console.log('test')
    }
  return (
    <div>
        <div className='bg-sky-300 px-10 py-20 mx-60 mt-20 border border-sky-500/5 rounded-lg'>
            <h1 className='text-3xl text-white ml-96'>Welcome!</h1>
            <form className='flex flex-col w-96 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input className='border border-sky-500 outline-none p-1 m-2 text-sky-500 rounded-md' type="text" {...register("name", { required: true })}/>
                {errors.name && <span className='text-red-500'>This field is required</span>}
                <label htmlFor="username">Username</label>
                <input className='border border-sky-500 outline-none p-1 m-2 rounded-md' type="text" {...register("username", { required: true })}/>
                {errors.username && <span className='text-red-500'>This field is required</span>}
                <label htmlFor="email">Email</label>
                <input className='border border-sky-500 outline-none p-1 m-2 rounded-md' type="email" {...register("email", { required: true })}/>
                {errors.email && <span className='text-red-500'>This field is required</span>}
                <label htmlFor="Password">Password</label>
                <input className='border border-sky-500 outline-none p-1 m-2 rounded-md' type="password" {...register("password", { required: true })}/>
                {errors.password && <span className='text-red-500'>This field is required</span>}
                <button className='bg-sky-500 text-white p-1 m-2'>sign up</button>
            </form>
        </div>
    </div>
  )
}

export default Signin