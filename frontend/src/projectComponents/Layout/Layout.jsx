import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col gap-3 h-screen">
    {" "}
    <header>
      <Navbar />
    </header>
    <main className="container mx-auto flex flex-col flex-grow pb-[100px]">
     {children}
    </main>
    <footer className="mt-auto w-full bg-neutral-700 sticky bottom-0">
      {" "}
      <Footer />
    </footer>
  </div>
  )
}

export default Layout