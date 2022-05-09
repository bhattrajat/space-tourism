import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import Nav from '../components/Nav'
import { useRouter } from 'next/router'

type navData = any

const routeBackgroungMapper = {
  '/': {
    mobile: 'bg-[url(/assets/home/background-home-mobile.jpg)]',
    desktop: 'lg:bg-[url(/assets/home/background-home-desktop.jpg)]',
  },
  '/destination': {
    mobile: 'bg-[url(/assets/destination/background-destination-mobile.jpg)]',
    desktop:
      'lg:bg-[url(/assets/destination/background-destination-desktop.jpg)]',
  },
  '/crew': {
    mobile: 'bg-[url(/assets/crew/background-crew-mobile.jpg)]',
    desktop: 'lg:bg-[url(/assets/crew/background-crew-desktop.jpg)]',
  },
  '/technology': {
    mobile: 'bg-[url(/assets/technology/background-technology-mobile.jpg)]',
    desktop:
      'lg:bg-[url(/assets/technology/background-technology-desktop.jpg)]',
  },
} as any
function MyApp({ Component, pageProps, navData }: AppProps & navData) {
  const router = useRouter()
  console.log(router.pathname)

  const bgClass = routeBackgroungMapper[router.pathname] || {
    mobile: 'bg-[url(/assets/home/background-home-mobile.jpg)]',
    desktop: 'lg:bg-[url(/assets/home/background-home-desktop.jpg)]',
  }
  console.log(bgClass)

  return (
    <div
      className={`min-h-screen bg-cover bg-no-repeat p-6 
      md:bg-[url(/assets/home/background-home-tablet.jpg)] 
     lg:p-10
        ${bgClass.mobile} ${bgClass.desktop}`}
    >
      <Nav navData={pageProps.navData} />
      <Component {...pageProps} />
    </div>
  )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)
  const res = await fetch(
    'http://localhost:1337/api/navigation-bars?populate=*'
  )
  const navData = await res.json()
  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      navData,
    },
  }
}
export default MyApp
