import React from 'react';

function Home() {
  return (
    <>
      <div
        style={{
          height: '150px',
          background: 'linear-gradient(to right, #363695, #502f78)',
        }}
      >
        {' '}
      </div>

      <h1 id='name'>
        <strong>Uzoma Munachimso Maduakolam</strong>
      </h1>
      <p id='title'>Software Engineer | IT Support Specialist</p>
      <hr style={{ marginLeft: '80px', marginRight: '80px' }} />

      <div className='about-me'>
        <img
          src='/my-portfolio/images/profile.png'
          alt='uzoma'
          id='profile-pic'
        />
        <p className='introduction'>
          {' '}
          <h2>
            <strong> About Me </strong>
          </h2>
          <hr
            style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
          />
          Hi, I’m Uzoma, a Software Engineering student based in Berlin with
          experience in web development, AI model training, and digital product
          development. I enjoy solving complex technical problems and building
          practical, user-focused solutions.
          <br />
          <br />
          I began at German Deep Tech Quantum as a Software Engineering Intern
          and later continued as a Working Student, where I contributed to
          building and maintaining web features using Next.js and TypeScript,
          debugging UI issues, and supporting deployment processes in an Agile
          team. I have also worked as a Freelance AI Model Trainer, designing
          programming prompts and evaluating AI-generated code for accuracy and
          quality.
          <br />
          <br />
          Alongside my professional work, I have developed projects including
          mobile apps, web platforms, machine learning models, and UI/UX
          prototypes. I also have a strong interest in cybersecurity, with
          hands-on experience in networking, Nmap scanning, and Cisco Packet
          Tracer labs, and I am currently expanding my knowledge through Cisco
          Networking Academy’s Junior Cybersecurity Analyst training.
        </p>
        <h3 className='contact'>
          Contact
          <hr></hr>
        </h3>

        <div className='contact-info-container'>
          <button className='contact-info'>Book a call with me </button>

          <a className='contact-info'
            href="https://www.linkedin.com/in/uzoma-maduakolam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a className='contact-info'
            href="https://github.com/bishop6232"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <hr style={{ marginLeft: '80px', marginRight: '80px' }} />
      <h2 id='headings'> Education</h2>
      <div className='education-container'>
        
        <p className='education-info'>
          <strong>
            Bachelor of Science at XU Exponential University of Applied Science
          </strong>{' '}
          <br />
          <br />
          <strong>Coding and Software Engineering</strong> <br />
          <br />
          <strong>Graduated: January 2026 </strong> <br />
          <br />
          This degree has provided me with a strong foundation in software
          development, front-end development, data analysis, and machine
          learning. Through academic and practical projects, I have built
          responsive web applications, explored data-driven modelling
          techniques, and developed interactive games using modern game
          development tools. These experiences have strengthened my technical
          skills in programming, problem-solving, and system design, while also
          allowing me to combine analytical thinking with creativity when
          building interactive digital products.
          <br />
          <br />
          My bachelor’s thesis, “Exploring Encryption Methods to Enhance Data
          Security in Resource-Constrained Rural Water Supply Systems,” focused
          on improving cybersecurity in digital water infrastructure with
          limited computational resources. The research examined how
          authenticated encryption algorithms—AES-128-GCM, AES-128-CCM, and
          ChaCha20-Poly1305—perform in environments similar to those used in
          rural SCADA and IoT systems. Using a mixed-method approach that
          combined a structured literature review with simulated performance
          testing in a constrained Docker environment, the study evaluated
          encryption methods based on processing time, memory usage, energy
          consumption, security, compatibility, and cost.
        </p>
      </div>

      <h2 id='headings'> Work Experience</h2>
      <h3 id='student-job-subtile'> Working Student Jobs</h3>
      <div className='work-experince-container'>
        <div className='job-container'>
          <img
            src='/my-portfolio/images/GDTQ.png'
            alt='german-deep-tech-quantum'
            className='company-logo'
          />
          <h4 id='job-title'> Junior IT Associate </h4>
          <p id='description'> German Deep Tech Quantum</p>
          <p id='description'> 15.10.2025 - 30.06.2026</p>
          <p
            id='description'
            style={{
              backgroundColor: 'gray',
              width: 'fit-content',
              borderRadius: '3px',
            }}
          >
            {' '}
            Mini Job - Online
          </p>
          <p id='description'> Potsdam, Germany</p>
        </div>
        <div className='job-container'>
          <img
            src='/my-portfolio/images/outlierLogo.png'
            alt='outlier'
            className='company-logo'
          />
          <h4 id='job-title'> Freelance AI Model Trainer </h4>
          <p id='description'> Outlier </p>
          <p id='description'> 15.10.2025 - Present</p>
          <p
            id='description'
            style={{
              backgroundColor: 'gray',
              width: 'fit-content',
              borderRadius: '3px',
            }}
          >
            {' '}
            Freelance - Online
          </p>
          <p id='description'> Remote</p>
        </div>
      </div>

      <h2 id='headings'> Internship</h2>
      <div className='work-experince-container'>
        <div className='job-container'>
          <img
            src='/my-portfolio/images/GDTQ.png'
            alt='german-deep-tech-quantum'
            className='company-logo'
          />
          <h4 id='job-title'> Junior IT Associate </h4>
          <p id='description'> German Deep Tech Quantum</p>
          <p id='description'> 01.02.2025 - 30.09.2026</p>
          <p
            id='description'
            style={{
              backgroundColor: 'gray',
              width: 'fit-content',
              borderRadius: '3px',
            }}
          >
            {' '}
            Part-time - Online
          </p>
          <p id='description'> Potsdam, Germany</p>
        </div>
      </div>

    <h2 id='headings'> Projects</h2>
    <div className='work-experince-container'>
        <div className='job-container'>
          <img
            src='/my-portfolio/images/eon-logo.png'
            alt='eon'
            className='company-logo'
          />
          <h4 id='job-title'>  Bi-directional Charging Development </h4>
          <p id='description'> E.ON Energie Deutschland</p>
          <p id='description'> 01.11.2024 - 28.02.2025</p>
          <p id='description'> Potsdam, Germany</p>
        </div>

        <div className='job-container'>
          <img
            src='/my-portfolio/images/Hella-Aglaia.jpg'
            alt='hella-aglaia'
            className='company-logo'
          />
          <h4 id='job-title'>  Employee Assistant Chatbot </h4>
          <p id='description'> Hella Aglaia</p>
          <p id='description'> 04.01.2023 - 30.07.2023</p>
          <p id='description'> Berlin, Germany</p>
        </div>

        <div className='job-container'>
          <img
            src='/my-portfolio/images/Busch-Jaeger-Logo.jpg'
            alt='busch-jaeger'
            className='company-logo'
          />
          <h4 id='job-title'>  Market Research Hackathon </h4>
          <p id='description'> Busch-Jaeger</p>
          <p id='description'> 10.11.2022 - 11.11.2022</p>
          <p id='description'> Potsdam, Germany</p>
        </div>
      </div>

      <h2 id='headings'> Volunteering</h2>
      <div className='work-experince-container'>
        <div className='job-container'>
          <img
            src='/my-portfolio/images/gameMaker.png'
            alt='game-maker'
            className='company-logo'
          />
          <h4 id='job-title'>  Empower: Me - I’m Game! </h4>
          <p id='description'> Erasmus+</p>
          <p id='description'> Büro Blau</p>
          <p id='description'> 04.01.2023 - 30.07.2023</p>
          <p id='description'> İzmir (Izmir), Turkey</p>
        </div>
      </div>

      <h2 id='headings'>Certificates</h2>
      <div className='work-experince-container'  style={{cursor:"pointer"}}>
        <div className='job-container' onClick={() => window.open('/my-portfolio/images/[Cisco Certificate] Uzoma_Maduakolam.pdf', '_blank', 'alt = "Uzoma_Maduakolam_Certificate" rel="noopener noreferrer"')}>
          <img
            src='/my-portfolio/images/networkingAcademy.png'
            alt='networking-academy'
            className='company-logo'
          />
          <h4 id='job-title'>  Introduction to Cybersecurity </h4>
          <p id='description'> Cisco</p>
          <p id='description'> 6 hours</p>
          <p id='description'> 24.02.2026</p>
          <p id='description'> netacad.com</p>
        </div>

       
        <div className='job-container' onClick={() => window.open('/my-portfolio/images/Eon-zertifikat_Uzoma_Maduakolam.pdf', '_blank', 'alt = "Uzoma_Maduakolam_Certificate" rel="noopener noreferrer"')}>
          <img
            src='/my-portfolio/images/eon-logo.png'
            alt='eon'
            className='company-logo'
          />
          <h4 id='job-title'>  Bi-directional Charging Development </h4>
          <p id='description'> E.ON Energie Deutschland</p>
          <p id='description'> 28.02.2026</p>

        </div>

         <div className='job-container' onClick={() => window.open('/my-portfolio/images/[Erasmus+ Certificate] Uzoma_Maduakolam.pdf', '_blank', 'alt = "Uzoma_Maduakolam_Certificate" rel="noopener noreferrer"')}>
          <img
            src='/my-portfolio/images/gameMaker.png'
            alt='game-maker'
            className='company-logo'
          />
          <h4 id='job-title'>  Empower: Me - I’m Game! </h4>
          <p id='description'> Erasmus+</p>
          <p id='description'> Büro Blau</p>
          <p id='description'> 25.05.2025</p>
        </div>

        <div className='job-container' onClick={() => window.open('/my-portfolio/images/Maduakolam_Uzoma_XU_Busch-Jaeger_Hackathon_Certificate.pdf', '_blank', 'alt = "Uzoma_Maduakolam_Certificate" rel="noopener noreferrer"')}>
          <img
            src='/my-portfolio/images/Busch-Jaeger-Logo.jpg'
            alt='busch-jaeger'
            className='company-logo'
          />
          <h4 id='job-title'>  Market Research Hackathon </h4>
          <p id='description'> Busch-Jaeger</p>
          <p id='description'> 29.11.2022</p>
        </div>
      </div>
      
      <hr style={{ marginLeft: '80px', marginRight: '80px' }} />
      <h2 id='headings' style={{color:"rgb(91, 188, 206)"}}> Let’s Work Together and Create Something Great!</h2>

      <div className='education-container'>
        
        <p className='education-info'>
          Thank you for taking the time to explore my portfolio. <br />
          <br />
          I’m currently looking for opportunities in software engineering, web development, and cybersecurity, where I can apply my technical skills, analytical thinking, and problem-solving mindset to build secure and impactful digital solutions.<br />
          <br />
          This portfolio highlights the projects, experiences, and technologies that have shaped my journey so far, from developing web applications to contributing to real-world products during my internship and working student role at German Deep Tech Quantum. I enjoy working on challenges that require both structured thinking and creativity, especially when building systems that are reliable, scalable, and secure.<br />
          <br />
          If my background aligns with your team or an open role, I would be happy to connect.
        </p>
      </div>
      
      <div className='footer-contact'>
          <button className='contact-info'>Book a call with me </button>

         <a className='contact-info'
            href="https://www.linkedin.com/in/uzoma-maduakolam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a className='contact-info'
            href="https://github.com/bishop6232"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
      </div>
    </>
  );
}

export default Home;
