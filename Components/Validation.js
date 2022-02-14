
function Validation(values) {

    let error = {};

    if(!values.fullname){
        error.fullname = 'Name is required.'
    }
    if(!values.email){
        error.email = 'Email is required.'
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email = 'Email is invalid.'
    }
    if(!values.password){
        error.password = 'Password is required.'
    }else if(values.password.length < 5){
        error.password = 'Password must be more than 5 characters.'
    }


  return error 
}

export default Validation