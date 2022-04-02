import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";
import { Transition } from '@headlessui/react'
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import SupportWriters from '../assets/svg/support-writers';
import UnlimitedReading from '../assets/svg/unlimited-reading';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Writer = ({ image, name, link, index, portfolio }: any) => {
    return (
        <div className={`flex flex-row h-26 w-full mx-4 border-stone-800 ${[0, 1, 2].includes(index) ? "border-y" : "border-b"} py-2`}>
            <Image src={image || "/placeholder.png"} className="object-cover rounded-full h-12 w-12" alt="Comma" width={30} height={30} />
            <div className="flex flex-col justify-center">
                <span className="ml-5 text-xl capitalize">{name || "No Name"}</span>
                <span className="ml-5 text-lg font-light uppercase">{portfolio || "No Portfolio"}</span>
            </div>
        </div>
    )
}

const WriterMobile = ({ image, name, link, index, portfolio }: any) => {
    return (
        <div className={`flex flex-row h-26 w-full px-4 border-stone-800 py-2 ${index === 0 ? "border-y" : "border-b"}  `}>
            <Image src={image || "/placeholder.png"} className="object-cover rounded-full h-12 w-12" alt="Comma" width={30} height={30} />
            <div className="flex flex-col justify-center">
                <span className="ml-5 text-xl capitalize">{name || "No Name"}</span>
                <span className="ml-5 text-lg font-light uppercase">{portfolio || "No Portfolio"}</span>
            </div>
        </div>
    )
}

const FooterLink = ({ to, label }: { to: any, label: any; }) => {
    return (
        <Link href={to || "#"} passHref>
            <span className="text-xs underline px-6 text-stone-700">
                {label}
            </span>
        </Link>
    )
}


const Members = [
    {
        name: "Joel Leon",
        comment: "Medium is trying to shift the paradigm. They’re catering to those looking for fresh, new, authentic voices. I believe wholeheartedly in their mission.",
        imageUrl: "/about_1.png"
    },
    {
        name: "Jackie Colburn",
        comment: "Medium is a great place to read and learn from a wide range of authors. It’s not muddied up by ads. It feels like one of the few pure places to go online.",
        imageUrl: "/about_2.png"
    },
    {
        name: "Jasmine Bina",
        comment: "There’s no other place that combines such an excellent level of writing with a truly engaged and active community. Medium is truly where ideas are born, shared, and spread.",
        imageUrl: "/about_3.png"
    },
]



