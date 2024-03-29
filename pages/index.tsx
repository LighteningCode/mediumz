import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";
import TrendingSvg from '../assets/svg/trending';
import MoreHorizontalSvg from '../assets/svg/more';
import BookmarkOutline from '../assets/svg/bookmark-outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useSession } from 'next-auth/react';
import { API_URL } from '../constants';


const trending: TrendingItemProps[] = [
  {
    name: "SundaeSwap Labs",
    image: "https://miro.medium.com/fit/c/40/40/1*8sy2fFc6Anumd2PscjsujQ@2x.png",
    title: "WEN SUNDAE? Thursday!",
    date: "Jan 15",
    time: "4",
  },
  {
    name: "Coinbase",
    image: "https://miro.medium.com/fit/c/40/40/1*4c7_SNuureECLAy7nW8TKQ.png",
    title: "Coinbase and Mastercard partner to revolutionize NFT purchase experience",
    date: "Jan 18",
    time: "2",
  },
  {
    name: "Donald G. McNeil Jr.",
    image: "https://miro.medium.com/fit/c/40/40/1*w4xWkbxe1SagK3TQkLmM5A.jpeg",
    title: "Trump Backs Boosters. Clearly, Someone Did the Math for Him.",
    date: "Jan 14",
    time: "3",
  },
  {
    name: "Matt Charnock in The Bold Italic",
    image: "https://miro.medium.com/fit/c/40/40/1*tiD8iavA0UI9xLmR1mhLiA.png",
    title: "Trump Backs Boosters. Clearly, Someone Did the Math for Him.",
    date: "Jan 20",
    time: "3",
  },
  {
    name: "JavaScript in Plain English",
    image: "https://miro.medium.com/fit/c/40/40/1*iETPsI-y6GMmx-AJEQRBnw@2x.png",
    title: "5 Weird Signs of an Inexperienced Self-Taught Programmer",
    date: "Jan 8",
    time: "4",
  },
  {
    name: "Hans van de Bruggen",
    image: "https://miro.medium.com/fit/c/40/40/1*mDhF9X4VO0rCrJvWFatyxg.png",
    title: "I made a prototype. Elon Musk didn’t like it. Then the internet went nuts.",
    date: "Jan 16",
    time: "5",
  },
]

