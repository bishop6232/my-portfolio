import React, { useState } from 'react';

function Home() {
  const [selectedContainer, setSelectedContainer] = useState(null);
  const [projectContainer, setProjectContainer] = useState(null);

  const gdtqWork = {
      title: "Junior IT Associate ",
      company: "German Deep Tech Quantum",
      date: "01.11.2024 - 28.02.2025",
      jobType: "Mini Job - Online",
      location: "Potsdam, Germany",
      description: "As a Junior IT Associate at German Deep Tech Quantum, I contributed to the development and maintenance of web features for the company’s quantum computing platform. My responsibilities included building and debugging UI components using Next.js and TypeScript, supporting deployment processes, and collaborating with cross-functional teams in an Agile environment. This role allowed me to apply my software engineering skills while gaining hands-on experience in a cutting-edge technology company.",
      responsibilities: ["Developed and maintained web features using modern frameworks including Next.js and TypeScript","Debugged UI issues and improved application usability across different components", "Assisted with deployment processes and version control within a collaborative development environment", "Managed and maintained a separate company website built on Wix, ensuring content updates and functionality", "Migrated the company website from Wix to WordPress, improving flexibility, maintainability, and scalability of the site", "Contributed to Agile workflows through weekly meetings and task tracking with Asana"],
      role_demonstrates: ["Ability to contribute to software development projects using modern web technologies", "Experience working in a collaborative, Agile team environment", "Problem-solving skills in debugging and improving web applications", "Adaptability in managing both development and content management tasks across different platforms", "Contribution to Agile processes through teamwork, communication, and coordination"],
      technologies: ["Next.js", "TypeScript", "Wix", "WordPress", "Asana", "Git", "Docker", "Agile methodologies", "UI/UX principles", "Web development best practices", "Version control", "Responsive design"]
    }
    const outlierWork = {
      title: "Freelance AI Model Trainer",
      company: "Outlier",
      date: "15.10.2025 - Present",
      jobType: "Freelance - Online",
      location: "Remote",
      description: "As a Freelance AI Model Trainer for Outlier, I design programming prompts and evaluate AI-generated code to improve the performance of language models. My work involves creating clear and effective prompts to guide the model in generating accurate and high-quality code, as well as assessing the outputs for correctness, efficiency, and adherence to best practices. This role allows me to apply my programming knowledge while contributing to the development of advanced AI technologies.",
      responsibilities: ["Designing programming prompts to guide AI language models in generating accurate and relevant code", "Evaluating AI-generated code for correctness, efficiency, and adherence to best practices", "Providing feedback on model performance to help improve future iterations", "Collaborating with the Outlier team to understand project goals and requirements", "Staying updated on advancements in AI and programming to inform prompt design and evaluation"],
      role_demonstrates: ["Ability to design effective prompts for AI language models", "Experience evaluating code for quality and correctness", "Understanding of programming concepts and best practices", "Contribution to the development of AI technologies through feedback and collaboration", "Adaptability in working with evolving AI models and technologies"],
      technologies: ["Programming languages (e.g. Python, JavaScript)", "AI language models", "Code evaluation techniques", "Best practices in software development", "Continuous learning in AI and programming advancements"]
    }
    const gdtqInternship = {
      title: "Junior IT Associate (Internship)",
      company: "German Deep Tech Quantum",
      date: "01.02.2025 - 30.09.2026",
      jobType: "Part-time - Online",
      location: "Potsdam, Germany",
      description: "As a Junior IT Associate Intern at German Deep Tech Quantum, I contributed to the development and maintenance of web features for the company’s quantum computing platform. My responsibilities included building and debugging UI components using Next.js and TypeScript, supporting deployment processes, and collaborating with cross-functional teams in an Agile environment. This role allowed me to apply my software engineering skills while gaining hands-on experience in a cutting-edge technology company.",
      responsibilities: ["Developed and maintained web features using modern frameworks including Next.js and TypeScript","Debugged UI issues and improved application usability across different components", "Assisted with deployment processes and version control within a collaborative development environment", "Managed and maintained a separate company website built on Wix, ensuring content updates and functionality", "Migrated the company website from Wix to WordPress, improving flexibility, maintainability, and scalability of the site", "Contributed to Agile workflows through weekly meetings and task tracking with Asana"],
      role_demonstrates: ["Ability to contribute to software development projects using modern web technologies", "Experience working in a collaborative, Agile team environment", "Problem-solving skills in debugging and improving web applications", "Adaptability in managing both development and content management tasks across different platforms", "Contribution to Agile processes through teamwork, communication, and coordination"],
      technologies: ["Next.js", "TypeScript", "Wix", "WordPress", "Asana", "Git", "Docker", "Agile methodologies", "UI/UX principles", "Web development best practices", "Version control", "Responsive design"]
    }

    const eonProject = {
      title: "Bi-directional Charging Development",
      company: "E.ON Energie Deutschland",
      date: "01.11.2024 - 28.02.2025",
      location: "Potsdam, Germany",
      description: "As part of a cross-functional innovation project with E.ON, I contributed to the development of a digital prototype in the energy sector. The project progressed from early concept development to prototype creation and MVP definition, with a focus on improving the user experience and validating the customer journey through iterative feedback and usability considerations.",
      challenges: "The key challenge was designing a product concept that balanced user needs, business objectives, and technical constraints. The solution needed to deliver a clear user experience while remaining feasible to develop and scalable as a product",
      my_role: "I supported the project across product thinking, UX design, and prototype development by turning complex requirements into a clear, testable prototype that helped stakeholders visualize and assess the solution.",
      what_i_did: ["Contributed to the development of a digital prototype for bi-directional charging in the energy sector", "Translated complex requirements into a clear and testable prototype", "Collaborated with cross-functional teams to ensure the solution met user needs and business objectives", "Iteratively improved the prototype based on stakeholder feedback and usability considerations", "Gained experience in product thinking, UX design, and prototype development within an innovation project context"],
      this_demonstrates: ["Ability to tackle ambiguous product challenges in innovation-driven projects",
      "Experience in aligning UX design with business and operational requirements",
      "Skill in prototyping complex ideas to support stakeholder understanding and decision-making",
      "Collaboration with cross-functional teams across product, business, and technical contexts",
      "Ability to bring structure to early-stage product development in regulated sectors"],
      technologies: ["Figma for prototype and interface design",
                "Customer journey mapping to understand user interactions and pain points",
       "Stakeholder workshops for collaborative idea development and alignment",
      "Value proposition design to define user and business value",
      "Product requirements definition to structure solution features",
      "MVP planning to prioritize core functionality for early validation",
      "UX thinking to guide user-centered product development"],
    }

    const hellaglaiaProject = {
      title: "Employee Assistant Chatbot",
      company: "Hella Aglaia",
      date: "04.01.2023 - 30.07.2023",
      location: "Berlin, Germany",
      description: "This project focused on developing a chatbot to assist new users in navigating Microsoft Teams. As the Programmer in a five-person team, I structured training data using YAML to support the chatbot’s responses. Using Python and supporting libraries, I helped implement the chatbot’s logic so it could guide users through common Microsoft Teams tasks. The result was an interactive system that provided clear, step-by-step support for typical user actions in Microsoft Teams",
      challenges: "The main challenge of the project was to ensure that the chatbot could reliably guide new users through common tasks in Microsoft Teams. We focused on structuring clear and consistent training data in YAML so the chatbot could interpret user questions and provide accurate responses. Another challenge was designing step-by-step guidance that was simple enough for beginners while still covering the most frequently used Teams features. Through iterative testing and adjustments using Python and its libraries, we refined the chatbot’s responses to improve clarity and usability for new users.",
      my_role: "As the Programmer in the team, I was responsible for structuring the chatbot’s training data and supporting the technical implementation. I organised and formatted the training data using YAML, ensuring that the chatbot could interpret user inputs and provide clear guidance. My role focused on the technical development and ensuring the chatbot delivered reliable, step-by-step assistance for Microsoft Teams tasks.",
      what_i_did: [
      "Worked as Programmer in a five-person team developing a chatbot to help new users navigate Microsoft Teams",
      "Structured and organized chatbot training data using YAML to ensure clear and consistent responses",
      "Supported the implementation of chatbot functionality using Python and relevant libraries",
      "Designed structured dialogue flows to guide users through common Microsoft Teams tasks step by step",
      "Contributed to testing and improving the chatbot’s responses to make the guidance clearer for beginners",
      "Collaborated with the team to document the system and present how the chatbot supports user onboarding for Microsoft Teams"],
      this_demonstrates: [
    "Work effectively as a programmer within a team-based development project",
    "Structure and manage training data using YAML for conversational systems",
    "Implement and support chatbot functionality using Python and relevant libraries",
    "Design clear, step-by-step guidance for users interacting with software tools",
    "Test, refine, and improve chatbot responses to enhance usability for beginners",
    "Document and communicate the technical functionality and purpose of the system"
  ],
      technologies: [
    "YAML for structuring chatbot training data",
    "Python",
    "Python libraries for chatbot functionality",
    "Chatbot dialogue design",
    "User guidance design for software onboarding",
    "Collaborative development in a team environment",
    "Testing and iterative improvement of chatbot responses",
    "Technical documentation and presentation"
  ],
  }
 
  const buschJaegerProject = {
    title: "Market Research Hackathon",
    company: "Busch-Jaeger",
    date: "10.11.2022 - 11.11.2022",
    location: "Potsdam, Germany",
    description: "In this two-day hackathon, I collaborated with a team to develop a market research concept for Busch-Jaeger. Through brainstorming sessions, we created a concept that addressed key pain points and aligned with business objectives.",
    challenges: "The main challenge was to quickly understand the market landscape and customer needs within a limited timeframe. We had to rapidly generate ideas, evaluate them against business goals, and create a compelling concept that could be presented to stakeholders. Balancing creativity with strategic thinking was essential to develop a viable solution in such a short period.",
    my_role: "As a team member in the hackathon, I contributed to the ideation and concept development process. I participated in brainstorming sessions, helped map out customer journeys. My role involved both creative thinking and strategic analysis to ensure our concept was innovative while also aligned with business objectives.",
    what_i_did: [
      "Collaborated in a team to develop a market research concept for Busch-Jaeger during a two-day hackathon",
      "Participated in brainstorming sessions to generate innovative ideas",
      "Contributed to customer journey mapping to understand user needs and pain points",
      "Helped design the value proposition for our market research concept",
      "Balanced creativity with strategic thinking to develop a viable solution within a limited timeframe",
      "Presented the final concept to stakeholders, highlighting its potential impact and alignment with business goals"
    ],
    this_demonstrates: [
      "Ability to collaborate effectively in a team-based innovation challenge",
      "Skill in rapid ideation and concept development under time constraints",
      "Experience with customer journey mapping to inform solution design",
      "Capability to design value propositions that align with user needs and business objectives",
      "Balance of creative thinking and strategic analysis in developing innovative concepts",
      "Presentation skills for communicating ideas to stakeholders"
    ],
    technologies: [
      "Brainstorming techniques for idea generation",
      "Customer journey mapping tools and methodologies",
      "Value proposition design frameworks",
      "Rapid prototyping and concept development",
      "Collaborative teamwork in a high-pressure environment",
      "Presentation tools for stakeholder communication"
    ],
  }

  const empowerMeProject = {
    title: "Empower: Me - I’m Game!",
    company: "Erasmus+ / Büro Blau",
    date: "04.01.2023 - 30.07.2023",
    location: "İzmir (Izmir), Turkey",
    description: "In this Erasmus+ project, I collaborated with an international team to develop a game-based learning platform aimed at empowering individuals through interactive educational content. My role involved contributing to the design and development of the platform, ensuring it was engaging and effective for users.",
    challenges: "The main challenge was to create a game-based learning experience that was both educational and engaging for a diverse user base. We had to consider different learning styles, cultural backgrounds, and accessibility needs while designing the platform. Additionally, coordinating with an international team required effective communication.",
    my_role: "As a team member in the project, I contributed to the design and development of the game-based learning. I participated in brainstorming sessions, helped design game mechanics that supported educational objectives, and collaborated with team members to ensure the game was user-friendly. My role involved both creative input and technical support.",
    what_i_did: [
      "Collaborated with an international team to develop a game-based learning platform for the Erasmus+ project 'Empower: Me - I’m Game!'",
      "Participated in brainstorming sessions to generate ideas for game mechanics and educational content",
      "Contributed to the design of game mechanics that aligned with educational objectives and user engagement",
      "Worked with team members to ensure the game was engaging and effective for a diverse user base with different learning styles and cultural backgrounds",
    ],
    this_demonstrates: [
      "Ability to collaborate effectively in an international team setting",
      "Experience with game-based learning development",
      "Skill in designing engaging educational content",
      "Capability to work in a diverse, multicultural environment",
      "Understanding of user-centered design principles"
    ],
    technologies: [
      "Python",
      "Renpy for visual novel game development",
      "Game design principles and methodologies",
      "Educational content development",
      "Cross-cultural communication strategies",
      "User experience (UX) design",
    ]
  }

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
          Hi, I’m Uzoma, a Software Engineer based in Berlin with
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
          <a className='contact-info'
            href="https://calendly.com/uzomamaduakolam5/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call with me
          </a>

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
      <div className='work-experince-container' >
        <div className='job-container' onClick={() => setSelectedContainer(gdtqWork)}>
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
        <div className='job-container' onClick={() => setSelectedContainer(outlierWork)}>
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
        <div className='job-container' onClick={() => setSelectedContainer(gdtqInternship)}>
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
        <div className='job-container'  onClick={() => setProjectContainer(eonProject)}>
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

        <div className='job-container' onClick={() => setProjectContainer(hellaglaiaProject)}>
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

        <div className='job-container' onClick={() => setProjectContainer(buschJaegerProject)}>
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
        <div className='job-container' onClick={() => setProjectContainer(empowerMeProject)}>
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

        <a className='contact-info'
            href="https://calendly.com/uzomamaduakolam5/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call with me
          </a>

         <a className='contact-info'
            href="https://www.linkedin.com/in/uzoma-maduakolam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a className='contact-info'
            href="mailto:uzomamaduakolam5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a className='contact-info'
            href="/my-portfolio/images/Uzoma_Munachimso_Maduakolam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
      </div>
      
      {selectedContainer && (
  <div
    onClick={() => setSelectedContainer(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "white",
        borderRadius: "10px",
        width: "90%",
        maxWidth: "800px",
        maxHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        color: "black",
      }}
    >

      {/* Header */}
      <div style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <h2>{selectedContainer.title}</h2>
        <h4>{selectedContainer.company}</h4>
        <p>{selectedContainer.date}</p>
        <p>{selectedContainer.location}</p>
        <p>{selectedContainer.jobType}</p>
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          padding: "20px",
          overflowY: "auto",
          flex: 1
        }}
      >
        <div className='overview-container'>
          <h3 style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}}>Overview</h3>

          <p>{selectedContainer.description}</p>
        </div>
        <div className='responsibilities-container'>
          <h4  style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}} >Key Responsibilities</h4>
          <ul style={{lineHeight:"1.5"}}>
            {selectedContainer.responsibilities.map((resp, index) => (
              <li key={index} >{resp}</li> 
            ))}
            
          </ul>
        </div>

        <div className='desmonstrated-container'>
          <h4  style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}} >What this role demonstrates</h4>
          <p style={{paddingBottom:"10px"}}>This role reflects my ability to:</p>
          <ul style={{lineHeight:"1.5"}}>
            {selectedContainer.role_demonstrates.map((role, index) => (
              <li key={index} >{role}</li> 
            ))}
            
          </ul>
        </div>
        <div className='technologies-container'>
          <h4  style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}} >Technologies and Ways of Working</h4>
          <ul style={{lineHeight:"1.5"}}>
            {selectedContainer.technologies.map((tech, index) => (
              <li key={index} >{tech}</li> 
            ))}
            
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div style={{ padding: "20px", borderTop: "1px solid #ddd" }}>
        <button onClick={() => setSelectedContainer(null)}>
          Close
        </button>
      </div>

    </div>
  </div>
)}

     {projectContainer && (
  <div
    onClick={() => setProjectContainer(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "white",
        borderRadius: "10px",
        width: "90%",
        maxWidth: "800px",
        maxHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        color: "black",
      }}
    >

      {/* Header */}
      <div style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <h2>{projectContainer.title}</h2>
        <h4>{projectContainer.company}</h4>
        <p>{projectContainer.date}</p>
        <p>{projectContainer.location}</p>
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          padding: "20px",
          overflowY: "auto",
          flex: 1
        }}
      >
        <div className='overview-container'>
          <h3 style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}}>Overview</h3>

          <p>{projectContainer.description}</p>
        </div>

         <div className='challenge-container'>
          <h3 style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}}>Challenges</h3>

          <p>{projectContainer.challenges}</p>
        </div>

         <div className='my_role-container'>
          <h3 style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}}>My Role</h3>

          <p>{projectContainer.my_role}</p>
        </div>

        <div className='what_i_did-container'>
          <h4  style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}} >What I Did</h4>
          <ul style={{lineHeight:"1.5"}}>
            {projectContainer.what_i_did.map((resp, index) => (
              <li key={index} >{resp}</li> 
            ))}
            
          </ul>
        </div>

        <div className='desmonstrated-container'>
          <h4  style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}} >What this project demonstrates</h4>
          <p style={{paddingBottom:"10px"}}>This project reflects my ability to:</p>
          <ul style={{lineHeight:"1.5"}}>
            {projectContainer.this_demonstrates.map((role, index) => (
              <li key={index} >{role}</li> 
            ))}
            
          </ul>
        </div>
        <div className='technologies-container'>
          <h4  style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px"}} >Technologies and Ways of Working</h4>
          <ul style={{lineHeight:"1.5"}}>
            {projectContainer.technologies.map((tech, index) => (
              <li key={index} >{tech}</li> 
            ))}
            
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div style={{ padding: "20px", borderTop: "1px solid #ddd" }}>
        <button onClick={() => setProjectContainer(null)}>
          Close
        </button>
      </div>

    </div>
  </div>
)}
    </>
  );
}

export default Home;
