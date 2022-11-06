import {useState} from 'react'
import {useSelector} from 'react-redux'


function NewProject() {
  const {user} = useSelector((state) => state.auth)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault()

  }


  return (
    <>
      <section className="heading">
        <h1>Create a new project</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Influencer Name:</label>
          <input type="text" value={name} className="form-control" disabled/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Influencer Email</label>
          <input type="text" value={email} className="form-control" disabled/>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <label htmlFor="product">Product</label>
          <select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
            <option value="iPhone">iPhone</option>
            <option value="iPad">iPad</option>
            <option value="macBook">MacBook</option>

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
      </>
  )
}

export default NewProject