import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Link to="/" className='d-flex align-items-center justify-content-center'>
      <img src="https://s3-alpha.figma.com/hub/file/5942851849/0acc1f00-7e2c-4c73-9230-1225ae32f1aa-cover.png" alt="not found page" />
    </Link>
  )
}

export default NotFoundPage