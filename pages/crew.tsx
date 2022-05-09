import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import CrewSlider from '../components/CrewSlider'
type PagePropsType = {
  data: any
}
const crew: NextPage<PagePropsType> = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Crew</title>
      </Head>
      <main className="lg:px-20">
        <CrewSlider data={data} />
      </main>
    </>
  )
}

export default crew

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/crews')
  const data = await res.json()
  return {
    props: {
      data: data.data,
    },
  }
}
