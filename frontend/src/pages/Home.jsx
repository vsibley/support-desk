import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegFolderOpen, FaListUl } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Hero from '../components/Hero'

function Home() {
  const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)

  return (
    <>
    {user ? 
    <>
    <section className="heading">
        <h1>Hello, welcome</h1>
        <p>to the Social Assitant.</p>
        <h3>What are we working on today?</h3>

      </section>
      <Link to='/new-project' className='btn btn-reverse btn-block'> 
        <FaRegFolderOpen /> START NEW PROJECT
      </Link>
      <Link to='projects' className='btn btn-block'> 
        <FaListUl /> VIEW MY PROJECTS
      </Link>
      </>
    : <Hero />}
    </>
  )
}

export default Home