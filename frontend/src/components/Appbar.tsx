import React from 'react'
import { Avatar } from './BlogCard'

const Appbar = () => {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
        <div>Medium</div>
        <div>
            <Avatar name="jai" size={"big"} />
        </div>
    </div>
  )
}

export default Appbar
