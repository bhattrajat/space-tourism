import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type navProps = {
  navData: any
}
const Nav = ({ navData }: navProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const navItems = navData.data.map((link: any) => {
    const item = link.attributes.NavItem
    return {
      ...item,
    }
  })
  console.log(router.pathname)
  return (
    <header className="flex items-center justify-between before:relative before:left-8 before:z-10 before:hidden md:justify-between md:before:order-1 md:before:block md:before:h-px md:before:flex-grow md:before:bg-white">
      <div className="relative h-10 w-10 rounded-full bg-white">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
          className="h-full w-full"
        />
      </div>
      <button
        className="md:hidden"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <span className="sr-only">Open Menu</span>
        <img src="/assets/shared/icon-hamburger.svg" />
      </button>
      <div
        className={`fixed inset-0 z-50 flex justify-end text-white transition-transform duration-300 md:static
        md:order-2 md:flex md:translate-x-0 md:items-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex w-2/3 flex-col bg-white bg-opacity-[0.04] p-8 text-xl uppercase backdrop-blur-3xl md:w-auto md:flex-row md:p-0 md:text-base">
          <button
            type="button"
            className="mb-16 self-end md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close</span>
            <img src="/assets/shared/icon-close.svg" alt="" />
          </button>

          <ul className="gap-x-12 md:flex md:px-32">
            {navItems.map((link: any) => (
              <li
                className={`mb-8 md:mb-auto md:h-full md:py-9 ${
                  router.pathname === link.url ? 'md:border-b-4' : null
                } `}
                key={link.url}
              >
                <Link href={link.url}>
                  <a className="md:h-full md:w-full">
                    <span className="mr-2" aria-hidden="true">
                      {('0' + (link.id - 1)).slice(-2)}
                    </span>
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav
