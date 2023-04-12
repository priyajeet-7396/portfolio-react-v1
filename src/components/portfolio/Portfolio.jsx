import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE IN PRODUTION

const data = [
    {
      id: 1,
      image: IMG1,
      title: 'cryptocurency dasboard and financial visulization',
      github: 'http://github.com',
      demo:"https://www.arbeit.co.in/"
    },
    {
      id: 2,
      image: IMG2,
      title: 'charts templates and infographics in figma',
      github: 'http://github.com',
      demo:"https://www.arbeit.co.in/"
    },
    {
      id: 3,
      image: IMG3,
      title: 'Figma dashboard UI kit for data design web apps',
      github: 'http://github.com',
      demo:"https://www.arbeit.co.in/"
    },
    {
      id: 4,
      image: IMG4,
      title: 'maintaining task and tracking progress',
      github: 'http://github.com',
      demo:"https://www.arbeit.co.in/"
    },
    {
      id: 5,
      image: IMG5,
      title: 'charts templates and infogrphics in figma',
      github: 'http://github.com',
      demo:"https://www.arbeit.co.in/"
    },
    {
      id: 6,
      image: IMG6,
      title: 'charts templates and infogrphics in figma',
      github: 'http://github.com',
      demo:"https://www.arbeit.co.in/"
    }
]






const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>
        my Recent Work
      </h5>
      <h2>
        Portfolio
      </h2>
      <div className='container portfolio__container'>
     {
      data.map(({id,image,title,github,demo})=>{
        return(
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>
              {title}
            </h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>live demo</a>
            </div>
        </article>
        )
      })
     }
      </div>
    </section>
  )
}

export default Portfolio