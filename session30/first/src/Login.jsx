import { useForm } from "react-hook-form"
const Login = ()=>{
    let {register,handleSubmit,formState:{errors}} = useForm()


    function getuser(data){
        console.log(data)
    }

    return (<>
    
    <form onSubmit={handleSubmit(getuser)}>
        <input required type="text" {...register('email',{required:true,minLength:3})} /> 
        {errors.email && <span>email is required</span>}
        <input required type="text" {...register('password',{required:true})} /> 
        {errors.password && <span>password is required</span>}
        <input type="submit" /> 
    </form>
    
    
    </>)
}

export default Login