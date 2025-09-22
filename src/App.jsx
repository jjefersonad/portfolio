import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Jeferson de A. Damasceno</h1>
        <p>Full-Stack Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate developer with experience in building web applications using modern technologies.
          I love creating efficient and user-friendly solutions.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Vue.js</li>
          <li>Node.js / Express</li>
          <li>Python / Django</li>
          <li>HTML / CSS</li>
          <li>Git / GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project 1</h3>
            <p>A web application built with React and Node.js.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>An e-commerce site using Django and PostgreSQL.</p>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>A mobile app developed with React Native.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: jeferson@example.com</p>
        <p>LinkedIn: linkedin.com/in/jeferson</p>
        <p>GitHub: github.com/jeferson</p>
      </section>
    </div>
  )
}

export default App
