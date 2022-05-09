import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '../styles/markdown.module.css'
type PagePropsType = {
  children: ReactNode
  data: any
}
const Home: NextPage<PagePropsType> = ({ data }) => {
  const description = data.attributes.description
  const buttonText = data.attributes.buttonText
  console.log(data)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="prose prose-lg p-6 text-center prose-headings:text-white prose-h2:text-[#D0D6F9] prose-p:text-[#D0D6F9]">
        <ReactMarkdown components={{ h6: 'p' }}>{description}</ReactMarkdown>
      </main> */}
      <main className="mt-12 text-center lg:mt-16 lg:flex lg:justify-around lg:text-left">
        <ReactMarkdown
          className={`${styles.markdown} lg:w-[450px]`}
          components={{ h6: 'p' }}
        >
          {description}
        </ReactMarkdown>
        {/* after:absolute after:inset-0 after:-z-20 after:block after:rounded-full after:border-4 after:bg-[#979797] */}
        <Link href="/destination">
          <a className="relative z-20 mx-auto mt-20 flex h-36 w-36 flex-grow-0 items-center justify-center rounded-full bg-white font-belleflair text-xl text-black transition-transform after:absolute after:inset-0 after:block after:rounded-full after:border-4 after:bg-white after:opacity-20 after:transition-transform hover:after:scale-150 lg:mx-0 lg:h-64 lg:w-64 lg:text-3xl">
            {buttonText}
          </a>
        </Link>
      </main>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/home')
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data: data.data,
    },
  }
}
