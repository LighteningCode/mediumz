import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SupportWriters from '../assets/svg/support-writers';
import UnlimitedReading from '../assets/svg/unlimited-reading';
import { ArrowLeft, ArrowRight } from '../assets/svg/arrow';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Members = [
  {
    name: "Kayt Molina",
    comment: "I love Medium’s membership — it gives me access to the stories I love by the writers I love, and it allows me to help support those writers financially.",
    imageUrl: "/membership_3.png"
  },
  {
    name: "Joseph Coco",
    comment: "For me, the access to a variety of ideas and perspectives is invaluable. Medium brings people from all over into one shared space where we can grow and learn together.",
    imageUrl: "/membership_1.png"
  },
  {
    name: "T.S. Lowry",
    comment: "My favorite thing about a Medium membership is endlessly reading up-and-coming and well-known writers alike.",
    imageUrl: "/membership_2.png"
  },
]

function className(values: any) {
  return values
}

const Membership: NextPage = () => {

  const [selectedMemeber, setSelectedMemeber] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     nextMember()
  //   }, 5000);
  // }, [selectedMemeber]);

  const nextMember = () => {
    if (Members.length === selectedMemeber + 1) {
      setSelectedMemeber(0)
    } else {
      setSelectedMemeber(value => value + 1)
    }
  }

  const prevMember = () => {
    if (selectedMemeber === 0) {
      setSelectedMemeber(Members.length - 1)
    } else {
      setSelectedMemeber(value => value - 1)
    }
  }

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
        <title>Mediumz Membership: Get unlimited access to copy work</title>
        <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className={`fixed top-0 left-0 w-full z-50 ${atTop ? "bg-blue-500" : "bg-white"}`} />

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
              <UnlimitedReading />
              <p className="font-medium my-8 text-md leading-6 self-center">Enjoy unlimited access to every story across all of your devices.</p>
            </div>
            <div className="border-stone-800 w-1/2 py-10 px-10">
              <h1 className="text-5xl font-medium tracking-tight mb-10">Reward quality content.</h1>
              <SupportWriters />
              <p className="font-medium my-8 text-md leading-6 self-center">Your membership helps us pay writers, and keeps your experience ad-free.</p>
            </div>
          </div>

        </div>

        <div style={{ height: "400px" }} className="flex flex-col pt-20 pb-14 relative">
          <h3 className="text-center text-5xl mb-7">Why I&apos;m a Medium Member...</h3>


          <div style={{ height: "300px" }} className="absolute mt-8">
            {
              Members.map((value, idx) =>
                <Transition show={idx === selectedMemeber} key={idx} className="w-full h-full flex flex-row justify-start pt-5 mb-28">
                  <div className="w-1/2 h-full flex flex-row justify-end">
                    <Transition.Child
                      enter={" transition-all ease-in-out duration-500"}
                      leave={" transition-all ease-in-out duration-500"}
                      enterFrom="opacity-0 -translate-x-20 "
                      enterTo='opacity-100 translate-x-0'
                      leaveFrom='opacity-100 translate-x-0'
                      leaveTo='opacity-0 translate-x-20'
                      className="flex flex-row justify-end w-full h-full"
                    >
                      <div style={{ width: '300px', height: '300px', position: 'relative', marginRight: 30 }}>
                        <Image src={value?.imageUrl} layout="fill" objectFit="contain" className="mr-20 top-0 right-0 self-center" alt="testimony" />
                      </div>
                    </Transition.Child>
                  </div>
                  <div className="w-1/2 h-full">
                    <Transition.Child
                      enter={"transition-opacity duration-500 delay-200"}
                      leave={"transition-opacity duration-500 delay-200"}
                      enterFrom="opacity-0"
                      enterTo='opacity-100'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                      className="flex flex-col justify-center h-full"
                    >
                      <p className="text-xl font-medium mr-24">&quot;{value?.comment}&quot;</p>
                      <h5 className="text-2xl mt-5">{value?.name}</h5>
                      <div className="flex-row flex w-16 mt-8 justify-between ">

                        <button onClick={() => prevMember()}>
                          {
                            selectedMemeber !== 0 &&
                            <ArrowLeft />
                          }
                        </button>


                        <button onClick={() => nextMember()}>
                          {
                            selectedMemeber !== Members.length - 1 &&
                            <ArrowRight />
                          }
                        </button>

                      </div>
                    </Transition.Child>

                  </div>
                </Transition>
              )
            }
          </div>

        </div>

        <div className="flex flex-col border-t border-black py-12 bg-blue-200 relative">
          <h1 className="text-8xl font-medium tracking-tight text-center px-56 mb-10">Take your mind <br /> in new directions.</h1>
          <button className="relative z-50 text-white bg-black hover:bg-stone-800 transition-all duration-200  border w-64 text-xl self-center rounded-full px-3 py-2 mb-10">Get unlimited access</button>
          <Image src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg" alt="" layout='fill' className="absolute bottom-0 z-0 left-0"></Image>
        </div>


      </main>
      <Footer />
    </div>
  )
}


export default Membership