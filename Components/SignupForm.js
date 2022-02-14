import React,{ useEffect, useState } from 'react'
import Validation from './Validation'

function SignupForm({submitForm}) {

    const [values,setvalues] = useState({
        fullname : '',
        email : '',
        password : ''
    })

    const [error,seterror] = useState({})
    const [correctdata,setcorrectdata] = useState(false)

    const handleFormSubmit = (event) => {
            event.preventDefault()
            seterror(Validation(values))
            setcorrectdata(true)
    }

    const handleChange = (event) => {
            setvalues({
                ...values,
                [event.target.name] : event.target.value
            })

    }

    useEffect( () => {
            if(Object.keys(error).length === 0 && correctdata)
                submitForm(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])

  return (
    <div className='container'>
        <div className='app-wrapper'> 
            <div>
                <h2 className='title'>Create Account</h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                        <label className='label'>Full Name:</label>
                        <input className='input'
                         type='text'
                          name='fullname' 
                          value={values.fullname}
                          onChange={handleChange}
                        />
                        { error.fullname && <p className='error'>{error.fullname}</p> }
                </div>
                <div className='email'>
                        <label className='label'>Email:</label>
                        <input className='input'
                         type='email'
                          name='email' 
                          value={values.email}
                          onChange={handleChange}
                        />
                         { error.email && <p className='error'>{error.email}</p> }
                </div>
                <div className='password'>
                        <label className='label'>Password:</label>
                        <input className='input'
                         type='password'
                          name='password' 
                          value={values.password}
                          onChange={handleChange}
                        />
                         { error.password && <p className='error'>{error.password}</p> }
                </div>
                <div>
                    <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignupForm