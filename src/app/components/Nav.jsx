import React from 'react'

function Nav() {
  return (
    <div>
      <ul className='flex items-center justify-center py-4 bg-[#333] text-white font-semiblod space-x-6'>
        <li className='hover:underline'>Home</li>
        <li className='hover:underline'>About</li>
        <li className='hover:underline'>Blog</li>
        <li className='hover:underline'>Contact</li>
      </ul>
    </div>
  )
}

export default Nav
