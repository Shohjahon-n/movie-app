import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'
export default function ErrorPage() {
  return (
        <div className="error_content">
            <div>
            <p className='error'> 
                404 ERROR 
            </p>
            <p>
                back    <Link to={'login'}>Login</Link>
            </p>
            </div>
        </div>
  )
}
