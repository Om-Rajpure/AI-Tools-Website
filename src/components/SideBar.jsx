import React from 'react'
import { useUser, useClerk, Protect } from '@clerk/clerk-react'
import { Eraser, FileText, Hash, House, Image, LogOut, Scissors, SquarePen, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
  { to: '/ai/profile', label: 'Profile', Icon: Users },
]

const SideBar = ({ sidebar, setSidebar }) => {
  const { user } = useUser()
  const { signOut, openUserProfile } = useClerk()

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center
        max-sm:absolute top-14 bottom-0 left-0
        ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} 
        transition-all duration-300 ease-in-out`}
    >
      {/* User Section */}
      <div className="my-7 w-full">
        {user && (
          <>
            <img
              src={user.imageUrl}
              alt="user avatar"
              className="w-14 h-14 rounded-full mx-auto"
            />
            <h1 className="mt-2 text-center font-medium">{user.fullName}</h1>

            <div className="mt-6 flex flex-col text-sm text-gray-600 font-medium gap-1">
              {navItems.map(({ to, label, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/ai'}
                  onClick={() => setSidebar(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 flex items-center gap-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#3C81F6] to-[#df16f5] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`w-4 h-4 ${
                          isActive ? 'text-white' : 'text-gray-600'
                        }`}
                      />
                      <span>{label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Buttons */}

    <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div onClick={() => openUserProfile()} className='flex gap-2 items-center cursor-pointer'>
        <img src={user.imageUrl} alt="user avatar" className="w-8 h-8 rounded-full" />
            <div>
                <h1 className="text-sm font-medium">{user.fullName}</h1>
                <p className="text-xs text-gray-500"> 
                    <Protect plan='premium' fallback='Free'> Premium </Protect>
                    Plan
                </p>
            </div>
        </div>
        <LogOut onClick={() => signOut()} className="w-5 h-5 text-gray-400 cursor-pointer
        hover:text-gray-700 transition" /> 

    </div>
    </div>
  )
}

export default SideBar
