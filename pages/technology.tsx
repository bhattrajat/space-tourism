import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import TabList from '../components/technology/TabList'
type PagePropsType = {
  data: any
}

const Technology: NextPage<PagePropsType> = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Technology</title>
      </Head>
      <main className="mt-4 -ml-6 w-[calc(100%_+_48px)] text-center text-white lg:ml-10 lg:-mr-10 lg:w-auto">
        <h1 className="uppercase lg:text-left lg:text-3xl">
          <span aria-hidden="true" className="mr-4 opacity-25">
            03
          </span>
          Space Launch 101
        </h1>
        <TabList data={data} />
      </main>
    </>
  )
}

export default Technology

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/technologies')
  const data = await res.json()
  return {
    props: {
      data: data.data,
    },
  }
}
