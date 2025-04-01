import React from 'react'
import { useGetprofileQuery } from '../../redux/features/userApiSlice.js'
import {  useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    const {data:user} = useGetprofileQuery()
    if(!user){
        navigate('/login')
    }
    
  return (
    <div className='flex flex-col min-h-screen'>
        {children}
    </div>
  )
}

export default ProtectedRoute