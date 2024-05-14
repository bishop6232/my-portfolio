import React from 'react'


function Navbar() {
    return (
      <header>
        <nav id='nav'>
          <table className='horizontal'>
            <tr id='Nav'>
              <th><a className='home' href="#">Home</a></th>
              <th><a className='skills' href="#skills">Skills</a></th>
              <th><a className='projects' href="#projects">Projects</a></th>
              <th><a href="https://www.linkedin.com/in/uzoma-maduakolam-b693aa250/" target='_blank' rel="noopener noreferrer"><button id='hireNav'>Hire Me!</button></a></th>
            </tr>
          </table>
        </nav>
      </header>
    );
  }
  
  export default Navbar;