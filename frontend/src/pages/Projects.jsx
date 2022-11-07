import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProjects, reset } from '../features/projects/projectSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import ProjectItem from '../components/ProjectItem'

function Projects() {
    const { projects, isLoading, isSuccess } = useSelector((state) => state.projects)


    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])


    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])


    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <div className='page'>
        <BackButton url='/'/>
            <h1>Your Projects</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    <div>Date</div>
                    <div>Project Name</div>
                    <div>Staus</div>
                </div>
                {projects.map((project) => (
                    <ProjectItem key={project._id} project={project}/>
                ))}
                
            </div>
            </div>
        </>
    )
}

export default Projects