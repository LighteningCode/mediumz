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


const About: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Mediumz - Where copying finds you</title>
                <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />


            <section className="flex flex-col py-24 px-20 border border-stone-800">
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


            </main>
        </div>
    )
}

export default About