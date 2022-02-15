import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

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
                <div className="flex flex-col bg-blue-500 border-b border-white pt-20">

                    <div className="py-20 flex flex-col">
                        <div className="flex flex-col text-white">
                            <h1 className="text-8xl font-medium tracking-tight text-center px-44">Fuel great thinking.</h1>
                            <p className="font-medium my-8 text-lg leading-6 px-96 self-center text-center">Upgrade to membership for 5 bananas/month or 50 bananas/year.</p>
                        </div>
                        <button className="border-white bg-white text-black hover:text-white hover:bg-transparent transition-all duration-150  border w-64 text-xl self-center rounded-full px-3 py-2 mb-16">Get unlimited access</button>
                    </div>


                    <div className="flex flex-row font-medium text-white border-t border-white">
                        <div className="border-white border-r w-1/2 py-10 px-10">
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
                    <h3 className="text-center text-3xl">Why I'm a Medium Member...</h3>

                    <div className='flex flex-row'>
                        <div className="w-2/5 flex flex-row">
                            <div className="w-24 h-24 bg-gray-500 rounded-full" />
                            <div className="w-24 h-24 bg-gray-500 rounded-full scale-90 rotate-45 skew-y-12" />
                            <div style={{borderRadius: "100%", rotate: "20deg", transform:"skewY(20deg) scale(.95) rotate(45deg);"}} className="w-20 h-24 bg-gray-500 scale-90" />
                        </div>
                        <div className="w-3/5"></div>
                    </div>
                </div>

                <div className="flex flex-col border-t border-black py-12 bg-blue-200 relative">
                    <h1 className="text-8xl font-medium tracking-tight text-center px-56 mb-10">Take your mind <br /> in new directions.</h1>
                    <button className="relative z-50 text-white bg-black hover:bg-stone-800 transition-all duration-200  border w-64 text-xl self-center rounded-full px-3 py-2 mb-10">Get unlimited access</button>
                    <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg" alt="" className="absolute bottom-0 z-0 left-0"></img>
                </div>


            </main>
            <Footer />
        </div>
    )
}


export default Membership