import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {toast} from 'react-toastify'


function Register() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match')
    }

  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit} >
          <div className="form-group">
            <input
              type="text"
              className='form-control'
              id='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              name='name'
              required
            />
          </div> 
          <div className="form-group">
            <input
              type="email"
              className='form-control'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your Email'
              name='email'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className='form-control'
              id='password'
              value={password}
              onChange={onChange}
              placeholder='Enter Password'
              name='password'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className='form-control'
              id='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm Password'
              name='password2'
              required
            />
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

export default Register