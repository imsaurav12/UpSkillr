import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

const[formData,setFormData] = useState({
    email:"",password:""
})

const [showPassword,setShowPassword] = useState(false);


function changeHandler(event){
    setFormData((prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))

}
function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn("true");
    toast.success("Logged In Successfully!");
    navigate("/dashboard");
    console.log("Printing the Form Data")
    console.log(formData);
}

  return (
    <form
    className='flex flex-col w-full gap-y-4 mt-6' 
    onSubmit={submitHandler}>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            name='email'
            placeholder='Enter Email address'
            className='border-r-1 border-b-1 border-white bg-richblack-800 rounded-[0.5rem] text-richblack w-full p-[12px]'
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            onChange={changeHandler}
            name='password'
            placeholder='Enter Password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>
        <button className='bg-yellow-50 text-richblack-900 font-semibold py-[8px] px-[12px] mt-6 rounded-lg hover:bg-yellow-100 transition-all duration-200'>
            Sign In
        </button>
    </form> 
  )
}

export default LoginForm
