import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const data= { name:"" ,email:"", password:""}
  const [input, setinput] = useState(data)
  const [flag, setflag]= useState(false)
  useEffect(()=>{
    console.log()
  } ,[flag])
function handledata(e){
  setinput({...input ,[e.target.name]:e.target.value})
  

}
function submithandle(e){
  e.preventDefault();
  if(!input.name || !input.email || !input.password){
    alert("please fill all the fields")
  }else{
    setflag(true)
  }

}
  return (
    <>
    <pre>{(flag)?<h2>you are {input.name} ,registered</h2> :""}</pre>
    <form  onSubmit={submithandle}>
      <div className='bg-red-200 w-full h-fit '>
          <h1 className='text-3xl text-center mt-5 font-bold'>Registration form</h1>
          <div className=''>
          <input className='p-3 m-3' type="text" name='name' value={input.name} onChange={handledata} placeholder='Enter Your Name' /> 
          </div>
          <div className=''>
          <input className='p-3 m-3' type="email" name='email' value={input.email} onChange={handledata}  placeholder='Enter Your Email' /> 
          </div>
          <div className=''>
          <input className='p-3 m-3' name='password' type="current-password" value={input.password} onChange={handledata}  placeholder='Enter Your Password' /> 
          </div>
          <button type='submit' className='mb-5'>Register</button>
      </div>
      </form>
    </>
  )
}

export default App
