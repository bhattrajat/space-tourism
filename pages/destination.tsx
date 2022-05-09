import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import TabList from '../components/TabList'

type PropsType = {
  data: any
}

type DestinationType = {
  id: number
  attributes: {
    name: string
    description: string
  }
}
const destination: NextPage<PropsType> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Destinations</title>
      </Head>
      <main className="mt-6 pb-8 text-white md:pb-0 lg:mx-20">
        <h1 className="text-center uppercase lg:text-left lg:text-2xl">
          <span aria-hidden="true" className="mr-4 opacity-25">
            01
          </span>{' '}
          Pick Your Destination
        </h1>
        <TabList data={data} />
      </main>
    </>
  )
}

export default destination

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/destinations')
  const data = await res.json()
  return {
    props: {
      data: data.data,
    },
  }
}
