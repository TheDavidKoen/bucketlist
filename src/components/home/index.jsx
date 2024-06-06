import React from 'react'
import { useAuth } from '../../contexts/authContext'
import Write from '../Write'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14 flex flex-col items-center justify-center h-full'>
            <p className="text-center">
                Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.
            </p>
            <br/>
            <Write />
        </div>
    )
}

export default Home