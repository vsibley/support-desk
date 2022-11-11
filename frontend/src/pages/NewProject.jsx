import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createProject, reset } from '../features/projects/projectSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'


function NewProject() {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.projects)

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('')
  const [desc, setDesc] = useState('')
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createProject({ product, description, desc }))
  }


  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate('/projects')
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])


  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className='page'>
        <BackButton url='/' />
        <section className="heading">
          <h1>Create a new project</h1>
          <p>Please fill out the form below</p>
        </section>

        <section className="form">
          {/* <div className="form-group">
            <label htmlFor="name">Influencer Name:</label>
            <input type="text" value={name} className="form-control" disabled />
          </div>
          <div className="form-group">
            <label htmlFor="email">Influencer Email</label>
            <input type="text" value={email} className="form-control" disabled />
          </div> */}

          <form onSubmit={onSubmit}>
            <div className="form-group">    
            
            <div className="form-group">
              <label htmlFor="desc">Name </label>
              <textarea name="desc" id="desc" className='form-control' placeholder='Desc' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
            </div>

              <label htmlFor="product">Platform</label>
              <select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
                <option value="Instagram">Instagram</option>
                <option value="TikTok">Tik-Tok</option>
                <option value="BeReel">BeReel</option>
                <option value="Pinterest">Pinterest</option>

              </select>
            </div>

            <div className="form-group">
              <label htmlFor="decription">Description </label>
              <textarea name="description" id="description" className='form-control' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
        
            
            <div className="form-group">
              <button className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default NewProject