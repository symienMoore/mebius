import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='w-full h-10 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md flex text-white'>
            <ul className='flex flex-row items-center '>
                <li className='ml-20'>Mebius</li>
                <div className='flex flex-row ml-96'>
                    <li className='ml-20'>login</li>
                    <li className='ml-5'>sign up</li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar