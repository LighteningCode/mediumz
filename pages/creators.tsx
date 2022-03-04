import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


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

const Question = ({ image, question, link, index, portfolio }: any) => {
    return (
        <div className={`flex flex-row h-26 w-full border-white border-b text-white px-10 py-2`}>
            <p className="font-medium my-8 text-lg leading-6 self-center">{question || "Default Question"}</p>

        </div>
    )
}

const Creators: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Creative Publising tools for publication and newsletters</title>
                <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar className="fixed top-0 left-0 w-full z-50" />

            <main className="flex flex-col">
                <div className="flex flex-col bg-red-500 border-b border-black pt-20">

                    <div className="flex flex-row">
                        <div className="flex flex-col w-3/5 pl-6 text-black">
                            <h1 className="text-8xl font-medium tracking-tight mb-14">Publish, grow, and earn, all in one place.</h1>
                            <p className="font-medium my-8 text-lg leading-6 self-center">If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Here, your writing can thrive in a network supported by millions of readers — not ads.</p>
                            <button className="border-white bg-white text-black hover:text-white hover:bg-transparent transition-all duration-150  border w-64 text-xl rounded-full px-3 py-2 mb-16">Start Writing</button>
                        </div>
                        <div className="w-2/5 border-l border-black">
                            <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/SupportWriters.svg" width="250" height="135" alt=""></img>
                        </div>
                    </div>


                    <div className="flex flex-row font-medium bg-black text-white border-t border-black">
                        <div className="border-black border-r w-1/2 py-10 px-10">
                            <h1 className="text-8xl font-medium tracking-tight mb-10">Join a network of curious minds.</h1>
                        </div>
                        <div className="border-stone-800 w-1/2 py-10 px-10">
                            {[0, 0, 0, 0, 0, 0].map((value, idx) =>
                                <Writer index={idx} />
                            )
                            }
                        </div>
                    </div>

                </div>

                <div className="flex flex-col bg-orange-200">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-1/2 pl-6 text-black justify-between">
                            <h1 className="text-8xl font-medium tracking-tight mb-14 mt-7">Create<br />  your  space.</h1>
                            <div>
                                <p className="text-lg font-medium mb-5 w-96">Tell your story your way — with different ways to write, style, and brand your work.</p>
                                <button className="relative z-50 text-white bg-black hover:bg-stone-800 transition-all duration-200  border w-64 text-xl self-center rounded-full px-3 py-2 mb-10">Start Writing</button>
                            </div>
                        </div>

                        <div className="flex flex-col w-1/2 pl-6 pt-10 text-black">
                            <img src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png" alt="create-space"></img>
                        </div>
                    </div>
                    <div className="flex flex-row border-t border-black">
                        <div className="flex flex-col w-1/2 pl-6 pt-10 text-black border-r border-black">
                            <h1 className="text-5xl font-medium tracking-tight mb-4">Start a blog.</h1>
                            <p className="text-lg font-medium mb-5">Create a blog for free to have a personalized home for your writing. <br /> Brand your space and share your writing with <br /> readers on any device.</p>
                        </div>

                        <div className="flex flex-col w-1/2 pl-6 pt-10 text-black">
                            <h1 className="text-5xl font-medium tracking-tight mb-4">Start a publication.</h1>
                            <p className="text-lg font-medium mb-5">Collaborate with others or publish under a brand name. <br /> Use our story submission system and expressive <br /> customization options.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col border-t border-black py-14 relative">
                    <h1 className="text-7xl font-medium tracking-tight text-center px-56 mb-10">Find and grow your <br /> audience.</h1>
                    <p className="text-base font-medium mb-5 text-center">With simple tools and features, you have the chance to connect with over 100 million curious readers.</p>
                </div>

                <div className="flex flex-row border-t border-black relative">
                    <div style={{ height: "510px" }} className="w-2/5 border-r border-black px-5 pt-5 relative">
                        <h1 className="text-4xl font-medium tracking-tight mb-14">Audience insights.</h1>
                        <p className="text-base font-medium mb-10">Use data to learn what resonates with your readers so you can keep growing your audience. </p>
                        <img style={{ zIndex: "-20" }} src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/creator-find-points-iphones.png" className="absolute -bottom-10" loading="lazy" width="335" alt=""></img>
                    </div>
                    <div className="w-4/5 grid grid-cols-6">
                        <div className="col-span-3 border-r border-black p-5">
                            <h1 className="text-4xl font-medium tracking-tight mb-10">Social connectivity.</h1>
                            <p className="text-lg font-medium mb-5">Find people you’re already connected with on Twitter and easily share your stories across platforms.</p>
                        </div>
                        <div className="col-span-3  border-black p-5">
                            <h1 className="text-4xl font-medium tracking-tight mb-10">Powerful network.</h1>
                            <p className="text-lg font-medium mb-5">Readers can discover and follow you easily with tailored feeds and recommendations.</p>
                        </div>
                        <div className="col-span-2 border-r border-t border-black p-5">
                            <h1 className="text-4xl font-medium tracking-tight mb-4">Email subscriptions.</h1>
                            <p className="text-lg font-medium mb-5">Reach readers by having your stories delivered straight to their inboxes.</p>
                        </div>
                        <div className="col-span-2 border-r border-t border-black p-5">
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
                    <div className="w-1/2 px-7">
                        <h3 style={{ fontSize: "78px" }} className="text-7xl tracking-tight mb-10">Earn money from your writing.</h3>
                        <p className="font-medium my-8 text-md leading-6 self-center mb-5 pr-48">Writing has its rewards when you join the Partner Program. Learn how to get paid for the content you publish and the audiences you build.</p>
                        <button className="relative z-50 text-white bg-black hover:bg-stone-800 transition-all duration-200  border w-64 text-xl self-center rounded-full px-3 py-2 mb-10">Learn more</button>
                    </div>
                    <div className="w-1/2 flex flex-row justify-center">

                    </div>
                    <img src="/cubes.png" alt="" className="absolute top-0 z-0 left-0"></img>
                </div>

                <div className="flex flex-col bg-black text-white relative border-black">
                    <h1 className="text-5xl px-10 font-medium tracking-tight mb-28 mt-8">More about writing on Medium:</h1>

                    {[0, 0, 0, 0, 0, 0].map((value, idx) =>
                        <Question index={idx} />
                    )}

                    <div className="flex flex-row justify-center my-7">
                        <span className="font-medium  text-2xl leading-6 self-center mr-3">Looking for help getting started?</span>
                        <button className="text-black bg-white hover:bg-black hover:text-white transition-all duration-200  border w-64 text-xl self-center rounded-full px-3 py-2">Check out our guide</button>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}


export default Creators