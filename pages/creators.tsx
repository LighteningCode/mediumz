import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const faqdata = [
    {
        question: "How do I start writing on Medium?",
        answer: "First, make a free account. Then, to create a story, click on your profile picture in the top-right corner of the page, then “Write a Story.”"
    },
    {
        question: "How can I make money writing on Mediumz?",
        answer: "If you join the Medium Partner Program, you can earn money based on how much time members spend reading your work and whenever you convert non-paying readers into members."
    },
    {
        question: "Who writes on Mediumz?",
        answer: "Anyone can write on Medium. Whether you’ve never written before or are ready to create a full publication, it’s easy to get started and we allow you to focus more on big ideas and less on driving clicks. With the option to earn for your work, you can also be directly rewarded for the value you provide readers."
    },
    {
        question: "Do I need to be in the Partner Program to write on Medium?",
        answer: "No. You can write on Medium even if you are not in the Partner Program. If you are in the Partner Program you can also choose which of the stories you publish are eligible for the Program. For more about the Partner Program, click here."
    },
    {
        question: "What can I write about on Medium?",
        answer: "Medium’s designed for short stories that make someone’s day better, manifestos that change the world, and everything in between. It’s used by everyone from professional journalists to data scientists to amateur cooks. Whatever the topic, Medium helps you find the right audience for what you have to say."
    },
    {
        question: "Who can read the work I publish on Medium?",
        answer: "Anyone on the internet can read your stories. Even if your story is being distributed in the Partner Program as a part of our metered paywall, anyone can still read a limited number of articles for free each month. If you want to share an un-metered version of your story, you can use a Friend Link."
    },
    {
        question: "How can I grow my audience with Medium?",
        answer: "Medium has a number of tools to connect you with over 100 million readers on the platform and beyond. Some ways you can build your audience are by starting a newsletter, submitting to publications, following the distribution standards, and sharing your stories on social media. We also encourage you to check out our blog, 3 Minute Read, for more helpful tips and tricks – like how to write a great headline and SEO tips to make your stories more discoverable."
    },
]


const Writer = ({ image, name, link, index, portfolio }: any) => {
    return (
        <div className={`flex flex-row h-26 w-full border-stone-white ${index === 0 ? "border-y" : "border-b"} py-2`}>
            <img src={image || "/placeholder.png"} className="object-cover rounded-full h-12 w-12" alt="Comma" width={30} height={30} />
            <div className="flex flex-col justify-center">
                <span className="ml-5 text-xl capitalize">{name || "No Name"}</span>
                <span className="ml-5 text-lg font-light uppercase">{portfolio || "No Portfolio"}</span>
            </div>
        </div>
    )
}

const Question = ({ image, question, answer, link, index, portfolio }: any) => {

    const [show, setShow] = useState(false);

    return (
        <div onClick={() => setShow(!show)} className="group flex flex-col transition-all py-5  cursor-pointer border-white border-b">
            <div className={`flex flex-row h-26 w-full mobile:px-5 mobile:mb-4  text-white px-20 mb-8 `}>
                <p className="font-medium group-hover:underline text-xl leading-6 self-center mr-auto">{question || "Default Question"}</p>
                <Icon icon="bi:arrow-down" fontSize={25} rotate={show ? 2 : 0} />
            </div>

            {
                show &&
                <Transition
                    show={show}
                    enter={"transition-opacity duration-500 delay-200"}
                    leave={"transition-opacity duration-500 delay-200"}
                    enterFrom="opacity-0"
                    enterTo='opacity-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    className="px-20">
                    <p className="font-medium mb-4 text-base leading-6 self-center"> {answer || "No answer"}</p>
                </Transition>
            }

        </div>

    )
}


type AuthorType = {
    name: any
    image: any
    portfolio: any
}

