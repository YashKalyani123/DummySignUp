import React,{ useState } from 'react'
import SignupForm from './SignupForm'
import SignupSuccess from './SignupSuccess'

const Form = () => {
    const [IsSubmit,setIsSubmit] = useState(false)

    const submitForm = () =>{
        setIsSubmit(true)
    }
  return (
    <div>
        { !IsSubmit ? <SignupForm submitForm={submitForm} /> : <SignupSuccess /> }    
    </div>
  )
}

export default Form