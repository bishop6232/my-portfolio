import React from 'react'
import Navbar from './Navbar'
import {useState, useEffect} from 'react'

function Home() {

  const [writeUp , setWriteUp] = useState("I'm a Web Developer");

  useEffect(()=>{
    const changeWriteUp = ()=>{
      setWriteUp("I'm open to working student positions");
    }
    setTimeout(changeWriteUp, 3000);
  }, [])

  return (
  <>
  <Navbar />
  
    <section>
      <div id='Home' className='container'>

      <h3 id='name'><strong>Portfolio.</strong></h3>

      <div className='containerHome'>
          <div>
          <h2>Hello, I'm Uzoma Maduakolam</h2>
          <h4 id='yellow'><strong>{writeUp}</strong></h4>
    
          <a href="https://www.linkedin.com/in/uzoma-maduakolam-b693aa250/" target='_blank' rel="noreferrer"><button id='hire'>Hire Me!</button></a>
          <button id='resume'><a href='images/UzomaMaduakolamResume.pdf' download="Resume Uzoma Maduakolam" target='_blank'>Download Resume</a></button>
      
          

          <div className='socials'>

            <a href="https://github.com/bishop6232" target='_blank' rel="noreferrer"><i class="devicon-github-original "></i></a>
            <a href="https://www.linkedin.com/in/uzoma-maduakolam-b693aa250/" target='_blank' rel="noreferrer"><i class="devicon-linkedin-plain"></i></a>
          </div>

        </div>

        <img className='myPicture'  src="my-portfolio/images/portfolio.JPG" alt='uzoma'></img>

      </div>

    
      
    </div>
    </section>

    <section id='skills' className='skills-list'>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        
          <h2 className='skillHead'>Skills</h2>
        <br/><p>These are the skills I bring to the table:</p>
          
          <div className='skill-container'>
              <div className='frontend'>Frontend Skill:
                <div className='frontend-icons'>
                
                  <i class="devicon-javascript-plain colored" style={{fontSize: 80}}></i>
                  
                  <i class="devicon-react-original-wordmark colored" style={{fontSize: 80}}></i>
                  
                  <i class="devicon-html5-plain-wordmark colored" style={{fontSize: 80}}></i>
                  
                  <i class="devicon-git-plain-wordmark colored" style={{fontSize: 80}}></i>
                  
                  <i class="devicon-css3-plain-wordmark colored" style={{fontSize: 80}}></i>
              
                </div>
            </div>

            <div className='backend'> Backend Skills:

              <div className='backend-icons'>

                <i class="devicon-axios-plain-wordmark colored" style={{fontSize: 80, color:'white'}}></i>

                <i class="devicon-postman-plain-wordmark colored" style={{fontSize: 80}}></i>

                
                <i class="devicon-nodejs-plain-wordmark colored" style={{fontSize: 80 }}></i>
            

                <i class="devicon-mysql-plain-wordmark colored" style={{fontSize: 80, color:'white'}}></i>

              </div>
            </div>

          </div>
        
    </section>

    <section id='projects' className='project-list'>

          <h2 className='projectHead'>Projects</h2>
          <p>These are some of my projects:</p>
          
          <div className='project-container'>

            <div className='projects-title'>FoodWise

              <div className='foodwise-project'>
                <a  href='https://bishopuzoma86.wixsite.com/food-wise' target='_blank' rel="noreferrer"><img className='delivery' src='my-portfolio/images/Foodwise.png' alt=''></img></a>
              </div>

            </div>
  
            <div className='projects-title'>Airways fast Delivery

              <div className='airways-project' >
                <a  href='http://bishop6232.github.io/airways-delivery' target='_blank' rel="noreferrer"><img className='delivery' src='my-portfolio/images/delivery.png' alt=''></img></a>
              </div>

            </div>

            <div className='projects-title'> AI knowledge hub

              <div className='ai-project'>
                <a href='https://bishop6232.github.io/AI-Knowledge-Hub/' target='_blank' rel="noreferrer"><img className='delivery' src='my-portfolio/images/Ai.jpg' alt=''></img></a>
              </div>

            </div>

          </div>
        
    </section>
    </>
  )
}

export default Home