import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link className='text-white text-2xl' to='/Register'>registerga o'tish</Link>
    </div>
  )
}

export default Home