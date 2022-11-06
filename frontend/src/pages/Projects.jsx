import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProjects, reset } from '../features/projects/projectSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

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
        <div>
            Projects
        </div>
    )
}

export default Projects