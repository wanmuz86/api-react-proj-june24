import React from 'react'
import Search from './Search'
import Weather from './Weather'

const Main = () => {
  return (
    <div className='container py-3'>
        <Search/>
        <Weather/>
    </div>
  )
}

export default Main