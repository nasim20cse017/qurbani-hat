'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterPage = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (data) => {

        const { name, email, photoURL, password } = data;

        const { data: response, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: photoURL,
            callbackURL: "/login",
        });

        console.log("Data and Response", response, error);

        if (error) {
            toast.error(error.message || "Something went wrong!");
            return;
        }

        if (response) {
            toast.success("Sign Up Successful 🎉");

            // redirect after short delay so user can see toast
            setTimeout(() => {
                router.push('/login');
            }, 1500);
        }
    };

    return (
        <div className="flex items-center justify-center bg-[#F3F3F3] font-sans py-10">
            <div className="bg-white p-10 md:p-16 rounded-sm w-full max-w-2xl shadow-sm my-5">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#403F3F] mb-10">
                    Register your account
                </h2>

                <div className="border-t border-[#E7E7E7] mb-10"></div>

                <form onSubmit={handleSubmit(handleRegister)}>

                    {/* Name */}
                    <div className="form-control w-full mb-6">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Your Name</span>
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Enter your name"
                            className="input w-full bg-[#F3F3F3] border-none rounded-sm h-16 px-5"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                    </div>

                    {/* Photo URL */}
                    <div className="form-control w-full mb-6">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Photo URL</span>
                        </label>
                        <input
                            {...register("photoURL", { required: "Photo URL is required" })}
                            type="text"
                            placeholder="Enter your photo URL"
                            className="input w-full bg-[#F3F3F3] border-none rounded-sm h-16 px-5"
                        />
                        {errors.photoURL && <p className="text-red-500 text-sm mt-2">{errors.photoURL.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="form-control w-full mb-6">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Email</span>
                        </label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Enter your email"
                            className="input w-full bg-[#F3F3F3] border-none rounded-md h-16 px-5"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="form-control w-full mb-6">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Min length is 6" }
                            })}
                            type="password"
                            placeholder="Enter your password"
                            className="input w-full bg-[#F3F3F3] border-none rounded-md h-16 px-5"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
                    </div>

                    <div className="flex justify-end items-center mb-8">
                        <span className="text-sm">
                           Already have and account?{" "}
                            <Link href="/login" className="text-blue-600 hover:underline">
                                Login
                            </Link>
                        </span>
                    </div>

                    <div className="form-control">
                        <button type="submit" className="btn btn-block bg-green-400 hover:bg-blue-400 text-white border-none rounded-md h-14 text-lg">
                            Register
                        </button>
                    </div>
                </form>
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default RegisterPage;