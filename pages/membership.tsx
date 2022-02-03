import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import TrendingSvg from '../assets/svg/trending';
import MoreHorizontalSvg from '../assets/svg/more';
import BookmarkOutline from '../assets/svg/bookmark-outline';
import Link from 'next/link';

const Membership: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Mediumz Membership: Get unlimited access to copy work</title>
                <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar className="fixed top-0 left-0 w-full z-50" />

            <main className="flex flex-col">
                <div className="flex flex-col bg-blue-500 border-b border-black pt-20">

                    <div className="py-20 flex flex-col">
                        <div className="flex flex-col text-white">
                            <h1 className="text-8xl font-medium tracking-tight text-center px-44">Fuel great thinking.</h1>
                            <p className="font-medium my-8 text-lg leading-6 px-96 self-center text-center">Upgrade to membership for 5 bananas/month or 50 bananas/year.</p>
                        </div>
                        <button className="border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-150  border w-64 text-xl self-center rounded-full px-3 py-2 mb-16">Get unlimited access</button>
                    </div>


                    <div className="flex flex-row font-medium text-white border-t border-black">
                        <div className="border-black border-r w-1/2 py-10 px-10">
                            <h1 className="text-5xl font-medium tracking-tight mb-10">Read as much as you want.</h1>
                            <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/UnlimitedReading.svg" width="260" height="135" alt=""></img>
                            <p className="font-medium my-8 text-md leading-6 self-center">Enjoy unlimited access to every story across all of your devices.</p>
                        </div>
                        <div className="border-stone-800 w-1/2 py-10 px-10">
                            <h1 className="text-5xl font-medium tracking-tight mb-10">Reward quality content.</h1>
                            <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/SupportWriters.svg" width="250" height="135" alt=""></img>
                            <p className="font-medium my-8 text-md leading-6 self-center">Your membership helps us pay writers, and keeps your experience ad-free.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col">
                    <h3 className="text-center text-2xl">Why I'm a Medium Member...</h3>
                </div>

                <div className="flex flex-col border-t border-black py-12 relative">
                    <h1 className="text-8xl font-medium tracking-tight text-center px-56 mb-10">Take your mind <br /> in new directions.</h1>
                    <button className="border-white text-white bg-black hover:bg-white hover:text-gray-800 transition-all duration-150  border w-64 text-xl self-center rounded-full px-3 py-2 mb-10">Get unlimited access</button>
                    <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg" alt="" className="absolute bottom-0 left-0"></img>
                </div>


            </main>
        </div>
    )
}


export default Membership