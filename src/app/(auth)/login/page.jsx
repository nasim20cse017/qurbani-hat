'use client'

import Divider from '@/components/Divider';
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginPage = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleGoogle = async () => {
        try {
            await authClient.signIn.social({ provider: "google" });
        } catch (error) {
            toast.error("Google login failed!");
        }
    };

    const handleLogin = async (data) => {
        try {
            setLoading(true);

            const { email, password } = data;

            const { data: response, error } = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            console.log("Login Response:", response, error);

            if (error) {
                toast.error(error.message || "Login failed!");
                return;
            }

            if (response) {
                toast.success("Login Successful 🎉");

                setTimeout(() => {
                    router.push('/');
                }, 1200);
            }

        } catch (err) {
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-10 flex items-center justify-center bg-[#F3F3F3] font-sans">
            <div className="bg-white p-10 md:p-16 rounded-sm w-full max-w-2xl shadow-sm my-5">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#403F3F] mb-10">
                    Login to your account
                </h2>

                <div className="border-t border-[#E7E7E7] mb-10"></div>

                <form onSubmit={handleSubmit(handleLogin)}>

                    {/* Email */}
                    <div className="form-control w-full mb-6">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">
                                Email
                            </span>
                        </label>

                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Enter your email address"
                            className="input w-full bg-[#F3F3F3] border-none rounded-md h-16 px-5"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="form-control w-full mb-6 relative">
                        <label className="label p-0 mb-3">
                            <span className="label-text text-xl font-semibold text-[#403F3F]">
                                Password
                            </span>
                        </label>

                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Min length is 6" }
                            })}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="input w-full bg-[#F3F3F3] border-none rounded-md h-16 px-5 pr-12"
                        />

                        <button
                            type="button"
                            className="absolute right-4 top-[70%] -translate-y-1/2 text-gray-600 text-xl"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Register Link */}
                    <div className="flex justify-end items-center mb-8">
                        <span className="text-sm">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-blue-600 hover:underline">
                                Register
                            </Link>
                        </span>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-block bg-green-400 hover:bg-blue-400 text-white border-none rounded-md h-14 text-lg"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <Divider className="my-6" />

                    {/* Google Login */}
                   <Button color="default" variant="bordered" fullWidth onClick={handleGoogle}>
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign in with Google
        </Button>

                </form>
            </div>
        </div>
    );
};

export default LoginPage;