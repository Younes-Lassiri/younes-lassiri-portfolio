import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const form = useRef();
    const [fn,setfn] = useState("");
    const [ln,setln] = useState("");
    const [p,setp] = useState("");
    const [e,sete] = useState("");
    const [m,setm] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e063p1q', 'template_54ulmen', form.current, {
        publicKey: '0hk_7IeFzmw1ODIzo',
      })
      .then(
        () => {
            toast.success("Thank you! Your message has been successfully sent.", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
          setfn("");
          setln("");
          setp("");
          setm("");
          sete("")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contact-section' id='contact'>

        

        <form ref={form} onSubmit={sendEmail}>
            
<ToastContainer />
        <div className='contact-left'>
            <input type="hidden" value="Younes Lassiri" name="to_name"/>
            <div className='contact-title'>Let’s work together!</div>
            <div className='contact-p'>I design and code beautifully simple things and i love what i do. Just simple like that!</div>

            <div className='contact-name'><input type="text" name="firstName" placeholder='First name' required onChange={(e) => setfn(e.target.value)} value={fn}/></div>
            
            <div className='contact-lastName'><input type='text' name='lastName' placeholder='Last name' onChange={(e) => setln(e.target.value)} value={ln}/></div>


            <div className='contact-address'><input type="email" name="email" placeholder='Email address' required onChange={(e) => sete(e.target.value)} value={e}/></div>
            
            <div className='contact-number'><input type='number' name='phone' placeholder='Phone number' onChange={(e) => setp(e.target.value)} value={p}/></div>

            <div className='contact-message'><textarea name='message' placeholder='Message' onChange={(e) => setm(e.target.value)} value={m}/></div>


            <div className='contact-btn'><button type='submit'>Send Message</button></div>
        </div>
        </form>


        <div className='contact-right'>


            <div className='contact-phone'><box-icon name='phone-call' color='#ffffff' size='35px' style={{ background: 'linear-gradient(to right, #8750f7 0%, #2a1454 100%)', padding: '7px', borderRadius: '50px' }}></box-icon></div>

            <div className='phone-text'>
                <div className='phone-one tt'>Phone</div>
                <div className='phone-two yy'>+212 603927836</div>
            </div>


            <div className='contact-phone'><box-icon name='envelope' color='#ffffff' size='35px' style={{ background: 'linear-gradient(to right, #8750f7 0%, #2a1454 100%)', padding: '7px', borderRadius: '50px' }}></box-icon></div>

            <div className='email-text'>
                <div className='email-one tt'>Email</div>
                <div className='email-two yy'>youneslassirifreelance@gmail.com</div>
            </div>


            <div className='contact-phone'><box-icon name='map' color='#ffffff' size='35px' style={{ background: 'linear-gradient(to right, #8750f7 0%, #2a1454 100%)', padding: '7px', borderRadius: '50px' }}></box-icon></div>

            <div className='map-text'>
                <div className='map-one tt'>Address</div>
                <div className='map-two yy'>Warne Park Street Pine,<br></br>FL 33157, New York</div>
            </div>

            
        </div>
    </div>
  )
}
