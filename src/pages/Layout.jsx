import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import { assets } from '../assets/assets'
import SideBar from '../components/SideBar'
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const { user } = useUser()

  return user ? (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-300">
        <img
          src={assets.logo}
          alt="Logo"
          className="cursor-pointer h-10 w-32 sm:w-42"
          onClick={() => navigate('/')}
        />
        {sidebar ? (
          <X
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
            onClick={() => setSidebar(true)}
          />
        )}
      </nav>

      {/* Main layout */}
      <div className="flex flex-1 w-full h-[calc(100vh-56px)]">
        {/* Sidebar */}
        <SideBar sidebar={sidebar} setSidebar={setSidebar} />
        {/* Page Content */}
        <div className="flex-1 bg-[#F4F7FB] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  )
}

export default Layout
