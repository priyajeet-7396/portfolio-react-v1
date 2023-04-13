import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x4rjs5d', 'template_0uvu1i4', form.current, 'wEHhcP0pSkmG7cEyu')

    e.target.reset()
   
  };
  return (
    <section id='contact'>
      <h5>
        Get In Touch
      </h5>
      <h2>
        Contact Me
      </h2>
      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
          <h4>
            Email
          </h4>
          <h5>
            dummyaga@gmail.com
          </h5>
          <a href='mailto:dummyaga@gmail.com' target='__blank'>Send a massage</a>
        </article>
        <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
          <h4>
            Messenger
          </h4>
          <h5>
            eugatortutorials
          </h5>
          <a href='https://m.me/ernest.achever'  target='__blank'>Send a massage</a>
        </article>
        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
          <h4>
           whatsapp
          </h4>
          <h5>
           +123456789
          </h5>
          <a href='https://api.whatsapp.com/send?phone=+918528660949'  target='__blank' >Send a massage</a>
        </article>
 
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form}  onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='your email' required/>
          <textarea name='message'  rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact