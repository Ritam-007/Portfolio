import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userFeedback = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/bzynpzma", userFeedback);
            toast.success("Thank You for your feedback");
        } catch (error) {
            console.log(error);
            toast.error("Opps!!! Something Went Wrong");
        }
    }

  return (
    <>
        <div name="Contact me" className='md:flex max-w-screen-2xl container mx-auto px-4  md:px-20 my-28'>
            <div className="md:w-1/2 flex flex-col items-center justify-center">
                <h1 className='text-purple-600 text-3xl font-bold mb-4'>Trying to reach me?</h1>
                <span>Please fill the form</span>
            </div>
            <div className='md:w-1/2 flex flex-col items-center justify-center mt-6'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-transparent border-2 border-purple-600 w-96 px-8 py-6 rounded-lg' /*action="https://getform.io/f/bzynpzma" method='POST' */>
                    <h1 className='text-xl font-semibold mb-4 text-blue-500 text-center'>Share your thoughts</h1>
                    <div className='flex flex-col mb-6'>
                        <lebel1 className='block text-gray-500'>Name</lebel1>
                        <input {...register("name", { required: true })} name='name' className='border rounded-md py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline' type="text" id='Name' placeholder='What is your name?'/>
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div className='flex flex-col mb-6'>
                        <lebel1 className='block text-gray-500'>Email</lebel1>
                        <input {...register("email", { required: true })} name='email' className='border rounded-md py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline' type="email" id='email' placeholder='Type your email here'/>
                        {errors.email && <span>This field is required</span>}
                    </div>

                    <div className='flex flex-col mb-6'>
                        <lebel1 className='block text-gray-500'>Message</lebel1>
                        <textarea {...register("message", { required: true })} name='message' className='border rounded-md py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline' type="text" id='message' placeholder='What is your feedback, type here'/>
                        {errors.message && <span>This field is required</span>}
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='bg-orange-500 text-slate-200 rounded-xl px-5 py-2 hover:bg-orange-700 duration-300'>Send</button>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
