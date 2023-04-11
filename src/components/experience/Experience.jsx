import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        What Skills I Have
      </h5>
      <h2>
        My Experience
      </h2>
      <div className='container experiance__container'>
        <div className='experiance__frontend'>
          <h3>Frontend Development</h3>
          <div className='experiance__content'>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        {/* end of front end  */}
        <div className='experiance__backend'>
        <h3>Backend Development</h3>
          <div className='experiance__content'>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>Node</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>Mongodb</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>PhP</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>MYsql</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill/>
              <h4>python</h4>
              <small className='text-light'>Experienced</small>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  )
}


export default Experience