const Creators: NextPage = ({ authors }: any) => {

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
                <title>Creative Publising tools for publication and newsletters</title>
                <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar className={`fixed top-0 left-0 w-full z-50 ${atTop ? "bg-red-orange" : "bg-white"}`} />

            <main className="flex flex-col">
                <div className="flex flex-col bg-red-orange border-b border-black pt-20">

                    <div className="flex flex-row mobile:flex-col">
                        <div className="flex flex-col mobile:w-full w-8/12 pl-6 mobile:px-4 mobile:pt-14 pt-10 text-black">
                            <p style={{ letterSpacing: "10px" }} className="font-medium text-sm uppercase tracking-widest leading-6 text-white">Start a blog today</p>
                            <h1 className="text-8xl mobile:text-3xl font-medium tracking-tight mb-5">Publish, grow, <br className='mobile:hidden' /> and earn, all in  <br className='mobile:hidden' />  one place.</h1>
                            <img src="./creators.png" className="h-auto w-full hidden mobile:flex"></img>
                            <p className="font-medium my-8 text-lg mobile:text-sm leading-6">If you have a story to tell, knowledge to share, or a perspective <br className='mobile:hidden' /> to offer — welcome home. Here, your writing can <br className='mobile:hidden' /> thrive in a network supported by millions of readers — not ads.</p>
                            <button className="border-white bg-white text-black hover:text-white hover:bg-transparent transition-all duration-150  border w-64 text-xl rounded-full px-3 py-2 mb-16">Start Writing</button>
                        </div>

                        <div className="w-4/12 border-l mobile:hidden border-black pt-10">
                            <img src="./creators.png" className="h-auto w-full"></img>
                        </div>
                    </div>


                    <div className="flex flex-row mobile:flex-col font-medium bg-black text-white border-t border-black">
                        <div className="border-black border-r w-1/2 mobile:w-full mobile:mb-0 mobile:pb-0 py-10 px-10">
                            <h1 className="text-8xl mobile:text-4xl font-medium tracking-tight mb-10">Join a network of curious minds.</h1>
                        </div>
                        <div className="border-stone-800 w-1/2 mobile:w-full mobile:py-3 mobile:px-5 py-10 px-10">
                            {
                                authors?.filter((_: any, idx: any) => idx < 6).map((data: AuthorType, idx: any) =>
                                    <Writer key={idx} index={idx} name={data?.name} image={data?.image} portfolio={data?.portfolio} />
                                )
                            }
                        </div>
                    </div>

                </div>

                <div className="flex flex-col bg-orange-200">
                    <div className="flex flex-row mobile:flex-col">
                        <div className="flex flex-col w-1/2 mobile:w-full mobile:pl-5 pl-6 text-black justify-between">
                            <h1 className="text-8xl mobile:text-4xl font-medium tracking-tight mb-14 mobile:mb-4 mt-7">Create<br className='mobile:hidden' />  your  space.</h1>
                            <p className="text-lg mobile:text-base font-medium mb-5 mobile:w-full w-96">Tell your story your way — with different ways to write, style, and brand your work.</p>
                            <button className="relative z-50 text-white bg-black hover:bg-stone-800 transition-all duration-200  border w-64 text-xl mobile:self-start self-center rounded-full px-3 mobile:px-0 py-2 mb-10">Start Writing</button>
                        </div>

                        <div className="flex flex-col mobile:w-full mobile:px-5 w-1/2 pl-6 pt-10 text-black">
                            <img src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png" alt="create-space"></img>
                        </div>
                    </div>

                    <div className="flex flex-row mobile:flex-col border-t border-black">
                        <div className="flex flex-col w-1/2 mobile:w-full pl-6 pt-10 mobile:pb-5 text-black border-r mobile:border-r-0 mobile:border-b border-black">
                            <h1 className="text-5xl mobile:text-4xl font-medium tracking-tight mb-4">Start a blog.</h1>
                            <p className="text-lg mobile:text-base font-medium mb-5">Create a blog for free to have a personalized home for your writing. <br className='mobile:hidden' /> Brand your space and share your writing with <br className='mobile:hidden' /> readers on any device.</p>
                        </div>

                        <div className="flex flex-col w-1/2 mobile:w-full mobile:pb-5 pl-6 pt-10 text-black">
                            <h1 className="text-5xl mobile:text-4xl font-medium tracking-tight mb-4">Start a publication.</h1>
                            <p className="text-lg mobile:text-base font-medium mb-5">Collaborate with others or publish under a brand name. <br className='mobile:hidden' /> Use our story submission system and expressive <br className='mobile:hidden' /> customization options.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col border-t border-black py-14 mobile:pb-8 relative">
                    <h1 className="text-7xl mobile:text-3xl font-medium tracking-tight text-center px-56 mobile:px-5 mb-10">Find and grow your <br /> audience.</h1>
                    <p className="text-base font-medium mb-5 mobile:px-5 text-center">With simple tools and features, you have the chance to connect with over 100 million curious readers.</p>
                </div>

                <div className="flex flex-row mobile:flex-col border-t border-black relative">
                    <div style={{ height: "510px" }} className="w-2/5 border-r mobile:w-full mobile:border-r-0 border-black px-5 pt-5 relative">
                        <h1 className="text-4xl font-medium tracking-tight mobile:mb-5 mb-14">Audience insights.</h1>
                        <p className="text-base font-medium mb-10 ">Use data to learn what resonates with your readers so you can keep growing your audience. </p>
                        <img style={{ zIndex: "-20" }} src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/creator-find-points-iphones.png" className="absolute -bottom-10" loading="lazy" width="335" alt=""></img>
                    </div>

                    <div className="w-4/5 grid grid-cols-6 mobile:w-full mobile:bg-white mobile:border-t mobile:border-black mobile:grid-cols-1">
                        <div className="col-span-3 border-r mobile:border-b mobile:border-r-0 border-black p-5">
                            <h1 className="text-4xl font-medium tracking-tight mb-10">Social connectivity.</h1>
                            <p className="text-lg font-medium mb-5">Find people you’re already connected with on Twitter and easily share your stories across platforms.</p>
                        </div>
                        <div className="col-span-3  border-black p-5">
                            <h1 className="text-4xl font-medium tracking-tight mb-10">Powerful network.</h1>
                            <p className="text-lg font-medium mb-5">Readers can discover and follow you easily with tailored feeds and recommendations.</p>
                        </div>
                        <div className="col-span-2 border-r border-t border-black p-5 mobile:border-r-0">
                            <h1 className="text-4xl font-medium tracking-tight mb-4">Email subscriptions.</h1>
                            <p className="text-lg font-medium mb-5">Reach readers by having your stories delivered straight to their inboxes.</p>
                        </div>
                        <div className="col-span-2 border-r border-t border-black p-5 mobile:border-r-0">
                            <h1 className="text-4xl font-medium tracking-tight mb-4">Interactive discussions.</h1>
                            <p className="text-lg font-medium mb-5">Build relationships with your readers through a threaded comments section.</p>
                        </div>
                        <div className="col-span-2  border-t border-black p-5">
                            <h1 className="text-4xl font-medium tracking-tight mb-4">Custom design.</h1>
                            <p className="text-lg font-medium mb-5">Easily customize your page to stand out and build your brand.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row bg-green-700 text-white relative border-black pt-10">
                    <div className="w-1/2 px-7 mobile:w-full">
                        <h3 className="text-7xl mobile:text-4xl tracking-tight mb-10">Earn money from your writing.</h3>
                        <p className="font-medium my-8 text-md leading-6 self-center mb-5 mobile:pr-0 pr-48">Writing has its rewards when you join the Partner Program. Learn how to get paid for the content you publish and the audiences you build.</p>
                        <button className="relative z-50 mobile:z-10 text-white bg-black hover:bg-stone-800 transition-all duration-200  border w-64 text-xl self-center rounded-full px-3 py-2 mb-10">Learn more</button>
                    </div>
                    <div className="w-1/2 flex flex-row mobile:hidden justify-center">

                    </div>
                    <img src="/cubes.png" alt="" className="absolute mobile:w-full mobile:h-full mobile:object-cover mobile:opacity-30 top-0 z-0 left-0"></img>
                </div>

                <div className="flex flex-col bg-black text-white relative border-white border-b transition-all">
                    <h1 className="text-5xl mobile:text-3xl mobile:px-5 px-10 font-medium tracking-tight mobile:mb-9 mb-28 mt-8">More about writing on Medium:</h1>

                    {faqdata.map((value, idx) =>
                        <Question key={idx} index={idx} {...value} />
                    )}

                    <div className="flex flex-row justify-center mobile:px-2 mobile:my-4 my-7">
                        <span className="font-medium  text-2xl mobile:text-lg leading-6 self-center mr-3">Looking for help getting started?</span>
                        <button className="text-black bg-white hover:bg-black hover:text-white transition-all duration-200  border w-64 text-xl mobile:text-base self-center rounded-full px-3 py-2">Check <span className="mobile:hidden">out</span>  our guide</button>
                    </div>
                </div>

            </main>
            <Footer className="text-white border-t border-white bg-black" />
        </div>
    )
}


Creators.getInitialProps = async () => {


    const query = `
    {
        authors{
          name
          image
          portfolio
        }
      }
    `

    try {
        const response = await fetch('https://mediumz-api.herokuapp.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: query })
        })

        const jsonResponse = await response.json()

        return { authors: jsonResponse.data.authors }
    } catch (err) {
        console.log("error")
    }

}


export default Creators