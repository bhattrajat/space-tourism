import React, { useState } from 'react'
type PropsType = {
  data: any
}

const technology = [
  {
    name: 'Launch vehicle',
    images: {
      portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: './assets/technology/image-launch-vehicle-landscape.jpg',
    },
  },
  {
    name: 'Spaceport',
    images: {
      portrait: './assets/technology/image-spaceport-portrait.jpg',
      landscape: './assets/technology/image-spaceport-landscape.jpg',
    },
  },
  {
    name: 'Space capsule',
    images: {
      portrait: './assets/technology/image-space-capsule-portrait.jpg',
      landscape: './assets/technology/image-space-capsule-landscape.jpg',
    },
  },
]
const TabList = ({ data }: PropsType) => {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <picture className="lg:order-1">
        <source
          media="(min-width:1024px)"
          srcSet={technology[currentTab].images.portrait}
          width="400"
          height="410"
        />
        <img
          src={technology[currentTab].images.landscape}
          className="mt-6 w-full object-cover lg:w-auto"
          alt={technology[currentTab].name}
          width="375"
          height="170"
        />
      </picture>
      <div
        role="tablist"
        className="-order-1 mt-8 lg:flex lg:flex-col lg:gap-8"
      >
        {data.map((technology: any, idx: number) => {
          return (
            <button
              role="tab"
              key={idx}
              aria-selected={idx === currentTab}
              className={`mr-4 h-10 w-10 rounded-full border-2 border-white border-opacity-25 lg:h-20 lg:w-20 lg:text-3xl ${
                idx === currentTab ? 'bg-white text-black' : null
              } `}
              onClick={() => setCurrentTab(idx)}
            >
              <span className="sr-only">{technology.attributes.name}</span>
              {idx + 1}
            </button>
          )
        })}
      </div>
      <div className="mt-6 lg:max-w-md lg:text-left">
        <h2 className="uppercase lg:mb-3">The Terminology</h2>
        <h3 className="font-belleflair text-2xl uppercase lg:text-5xl">
          {data[currentTab].attributes.name}
        </h3>
        <p className="text-lg">{data[currentTab].attributes.description}</p>
      </div>
    </div>
  )
}

export default TabList
