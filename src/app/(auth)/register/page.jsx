'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@heroui/react';
import Divider from '@/components/Divider';

const RegisterPage = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();


        const handleGoogle = async () => {

            const data = await authClient.signIn.social({
                provider: "google",
            });
        };

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
            toast.success("Sign Up Successful");

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
                    {/* Google Login */}
                        
                        <Divider></Divider>

                    <Button
                        fullWidth
                        variant="bordered"
                        onClick={handleGoogle}
                        className="mt-5
                        flex items-center justify-center gap-3
                        h-12
                        border border-gray-300
                        bg-white
                        text-gray-700
                        font-medium
                        rounded-lg
                        shadow-sm
                        hover:shadow-md
                        hover:bg-gray-50
                        active:scale-[0.98]
                        transition-all duration-200
                      "
                    >
                        {/* Google Icon */}
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>

                        Continue with Google
                    </Button>
                </form>
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default RegisterPage;