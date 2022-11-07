import { Link } from 'react-router-dom'
import React from 'react'

function ProjectItem({project}) {
  return (
    <div className='ticket'>
        <div>{new Date(project.createdAt).toLocaleDateString('en-US')}</div>
        <div>{project.product}</div>
        <div className={`status status-${project.status}`}>
            {project.status}
        </div>
        <Link to={`/project/${project._id}`} className='btn btn-reverse btn-sm'> View
        </Link>
        </div>
  )
}

export default ProjectItem