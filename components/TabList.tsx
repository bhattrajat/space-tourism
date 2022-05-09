import React, { useState } from 'react'
type PropsType = {
  data: {
    id: number
    attributes: {
      name: string
      description: string
      distance: string
      travel: string
    }
  }[]
}

const destinations = [
  {
    name: 'Moon',
    images: {
      png: './assets/destination/image-moon.png',
      webp: './assets/destination/image-moon.webp',
    },
  },
  {
    name: 'Mars',
    images: {
      png: './assets/destination/image-mars.png',
      webp: './assets/destination/image-mars.webp',
    },
  },
  {
    name: 'Europa',
    images: {
      png: './assets/destination/image-europa.png',
      webp: './assets/destination/image-europa.webp',
    },
  },
  {
    name: 'Titan',
    images: {
      png: './assets/destination/image-titan.png',
      webp: './assets/destination/image-titan.webp',
    },
  },
]
const TabList = ({ data }: PropsType) => {
  console.log(data)
  const [currentTab, setCurrentTab] = useState(0)
  const currentDestination = destinations[currentTab]
  return (
    <div className="lg:flex lg:justify-between">
      <div className="mt-8 flex justify-center lg:flex-grow-0">
        <img
          // className="h-full w-full"
          width="400"
          height="400"
          alt={currentDestination.name}
          src={currentDestination.images.webp}
        />
      </div>
      <div className="lg:w-2/5 lg:flex-grow-0">
        <div
          className="mt-6 flex justify-center gap-6 lg:justify-start"
          role="tablist"
        >
          {data.map((destination, idx) => {
            return (
              <button
                key={destination.id}
                type="button"
                role="tab"
                aria-selected={idx === currentTab}
                className={
                  idx === currentTab
                    ? 'border-b-2 border-white uppercase'
                    : 'uppercase'
                }
                onClick={() => setCurrentTab(idx)}
              >
                {destination.attributes.name}
              </button>
            )
          })}
        </div>
        {data.map((destination, idx) => {
          return idx === currentTab ? (
            <div className="mt-5 text-center lg:text-left">
              <h2 className="font-belleflair text-6xl uppercase leading-[64px]">
                {destination.attributes.name}
              </h2>
              <p className="leading-6 after:my-8 after:block after:h-px after:w-full after:bg-white">
                {destination.attributes.description}
              </p>
              <div className="md:flex md:justify-between">
                <h3 className="flex flex-col">
                  Average Distance:{' '}
                  <span className="font-belleflair text-3xl">
                    {destination.attributes.distance}
                  </span>
                </h3>
                <h3 className="flex flex-col">
                  Est. travel time{' '}
                  <span className="font-belleflair text-3xl">
                    {destination.attributes.travel}
                  </span>
                </h3>
              </div>
            </div>
          ) : null
        })}
      </div>
    </div>
  )
}

export default TabList
