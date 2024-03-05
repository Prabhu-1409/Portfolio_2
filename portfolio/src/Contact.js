import React from 'react'
import { useState, useRef } from 'react'
import Axios from 'axios'
import './Contact.css'
/*import emailjs from '@emailjs/browser'*/


function Contact() {
    const [name, setname]=useState('')
    const[email, setemail]=useState('')
    const[message,setmessage]=useState('')
    const serviceid="service_57u66r1"
    const templateid="template_dvznnlv"
    const publickey="uD6kxdrpSztJFTTK1"
    const para={
      service_id:serviceid,
      template_id:templateid,
      user_id:publickey,
      template_params:
      {
      from_name:name,
      from_email:email,
      to_name:'Prabhu',
      message:message,
      },

    }

    /*const handlesubmit =(e)=>{
        e.preventDefault()
        Axios.post('http://localhost:3001/message',{email, message}).then(result=>{
            console.log(result)
        }).catch((err)=>{
            console.log(err)
        })
    }*/
    const form =useRef()
    const emailsend =(e)=>{
      e.preventDefault()
      /*const send=emailjs.sendForm('service_57u66r1','template_dvznnlv',data,'uD6kxdrpSztJFTTK1').then((sample)=>{
        console.log(sample.text)
      }).catch((err)=>{
        console.log(err)
      })*/
      try{
        Axios.post('https://api.emailjs.com/api/v1.0/email/send',para);
        console.log(para.text);
        setemail('')
        setmessage('')
        setname('')
      }catch(err){
        console.log(err)
      }
      }
  return (
    <div className='form_container'>
      <form onSubmit={emailsend} ref={form} id='myform'>
        <input className='name' type='text' name='name' value={name} placeholder='Enter your name' id='name' onChange={(e)=>{setname(e.target.value)}}/>
        <input className='email' type='email' name='email' value={email} placeholder='Enter your email' id='name' onChange={(e)=>{setemail(e.target.value)}}/>
        <textarea className='message' placeholder='Enter Message' value={message} rows='10' cols={30}  id='message' onChange={(e)=>{setmessage(e.target.value)}} ></textarea>
        <button className='submit' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
