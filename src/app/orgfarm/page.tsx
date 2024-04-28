import React from 'react'
import { Navbar } from '../components/Navbar'

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <div className="flex items-center justify-center bg-cover bg-fixed" style={{ backgroundImage: `url('/farm.png')` }}>
        <h1 className="text-6xl text-white text-center">Welcome to organic farming!</h1>
        <input type="file" className="absolute bottom-10 left-1/2 transform -translate-x-1/2" />
      </div>
    </div>
  )
}

export default page
