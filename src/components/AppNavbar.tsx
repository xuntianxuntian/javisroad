import React from 'react'

const AppNavbar = () => {
  return (
    <nav className='flex-grow bg-purple-200 flex items-center justify-between p-4'>
      <div>
        Search
      </div>
      <div>
        theme
      </div>
      <div>
        dashboard
      </div>
      <div className='pr-2'>
        User
      </div>
    </nav>
  )
}

export default AppNavbar