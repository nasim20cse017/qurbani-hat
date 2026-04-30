'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    // Destructure everything needed
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (data) => {

        const {name, email, photoURL, password} = data;
        // This ONLY runs if validation passes
        // console.log('✅ Form Submitted Successfully:', data);

        const { data: response, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photoURL,
            callbackURL: "/login", 
        });

        console.log("Data and Response", response, error)

        if(error) {
            alert('error.message')
        }

        if(response) {
            alert('Sign Up Successful')
        }

    };

    const onError = (errors) => {
        // This runs if there are validation errors
        console.log('❌ Validation Errors:', errors);
    };

    return (
        <div className=" flex items-center justify-center bg-[#F3F3F3] font-sans py-10">
            <div className="bg-white p-10 md:p-16 rounded-sm w-full max-w-2xl shadow-sm my-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#403F3F] mb-10">
                    Register your account
                </h2>

                <div className="border-t border-[#E7E7E7] mb-10"></div>

                {/* Pass handleRegister and onError to handleSubmit */}
                <form onSubmit={handleSubmit(handleRegister)}>

                    {/* Name Field */}
                    <div className="form-control w-full mb-6">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Your Name</span>
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Enter your name"
                            className="input w-full bg-[#F3F3F3] border-none rounded-sm h-16 px-5 focus:outline-none"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                    </div>

                    {/* Photo URL Field */}
                    <div className="form-control w-full mb-6">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Photo URL</span>
                        </label>
                        <input
                            {...register("photoURL", { required: "Photo URL is required" })}
                            type="text"
                            placeholder="Enter your photo URL"
                            className="input w-full bg-[#F3F3F3] border-none rounded-sm h-16 px-5 focus:outline-none"
                        />
                        {errors.photoURL && <p className="text-red-500 text-sm mt-2">{errors.photoURL.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="form-control w-full mb-6">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">Email</span>
                        </label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Enter your email address"
                            className="input w-full bg-[#F3F3F3] border-none rounded-md h-16 px-5 focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
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
                            className="input w-full bg-[#F3F3F3] border-none rounded-md h-16 px-5 focus:outline-none"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
                    </div>

                    {/* Terms Checkbox */}
                    {/* <div className="flex flex-col mb-8">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <input
                                {...register("terms", { required: "You must accept terms" })}
                                type="checkbox"
                                id="terms"
                                className="checkbox checkbox-sm rounded-none border-[#403F3F]"
                            />
                            <label htmlFor="terms" className="label-text text-[#706F6F] font-medium cursor-pointer">
                                Accept <span className="font-bold">Term & Conditions</span>
                            </label>
                        </div>
                        {errors.terms && <p className="text-red-500 text-sm mt-2">{errors.terms.message}</p>}
                    </div> */}

                    <div className="form-control">
                        <button type="submit" className="btn btn-block bg-green-400 hover:bg-blue-400 text-white border-none rounded-md h-14 text-lg normal-case">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;