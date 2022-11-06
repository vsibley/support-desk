import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProject, reset } from '../features/projects/projectSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'


function Project() {
    const { project, isLoading, isSuccess, isError, message } = useSelector((state) => state.projects)

    const params = useParams()
    const dispatch = useDispatch()

    const { projectId } = useParams()

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
            <header className="ticker-header">
                <BackButton url='/projects' />
                <h2>Project ID: {project._id}
                    <span className={`status status-${project.status}`}>
                        {project.status}
                    </span>
                </h2>
                <h3>Start Date: {new Date(project.createdAt).toLocaleString('en-US')} </h3>
            <hr />
            <div className="ticket-desc">
                    <h3>Description: </h3>
                        <p>{project.description}</p>
            </div>
            </header>
        </div>
    )
}

export default Project