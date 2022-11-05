import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegFolderOpen, FaListUl } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What are we working on today?</h1>
        <p>Please choose from one of the options</p>
      </section>
      <Link to='/new-project' className='btn btn-reverse btn-block'> 
        <FaRegFolderOpen /> START NEW PROJECT
      </Link>
      <Link to='projects' className='btn btn-block'> 
        <FaListUl /> VIEW MY PROJECTS
      </Link>
      </>
  )
}

export default Home