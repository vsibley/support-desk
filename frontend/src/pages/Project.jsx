import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getProject, reset, closeProject } from '../features/projects/projectSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'



function Project() {
    const { project, isLoading, isSuccess, isError, message } = useSelector((state) => state.projects)

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { projectId } = useParams()

    const onProjectClose = (e) => {
        dispatch(closeProject(projectId))
        toast.success('Your project has offically been closed')
        navigate('/projects')
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        dispatch(getProject(projectId))
        //eslint-disable-next-line
    }, [isError, message, projectId])

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return (
            <h3>Something went wrong <br /> Please try your request again.</h3>
        )
    }

    return (
        <div className='ticket-page'>
            <header className="ticket-header">
                <BackButton url='/projects' />
                <h3>{project.product} - Project ID: {project._id}
                    <span className={`status status-${project.status}`}>
                        {project.status}
                    </span>
                </h3>
                <h3>Start Date: {new Date(project.createdAt).toLocaleString('en-US')} </h3>
            <hr />
            <div className="ticket-desc">
                    <h3>Description: </h3>
                        <p>{project.description}</p>
            </div>
            </header>
            {project.status !== 'closed' && (
                <button className="btn btn-block btn-danger" onClick={onProjectClose}>
                    Close Project
                </button>
            )}
        </div>
    )
}

export default Project