const LINKS = [
  { label: "Help", href: "#" },
  { label: "Status", href: "#" },
  { label: "Writers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "About", href: "#" },
  { label: "Knowledgable", href: "#" },
]

interface TrendingItemProps {
  number?: any,
  name?: any,
  title?: any,
  date?: any,
  time?: any,
  image?: any;
}

interface ArticlePostProps {
  authorName?: any,
  title?: any,
  subTitle?: any,
  date?: any,
  time?: any,
  authorImg?: any;
  postImg?: any;
  mainTopic?: any;
}

function TrendingItem({ number, name, title, date, time, image }: TrendingItemProps) {
  return (
    <div className="flex flex-row col-span-1">
      <div className='w-2/12 flex flex-row justify-center'>
        <span className="font-black text-2xl text-stone-300">{number}</span>
      </div>
      <div className='w-10/12 flex flex-col'>
        <div className="flex flex-row mb-2 ">
          <div className="h-5 w-5 object-cover">
            <img src={image || "/placeholder.png"} className="object-cover rounded-full" alt="Comma" width={20} height={20} />
          </div>
          <span className='ml-2 text-xs self-center'>{name || "Nothing"}</span>
        </div>
        <p className="text-base font-bold text-stone-800 mb-3">{title || "No Title"}</p>
        <small className="text-sm text-stone-500">{date || "Jan 15"} · {time} min read</small>
      </div>
    </div>
  )
}

const TextPill = ({ text }: { text: any }) => (
  <span className="py-1.5 px-3 mobile:hidden mobile:py-1 bg-stone-100 rounded-full text-stone-500 text-xs">{text}</span>
)

const TextIdea = ({ text }: { text: any }) => (
  <span style={{ fontSize: "13px" }} className="textidea">{text}</span>
)

function ArticlePost({ authorName, title, date, time, authorImg, subTitle, mainTopic, postImg }: ArticlePostProps) {
  return (
    <div className="w-full flex flex-row my-4 mobile:my-5">
      <div className="w-8/12 flex flex-col justify-center">
        <div className="flex flex-row mb-2 ">
          <div className="h-5 w-5 object-cover">
            <img src={authorImg || "/placeholder.png"} className="object-cover rounded-md w-full h-full" alt="Comma" width={20} height={20} />
          </div>
          <span className='ml-2 text-xs self-center'>{authorName || "Nothing"}</span>
        </div>

        <p className="m-0 text-xl mobile:text-sm font-semibold mb-1 text-stone-800">{title || "No Title"}</p>
        <p className="m-0 text-sm mobile:hidden text-gray-500 mb-3">{subTitle || " "}</p>

        <div className="flex flex-row justify-between mobile:mt-2">
          <small className="text-sm mobile:text-xs text-stone-500">{date || "No Date"} · {time || 0} min read {mainTopic && <> · <TextPill text={mainTopic} /> </>}  </small>
          <div className="flex flex-row cursor-pointer">
            <BookmarkOutline className="mx-1 hover:text-gray-100" />
            <MoreHorizontalSvg className="mx-1 mobile:hidden" />
          </div>
        </div>
      </div>
      <div className="w-4/12 px-5 mobile:px-1">
        <img src={postImg || "/placeholder.png"} className="object-cover w-36 h-36 mobile:w-36 mobile:h-28" alt="Comma" />
      </div>
    </div>
  )
}

type articlesType = {
  title: any;
  subTitle: any;
  tags: any;
  image: any;
  readTime: any;
  date: any;
  author: {
    name: any
    image: any
  }
}

interface articles {
  articles: articlesType[]
}

const Home: NextPage = ({ articles }: any) => {

  const [atTop, setAtTop] = useState(true)

  const { data: session } = useSession()

  useEffect(() => {

    console.log(session)

  }, [session]);

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
        <title>Mediumz - Where copying finds you</title>
        <meta name="description" content="This is a copy/clone of Medium, please dont sue :'(" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className={`fixed top-0 left-0 w-full z-50 ${atTop ? "bg-yellow-400" : "bg-white"}`} />

      <section className='flex flex-row mobile:flex-col mobile:pt-24 pt-20  bg-yellow-400 border-b border-black'>
        <div className="w-1/2 px-14 mobile:px-6 mobile:w-full py-12">
          <div>
            <h2 className='text-7xl mobile:text-5xl'>Mediumz is a place to read,copy,and remake</h2>
            <p className='mb-10 mt-2 font-semibold text-stone-800'>It&apos;s easy and free to post your thinking on any topic and connect with millions of readers.</p>
            <span className="px-5 py-3 bg-white cursor-pointer rounded-full text-base font-thin text-stone-800 border border-stone-800">Start Writing</span>
          </div>

        </div>
        <div className="w-1/2 relative mobile:hidden">
          <div className="absolute  -bottom-1.5 right-20">
            <Image src="/comma.png" alt="Comma" width={400} height={350} />
          </div>
        </div>
      </section>

      <section className="flex flex-col py-8 px-20 mobile:px-5 border border-gray-200">
        <div className="flex flex-row mb-5">
          <TrendingSvg />
          <p className='uppercase text-sm self-center ml-2 text-stone-700 font-semibold '>Trending On Medium</p>
        </div>
        <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-2 gap-4">
          {
            trending.map((value, idx) =>
              <TrendingItem
                key={idx}
                number={`0${idx + 1}`}
                name={value?.name}
                date={value?.date}
                time={value?.time}
                title={value?.title}
                image={value?.image}
              />
            )
          }
        </div>
      </section>

      <main className="flex flex-row mobile:flex-col-reverse py-10">
        <div className="w-7/12 mobile:w-full mobile:px-5 px-16">
          {
            articles?.map((data: articlesType, idx: number) =>
              <ArticlePost
                key={idx}
                title={data?.title}
                date={data?.date}
                subTitle={data?.subTitle}
                time={data?.readTime}
                authorName={data?.author?.name}
                authorImg={data?.author?.image}
                mainTopic={data?.tags[0] || null}
                postImg={data?.image}
              />
            )
          }

        </div>
        <div className="w-5/12 flex flex-col mobile:w-full mobile:px-0">
          <div className="flex flex-col px-20 sticky mobile:px-0 top-10">
            <p className="mx-0 mb-3 text-xs font-bold mobile:px-4">DISCOVER MORE OF WHAT MATTERS TO YOU</p>

            <div className="flex flex-row flex-wrap mobile:px-4 w-full">
              <TextIdea text={"Relationships"} />
              <TextIdea text={"Data Science"} />
              <TextIdea text={"Programming"} />
              <TextIdea text={"Productivity"} />
              <TextIdea text={"Javascript"} />
              <TextIdea text={"Machine Learning"} />
              <TextIdea text={"Self"} />
              <TextIdea text={"Politics"} />
              <TextIdea text={"Technology"} />
              <TextIdea text={"Health"} />
            </div>

            <hr className="border-t border-stone-300 my-5" />

            <div className="flex flex-row flex-wrap w-full mobile:px-4 mobile:hidden pr-6">
              {
                LINKS.map((value, indx) =>
                  <Link key={indx} href={value.href}>
                    <p className="text-stone-500 text-sm mr-4 mb-3 font-normal cursor-pointer hover:text-stone-700">{value.label}</p>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  let data = null

  const query = `
  {
    articles{
      title
      subTitle 
      tags
      image
      readTime
      date
      author{
        name
        image
      }
    }
  }
  `

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: query })
    })

    const jsonResponse = await response.json()

    data = jsonResponse.data.articles

    return {
      props: { articles: data }, // will be passed to the page component as props
    }


  } catch (err) {
    console.log("error")
  }


}


export default Home
