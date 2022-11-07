import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import { RiCloseCircleLine } from 'react-icons/ri'
import { getProject, reset, closeProject } from '../features/projects/projectSlice'
import { getNotes, reset as notesReset, createNote } from '../features/notes/noteSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import NoteItem from '../components/NoteItem'
import Modal from 'react-modal'

const customStyles = {
    content: {
        width: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
    },
}


Modal.setAppElement('#root')

function Project() {
    const [modalisOpen, setModalisOpen] = useState(false)
    const [noteText, setNoteText] = useState('')

    const { project, isLoading, isSuccess, isError, message } = useSelector((state) => state.projects)
    const { notes, isLoading: notesIsLoading } = useSelector((state) => state.notes)

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { projectId } = useParams()

//Closing a project
    const onProjectClose = (e) => {
        dispatch(closeProject(projectId))
        toast.success('Your project has offically been closed')
        navigate('/projects')
    }

    //Open Modal 
    const openModal = () => setModalisOpen(true)
    const closeModal = () => setModalisOpen(false)

    // Submit Notes
    const onNoteSubmit = (e) =>{
        e.preventDefault()
        dispatch(createNote({noteText, projectId}))
        closeModal()
        
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        dispatch(getProject(projectId))
        dispatch(getNotes(projectId))
        //eslint-disable-next-line
    }, [isError, message, projectId])

    if (isLoading || notesIsLoading) {
        return <Spinner />
    }

    if (isError) {
        return (
            <h3>Something went wrong <br /> Please try your request again.</h3>
        )
    }

    return (
        <div className='ticket-page page'>
            <header className="ticket-header ">
                <BackButton url='/projects' />
                <h1 className='project-name'>Project Name: </h1>
                <h3 className=''> {project.desc}</h3>
                <h2>Start Date: {new Date(project.createdAt).toLocaleDateString('en-US')} </h2>
                <h2>Social Platform: {project.product}</h2>
                <h2>
                    Project ID: {project._id}
                    <span className={`status status-${project.status}`}>
                        {project.status}
                    </span>
                </h2>
                
            <hr />
            <div className="ticket-desc">
                    <h3>Description: </h3>
                        <p>{project.description}</p>
            </div>
            <h2>Notes:</h2>
            </header>

            {project.status !== 'closed' && (
                <button className="btn" onClick={openModal}>
                    <FaPlus /> Add Note
                    </button>
            )}

            <Modal isOpen={modalisOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Add Note'>
                <h2>Add Note</h2>
                <button className="btn-close" onClick={closeModal}>
                    <RiCloseCircleLine style={{color: 'red'}}/>
                </button>
                <form onSubmit={onNoteSubmit}>
                    <div className="form-group">
                        <textarea name="noteText" id="noteText" className='from-control' placeholder='Whats on your mind?' onChange={(e) => setNoteText(e.target.value)}>

                        </textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn" type='submit'> Submit</button>
                    </div>

                </form>
            </Modal>

            {notes.map((note) =>(
                <NoteItem key={note._id} note={note}/>
            ))}

            {project.status !== 'closed' && (
                <button className="btn btn-block btn-danger" onClick={onProjectClose}>
                    Close Project
                </button>
            )}
        </div>
    )
}

export default Project