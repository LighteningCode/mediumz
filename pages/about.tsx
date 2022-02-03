import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import TrendingSvg from '../assets/svg/trending';
import MoreHorizontalSvg from '../assets/svg/more';
import BookmarkOutline from '../assets/svg/bookmark-outline';
import Link from 'next/link';

const Writer = ({ image, name, link }: any) => {
    return (
        <div className="flex flex-row h-full w-full border-stone-800 border-y py-5">
            <img src={image || "/placeholder.png"} className="object-cover rounded-full" alt="Comma" width={30} height={30} />
            <span className="ml-5">{name || "No Writer"}</span>
        </div>
    )
}

const FooterLink = ({ to, label }: { to: any, label: any; }) => {
    return (
        <Link href={to || "#"}>
            <span className="text-xs underline px-6 text-stone-700">
                {label}
            </span>
        </Link>
    )
}



const About: NextPage = () => {
    return (
        <div>
            <Head>
                <title>What is Mediumz?</title>
                <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar className="fixed top-0 left-0 w-full z-50"  />


            <section className="flex flex-col pt-44 py-24 px-20 border-b border-stone-800">
                <h1 className="text-8xl font-medium tracking-tight  text-center">Every idea needs <span className="font-bold">Mediumz.</span> </h1>
            </section>

            <main className="flex flex-col">
                <div className="flex flex-row font-medium">
                    <div className="border-stone-800 border-r w-1/2 py-10 px-20">
                        <p className='mb-5 '>The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.</p>
                        <p>We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.</p>
                    </div>
                    <div className="border-stone-800 w-1/2">
                        <iframe src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" className='relative' frameBorder="0" allow="autoplay; fullscreen" ></iframe>
                    </div>
                </div>

                <div>
                    <div className="border-t border-stone-800 pt-14 pb-10 flex flex-col ">
                        <h1 className="text-8xl font-medium tracking-tight text-center px-44">A living network of copying minds.</h1>
                        <p className="font-medium my-8 text-lg leading-6 px-96 self-center text-center">Anyone can copy & write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 my-0">
                        {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((value, idx) =>
                            <Writer />
                        )
                        }
                    </div>
                </div>

                <div className="flex flex-col text-white bg-black py-10">
                    <div className="flex flex-row font-medium ">
                        <div className="border-white border-r w-1/2 py-10 px-10">
                            <h1 className="text-8xl font-medium tracking-tight pr-36">Over 100 million readers and growing.</h1>
                        </div>
                        <div className="border-stone-800 w-1/2">

                        </div>
                    </div>
                    <div className="border-t border-white pt-14 pb-5 flex flex-col ">
                        <h1 className="text-8xl font-medium tracking-tight text-center px-44">Create the space for your thinking to take off.</h1>
                        <p className="font-medium my-8 text-lg leading-6 px-96 self-center text-center">A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.</p>
                    </div>

                    <button className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-150  border w-56 text-xl self-center rounded-full px-3 py-2">Write on Mediumz</button>
                </div>

                <div className="flex flex-col bg-green-500 border-b border-black pt-10">
                    <div className=" pt-14 pb-5 flex flex-col ">
                        <h1 className="text-8xl font-medium tracking-tight text-center px-44">Get more with membership.</h1>
                        <p className="font-medium my-8 text-lg leading-6 px-96 self-center text-center">Become a Medium member to enjoy unlimited access for 3 bananas/month and directly support the writers you read most.</p>
                    </div>
                    <button className="border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-150  border w-64 text-xl self-center rounded-full px-3 py-2 mb-16">See membership options</button>

                    <div className="flex flex-row font-medium border-t border-black">
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
                <div className="flex flex-row bg-green-200  border-black pt-10">
                    <div className="w-1/2 px-7">
                        <h3 className="text-8xl mb-24">Take Medium with you.</h3>
                        <p className="font-medium my-8 text-md leading-6 self-center mb-10 pr-48">Download our app so you can read, write, and publish wherever you are.</p>
                        <div className="flex flex-row">
                            <a href="https://apps.apple.com/us/app/medium/id828256236" target="_blank" className="mr-10"><img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/AppleStore_2x.png" width="167" alt="" /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.medium.reader&amp;hl=en_US" target="_blank" className="w-inline-block"><img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/PlayStore_2x.png" width="167" alt="" /></a>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-row justify-center">
                        <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/About_iPhone_screen.png" srcSet="https://cdn-static-1.medium.com/sites/medium.com/about/images/About_iPhone_screen-p-500.png 500w, https://cdn-static-1.medium.com/sites/medium.com/about/images/About_iPhone_screen.png 668w" sizes="(max-width: 479px) 85vw, (max-width: 767px) 44vw, 334px" width="334" alt="" />
                    </div>
                </div>
                <div className="flex flex-row  border-black border-t">
                    <div className="w-1/2 px-7 py-5 border-r border-black">
                        <h3 className="text-8xl mb-24">Learn more about us. Or join us.</h3>
                    </div>
                    <div className="w-1/2 flex flex-col  justify-center">
                        <div className="p-10">
                            <h4 className="text-4xl">The Medium blog</h4>
                            <p className="font-medium mt-2 mb-40 text-lg leading-6 self-center pr-36">Visit our company blog for the latest news, product updates, and tips and tricks.</p>

                            <button className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-150  border w-56 text-xl self-center rounded-full px-3 py-2">Read our Blog</button>
                        </div>
                        <hr className="border-t border-black" />
                        <div className="p-10">
                            <h4 className="text-4xl">Work at Medium</h4>
                            <p className="font-medium mt-2 text-lg leading-6 self-center mb-40 pr-36">Our team is home to engineers, journalists, artists, and creatives of all stripes.</p>
                            <button className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-150  border w-56 text-xl self-center rounded-full px-3 py-2">View open positions</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row  border-black border-t">
                    <div className="w-1/2 px-7 py-5 border-r border-black">
                        <iframe src="https://player.vimeo.com/video/448735219?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen"></iframe>
                    </div>
                    <div className="w-1/2 flex flex-col p-10">
                        <h3 className="text-8xl mb-24">Read, write, and expand your world.</h3>
                        <button className="bg-green-500 text-white hover:bg-green-800 hover:text-white transition-all duration-150  border w-44 text-xl rounded-full px-7 py-1">Get Started</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center  py-7 border-black border-t">
                    <div className="self-center mb-5">
                    <h2 className="text-3xl font-bold">Mediumz</h2>
                    </div>
                    <div className="flex self-center flex-row">
                        <FooterLink to={"#"} label="Terms" />
                        <FooterLink to={"#"} label="Privacy" />
                        <FooterLink to={"#"} label="Help" />
                    </div>
                </div>


            </main>
        </div>
    )
}

export default About
