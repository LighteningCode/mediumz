import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className='flex flex-row  bg-yellow-400 border-b border-black'>
        <div className="w-1/2 px-14 py-12">
          <div>
            <h2 className='text-7xl'>Mediumz is a place to read,copy,and remake</h2>
            <p className='mb-10 mt-2 font-semibold text-stone-800'>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
            <span className="px-5 py-3 bg-white cursor-pointer rounded-full text-base font-thin text-stone-800 border border-stone-800">Start Writing</span>
          </div>

        </div>
        <div className="w-1/2 relative">
          <div className="absolute  -bottom-1.5 right-20">
            <Image src="/comma.png" alt="Comma" width={400} height={350} />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
