"use client"
import { GeldIcon } from "../Icons/Geld";
import Link from "next/link";
const passwordRegex=/[\w]{8,}/i
export const SignUpPage = () => {
 const url="https://team-three.onrender.com/sign-up"
 const onSubmit=async (e)=>{
  e.preventDefault()
  const password=e.target.password.value
  const rePassword=e.target.rePassword.value
  if(!passwordRegex.test(password) || !passwordRegex.test(rePassword))
  {
    alert("Password's length should be at least eight")
    return 
  }
  if(password!==rePassword)
  {
    alert("Password is not matched!")
    return 
  }
const user={
  "name":e.target.name.value,
  "email":e.target.email.value,
  "password":e.target.password.value
} 
const options={
  method:"POST",
  headers:{
    'Content-Type':"application/json"
  },
  body:JSON.stringify(user)
}
const response=await fetch(url,options)
const data=response.json()
console.log('data is:',data)
 }
  return (
    <div className="w-full flex items-center">
      <div className="w-[50%]  flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-3">
            <GeldIcon />
            <h1>Geld</h1>
          </div>
          <div className="flex justify-center">
            <h1>Create Geld account</h1>
          </div>
          <h2>Sign up below to create your Wallet account</h2>
          <form action="" className="flex flex-col justify-center items-center gap-5" onSubmit={onSubmit}>
          <label className="w-[350px] bg-[#F3F4F6] input input-bordered flex items-center gap-2">
            <input type="text"  name="name" className="grow" placeholder="Name"  required/>
          </label>
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input type="text" name="email" className="grow" placeholder="Email" required/>
          </label>
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input type="password" name="password" className="grow" placeholder="Password" required/>
          </label>
          <label className="bg-[#F3F4F6] w-[350px] input input-bordered flex items-center gap-2">
            <input type="password" name="rePassword" className="grow" placeholder="Re-password" required/>
          </label>
          <button type="submit" className="w-[350px] btn bg-[#0166FF] rounded-[20px]" >
            Sign up
          </button>
          </form>
          <div className="flex gap-4">
            <h1>Already have account?</h1>
            <Link className="text-blue-600" href={"/"}>
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[1200px] bg-[#0166FF]"></div>
    </div>
  );
};
