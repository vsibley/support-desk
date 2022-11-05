import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'


function Login() {
  const [formData, setformData] = useState({
    email: '',
    password: '',

  })

  const {  email, password} = formData

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

   

  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to your account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit} >

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
            <button className="btn btn-block">
              Submit
            </button>
          </div>
        </form>

      </section>
    </>
  )
}

export default Login