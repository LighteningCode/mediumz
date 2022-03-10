import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

type ButtonType = {
    label: string,
    icon?: any;
}

const Button = ({ label, icon }: ButtonType) => {
    return (
        <button className="relative z-50 text-stone-500 flex flex-row justify-center bg-white transition-all duration-200  border border-stone-500 w-56  self-center rounded-full px-5 py-1.5 mb-3">
            <div className="self-center w-1/6">{icon && icon}</div>
            <span style={{fontSize: "14px"}} className="w-5/6 text-left self-center text-stone-700">{label}</span>
        </button>
    )
}

const SignIn: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Medium - Sign In</title>
                <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col bg-white h-screen w-screen px-72 py-28">

                <div className="h-full w-full border border-gray-50 shadow-md flex p-10 flex-col">

                    <h3 className="text-3xl self-center text-stone-800">Welcome back.</h3>

                    <div className="flex flex-col mt-24">
                        <Button
                            label="Sign In with Google"
                            icon={<Icon icon="flat-color-icons:google" fontSize={20} className="mr-2 my-1" />}
                        />
                        <Button
                            label="Sign In with Facebook"
                            icon={<Icon icon="logos:facebook" fontSize={20} className="mr-2 my-1" />}
                        />
                        <Button
                            label="Sign In with Apple"
                            icon={<Icon icon="logos:apple" fontSize={20} className="mr-2 my-1" />}
                        />
                        <Button
                            label="Sign In with Twitter"
                            icon={<Icon icon="logos:twitter" fontSize={20} className="mr-2 my-1" />}
                        />
                        <Button
                            label="Sign In with email"
                            icon={<Icon icon="fluent:mail-28-regular" fontSize={20} className="mr-2 my-1" />}
                        />
                    </div>

                    <p className="text-center mt-9">No account? <span className="text-green-600 font-bold">Create one</span></p>

                    <p className="text-center mt-9 text-stone-500 text-sm">Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that <br /> Medium’s Privacy Policy applies to you.</p>
                </div>


            </main>

        </div>
    )
}



export default SignIn