import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
// import 'swiper/css/pagination'
import React from 'react'
const crewData = [
  {
    name: 'Douglas Hurley',
    images: {
      png: './assets/crew/image-douglas-hurley.png',
      webp: './assets/crew/image-douglas-hurley.webp',
    },
  },
  {
    name: 'Mark Shuttleworth',
    images: {
      png: './assets/crew/image-mark-shuttleworth.png',
      webp: './assets/crew/image-mark-shuttleworth.webp',
    },
  },
  {
    name: 'Victor Glover',
    images: {
      png: './assets/crew/image-victor-glover.png',
      webp: './assets/crew/image-victor-glover.webp',
    },
  },
  {
    name: 'Anousheh Ansari',
    images: {
      png: './assets/crew/image-anousheh-ansari.png',
      webp: './assets/crew/image-anousheh-ansari.webp',
    },
  },
]
const CrewSlider = ({ data }: any) => {
  console.log(data)
  const pagination = {
    clickable: true,
    bulletActiveClass: 'opacity-100',
    bulletClass:
      'w-3 inline-block h-3 rounded-full bg-white opacity-25 cursor-pointer',
    horizontalClass:
      'flex absolute top-60 lg:top-auto lg:bottom-20 w-full z-10 gap-2 justify-center lg:justify-start',
  }
  return (
    <Swiper className="mt-4" modules={[Pagination]} pagination={pagination}>
      {data.map((crew: any) => {
        return (
          <SwiperSlide
            key={crew.id}
            className="text-center text-white lg:text-left "
          >
            <div className="lg:flex">
              <img
                className="order-1 mx-auto mb-4 h-56 object-contain lg:h-[400px]"
                width="500"
                height="700"
                src={
                  crewData.find(({ name }) => name === crew.attributes.name)!
                    .images.webp
                }
                alt={crew.attributes.name}
              />
              <div className="lg:w-3/5">
                <h3 className="mt-10 mb-2 font-belleflair uppercase opacity-50 lg:text-3xl">
                  {crew.attributes.role}
                </h3>
                <h2 className="mb-4 font-belleflair text-2xl uppercase lg:text-6xl">
                  {crew.attributes.name}
                </h2>
                <p className="lg:max-w-md lg:text-lg">{crew.attributes.bio}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default CrewSlider