const About: NextPage = () => {


    const [selectedMemeber, setSelectedMemeber] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            nextMember()
        }, 5000);
    }, [selectedMemeber]);

    const nextMember = useCallback(
        () => {
            if (Members.length === selectedMemeber + 1) {
                setSelectedMemeber(0)
            } else {
                setSelectedMemeber(value => value + 1)
            }
        },
        [selectedMemeber, Members],
    );

    const prevMember = useCallback(
        () => {
            if (selectedMemeber === 0) {
                setSelectedMemeber(Members.length - 1)
            } else {
                setSelectedMemeber(value => value - 1)
            }
        },
        [selectedMemeber, Members],
    );

    useEffect(() => {
        console.log("Selected member", selectedMemeber)
    }, [selectedMemeber]);


    const [atTop, setAtTop] = useState(true)

    useScrollPosition(
        ({ currPos }: any) => {
            setAtTop(currPos.y === 0)
        },
        [atTop],
        null,
        true,
        300
    )

    return (
        <div>
            <Head>
                <title>What is Mediumz?</title>
                <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar className={`fixed top-0 left-0 w-full z-50 ${atTop ? "bg-white" : "bg-white"}`} />


            <section className="flex flex-col pt-44 py-24 mobile:pb-5 mobile:pt-36 px-20 border-b mobile:border-b-0 border-stone-800">
                <h1 className="text-8xl font-medium tracking-tight mobile:text-4xl  text-center">Every idea needs a <span className="font-bold">Mediumz.</span> </h1>
            </section>

            <main className="flex flex-col">
                <div className="flex flex-row mobile:flex-col-reverse mobile:w-full font-medium">
                    <div className="border-stone-800 border-r mobile:w-full mobile:border-r-0 w-1/2 py-10 px-20 mobile:px-5">
                        <p className='mb-5'>The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.</p>
                        <p>We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.</p>
                    </div>
                    <div className="border-stone-800 w-1/2 mobile:w-full mobile:h-56 mobile:border-b">
                        <iframe src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" className='relative' frameBorder="0" allow="autoplay; fullscreen" ></iframe>
                    </div>
                </div>

                <div className="bg-orange-200">
                    <div className="border-t border-stone-800 pt-14 mobile:pt-6 pb-10 mobile:pb-2 flex flex-col ">
                        <h1 className="text-8xl mobile:text-3xl font-medium tracking-tight text-center px-44 mobile:px-5 mobile:text-left">A living network of copying minds.</h1>
                        <p className="font-medium my-8 text-lg leading-6 px-96 mobile:px-5 mobile:text-left mobile:text-base self-center text-center">Anyone can copy &amp; write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 my-7 mobile:hidden">
                        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((value, idx) =>
                            <Writer key={idx} index={idx} />)}
                    </div>
                    <div className="mobile:grid grid-cols-1 hidden px-4 gap-2 my-3">
                        {[0, 0, 0, 0].map((value, idx) =>
                            <WriterMobile key={idx} index={idx} />)}
                    </div>
                </div>


                <div className="flex flex-col text-white bg-black relative z-0">
                    <div className="flex flex-row mobile:flex-col font-medium">
                        <div className="border-white border-r mobile:border-r-0 w-1/2 mobile:w-full py-10 mobile:px-5 px-10">
                            <h1 className="text-8xl mobile:text-3xl mobile:pr-0 font-medium tracking-tight pr-28 mb-10">Over 100 million readers and growing.</h1>
                        </div>
                        <div className="border-stone-800 w-1/2 mobile:w-full mobile:h-64 mobile:mb-28 relative">
                            {
                                Members.map((value, idx) =>
                                    <div style={{ zIndex: 0 }} key={idx} className="absolute top-3 h-full w-full ml-8 mobile:ml-0 mobile:px-3">
                                        <Transition key={idx} show={idx === selectedMemeber} className="w-full h-full flex flex-col justify-center">
                                            <div className="w-1/2 flex flex-row h-full justify-end mt-16 mobile:mt-10 mobile:pr-20 mobile:w-full">
                                                <Transition.Child
                                                    enter=" transition-all ease-in-out duration-500"
                                                    leave=" transition-all ease-in-out duration-500"
                                                    enterFrom="opacity-0 "
                                                    enterTo='opacity-100 '
                                                    leaveFrom='opacity-100 '
                                                    leaveTo='opacity-0 '
                                                    className="flex flex-row justify-center w-full h-full mobile:h-60"
                                                >
                                                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                                        <Image src={value?.imageUrl} layout="fill" objectFit="contain" className="mr-10 self-center" alt="testimony" />
                                                    </div>
                                                </Transition.Child>
                                            </div>
                                            <div className=" h-full pr-28 mobile:pr-4">
                                                <Transition.Child
                                                    enter="transition-opacity duration-500"
                                                    leave="transition-opacity duration-500"
                                                    enterFrom="opacity-0"
                                                    enterTo='opacity-100'
                                                    leaveFrom='opacity-100'
                                                    leaveTo='opacity-0'
                                                >
                                                    <p className="text-2xl mobile:text-lg font-medium mt-10 mobile:mt-5">&quot;{value?.comment}&quot;</p>
                                                    <h5 className="text-2xl mt-5">{value?.name}</h5>
                                                </Transition.Child>

                                                <div className="flex-row flex w-16 mt-8 justify-between">
                                                    <button onClick={() => prevMember()}>
                                                        {
                                                            selectedMemeber !== 0 &&
                                                            <Image src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/arrow-left.svg" loading="lazy" width={22} height={13} alt="" />
                                                        }
                                                    </button>
                                                    <button onClick={() => nextMember()}>
                                                        {
                                                            selectedMemeber !== Members.length - 1 &&
                                                            <Image src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/arrow-right.svg" loading="lazy" width={22} height={13} alt="" />
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="border-t border-white pt-14 pb-5 flex flex-col  ">
                        <h1 className="text-8xl mobile:text-2xl mobile:px-5 font-medium mobile:text-left tracking-tight text-center px-44">Create the space for your thinking to take off.</h1>
                        <p className="font-medium my-8 text-lg leading-6 px-96 mobile:px-5 mobile:text-left self-center text-center">A blank page is also a door. At Medium you can walk through it. It&apos;s easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.</p>
                    </div>

                    <button className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-150  border w-56 text-xl self-center mobile:self-start mobile:ml-5 rounded-full px-3 py-2 my-5">Write on Mediumz</button>
                </div>

                <div className="flex relative flex-col z-40 bg-green-600 border-b border-black pt-10">
                    <div className=" pt-14 mobile:pt-0 pb-5 flex flex-col">
                        <h1 className="text-8xl mobile:text-2xl font-medium tracking-tight text-center mobile:text-left mobile:px-5 px-44">Get more with membership.</h1>
                        <p className="font-medium my-8 text-lg mobile:text-base leading-6 px-96 mobile:px-6 self-center mobile:text-left text-center">Become a Medium member to enjoy unlimited access for 3 bananas/month and directly support the writers you read most.</p>
                    </div>
                    <div className='mobile:px-5 self-center'>
                        <button className="border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-150  border w-64 mobile:w-full text-xl  rounded-full px-3 py-2 mb-16">See membership options</button>
                    </div>

                    <div className="flex flex-row mobile:flex-col font-medium border-t border-black">
                        <div className="border-black border-r mobile:border-r-0 mobile:border-b mobile:w-full w-1/2 py-10 mobile:px-5 px-10">
                            <h1 className="text-5xl mobile:text-2xl font-medium tracking-tight mb-10">Read as much as you want.</h1>
                            <UnlimitedReading />
                            <p className="font-medium my-8 text-md mobile:text-sm leading-6 self-center">Enjoy unlimited access to every story across all of your devices.</p>
                        </div>
                        <div className="border-stone-800 w-1/2 py-10 mobile:w-full  mobile:px-5  px-10">
                            <h1 className="text-5xl mobile:text-2xl font-medium tracking-tight mb-10">Reward quality content.</h1>
                            <SupportWriters />
                            <p className="font-medium my-8 text-md leading-6 self-center">Your membership helps us pay writers, and keeps your experience ad-free.</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-row bg-green-200 mobile:flex-col border-black pt-10">
                    <div className="w-1/2 mobile:w-full px-7">
                        <h3 style={{lineHeight: 0.85}} className="text-8xl mobile:text-3xl mb-10">Take Medium with you.</h3>
                        <p className="font-medium my-8 text-md leading-6 self-center mb-10 mobile:pr-0 pr-48">Download our app so you can read, write, and publish wherever you are.</p>
                        <div className="flex-row flex justify-between pr-48 mobile:pr-5 mb-10">
                            <button className='mr-5 mobile:mr-2'>
                                <Image src="/AppleStore_2x.png" loading="lazy" layout='intrinsic' width={580} height={180} alt="" />
                            </button>
                            <button>
                                <Image src="/PlayStore_2x.png" loading="lazy" layout='intrinsic' width={580} height={180} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 flex mobile:w-full flex-row mobile:h-80 justify-center relative">
                        <div className='absolute -bottom-1.5'>
                            <Image src="/creator-find-points-iphones.png" loading="lazy" layout='fixed' width={330} height={334} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mobile:flex-col border-black border-t">
                    <div className="w-1/2 px-7 py-5 border-r mobile:hidden border-black">
                        <h3 className="text-8xl mb-24">Learn more about us. Or join us.</h3>
                    </div>
                    <div className="w-1/2 flex mobile:w-full flex-col justify-center">
                        <div className="p-10 mobile:p-5">
                            <h4 className="text-4xl mobile:text-2xl">The Medium blog</h4>
                            <p className="font-medium mt-2 mb-40 mobile:mb-10 text-lg mobile:text-sm leading-6 self-center mobile:pr-0 pr-36">Visit our company blog for the latest news, product updates, and tips and tricks.</p>

                            <button className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-150  border w-56 text-xl self-center rounded-full px-3 py-2">Read our Blog</button>
                        </div>
                        <hr className="border-t border-black" />
                        <div className="p-10 mobile:p-5">
                            <h4 className="text-4xl mobile:text-2xl">Work at Medium</h4>
                            <p className="font-medium mt-2 text-lg mobile:text-sm leading-6 self-center mb-40 mobile:mb-10 mobile:pr-0 pr-36">Our team is home to engineers, journalists, artists, and creatives of all stripes.</p>
                            <button className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-150  border w-56 text-xl self-center rounded-full px-3 py-2">View open positions</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mobile:flex-col border-black border-t">
                    <div className="w-1/2 mobile:w-full px-7  py-5 border-r mobile:border-r-0 border-black">
                        <iframe src="https://player.vimeo.com/video/448735219?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen"></iframe>
                    </div>
                    <div className="w-1/2 mobile:w-full flex flex-col mobile:p-5 p-10">
                        <h3 className="text-8xl mobile:text-4xl mobile:mb-10 mb-24">Read, write, and expand your world.</h3>
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
