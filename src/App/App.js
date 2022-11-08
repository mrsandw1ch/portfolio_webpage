import { useState } from 'react';
import './App.scss';

function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="App">
      <header className="App-header">

        <div id="toggle-lang">

          <button
              className='lang-btn'
              onClick={() => {setLang('ru')}}>
              ru
          </button>

          <span className='lang-slash'>&nbsp;/&nbsp;</span>

          <button
              className='lang-btn'
              onClick={() => {setLang('en')}}>
              en
          </button>

        </div>

        <nav id="navbar">
          <a className="nav-link" href="#top">home</a>
          <a className="nav-link" href="#technologies">technologies</a>
          <a className="nav-link" href="#projects">projects</a>
          <a className="nav-link" href="#contact">contact</a>
        </nav>

      </header>

      <main>

        <section id='home'>
          <h1 id="hello">hello i'm dmitry</h1>
          <p id="description">
            a beginner web developer<br/>
            specializing in building React applications<br/>
            feel free to take a look at my latest projects<br/>
            <a id="email" href="mailto:dksviridenko@gmail.com">
              dksviridenko@gmail.com
            </a>
          </p>
        </section>

        <section id='technologies'>
        <h2 className='section-title'>Technologies</h2>

          <div id='technologies-grid'>

            <div className='technologies-list' id='web-development'>
              <h3 className='list-title'>Web Development</h3>
              <ul className='list-items'>
                <li className='technology'>HTML</li>
                <li className='technology'>CSS</li>
                <li className='technology'>Vanilla JavaScript</li>
                <li className='technology'>ReactJS</li>
                <li className='technology'>Redux, React-Redux</li>
                <li className='technology'>jQuery</li>
                <li className='technology'>Bootstrap</li>
                <li className='technology'>AJAX and JSON</li>
              </ul>
            </div>

            <div className='technologies-list' id='package-managing'>
              <h3 className='list-title'>Package Managing</h3>
              <ul className='list-items'>
                <li className='technology'>npm</li>
              </ul>
            </div>

            <div className='technologies-list' id='version-control'>
              <h3 className='list-title'>Version Control</h3>
              <ul className='list-items'>
                <li className='technology'>Git, GitHub</li>
              </ul>
            </div>

            <div className='technologies-list' id='ide'>
              <h3 className='list-title'>IDE</h3>
              <ul className='list-items'>
                <li className='technology'>Visual Studio Code</li>
              </ul>
            </div>

            <div className='technologies-list' id='operating-system'>
              <h3 className='list-title'>Operating System</h3>
              <ul className='list-items'>
                <li className='technology'>Ubuntu</li>
              </ul>
            </div>

            <div className='technologies-list' id='command-language'>
              <h3 className='list-title'>Command Language</h3>
              <ul className='list-items'>
                <li className='technology'>Bash</li>
              </ul>
            </div>

          </div>
          
        </section>

        <section id='projects'>
        <h2 className='section-title'>These are some of my projects</h2>

          <div id='projects-gallery'>

            <a className='project-link' id='photo-gallery-link' rel="noreferrer" href='https://mrsandw1ch.github.io/react_photo_gallery' target='_blank'>
              <div className='project' id='photo-gallery'>
                <p className='project-name'>
                  react photo gallery
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-white.png')} alt=''/>
                </p>
                <p id='photo-gallery-text'>
                  <span className='uppercase'>charybdis</span>
                  <br/>
                  <span id='editorial'>hellerii</span>
                </p>
                <img className='project-image' src={require('../assets/images/photo_gallery.png')} alt='' />
              </div>
            </a>

            <a className='project-link' id='calculator-link' rel="noreferrer" href='https://mrsandw1ch.github.io/react_calculator' target='_blank'>
              <div className='project' id='calculator'>
                <p className='project-name'>
                  react calculator
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-black.png')} alt=''/>
                </p>
                <img className='project-image' src={require('../assets/images/calculator.png')} alt='' />
              </div>
            </a>
            
            <a className='project-link' id='random-quote-machine-link' rel="noreferrer" href='https://mrsandw1ch.github.io/react_random_quote_machine' target='_blank'>
              <div className='project' id='random-quote-machine'>
                <p className='project-name'>
                  react random quote machine
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-white.png')} alt=''/>
                </p>
                <img className='project-image' src={require('../assets/images/random_quote_machine.png')} alt='' />
              </div>
            </a>
          </div>

          
          <a id='github-link' href='https://github.com/mrsandw1ch' rel="noreferrer" target='_blank'>
            <p id='github-link-text'>
              visit my GitHub
              <i id='github-icon' className="fa-brands fa-github"></i>
              <i id='greater-than-icon' className="fa-solid fa-greater-than"></i>
            </p>
          </a>

          

        </section>

        <section id='contact'>
        <h2 className='section-title'>Contact me</h2>

        <div id='social-links'>
          <a className='social-link' id='telegram-link' href='https://t.me/mrsandw1ch' rel="noreferrer" target='_blank'>
            <p className='social-link-text' id='telegram-link-text'>
              <i className="fa-brands fa-telegram social-icon"></i>
              Telegram
            </p>
          </a>

          <a className='social-link' id='telegram-link' href='mailto:dksviridenko@gmail.com' rel="noreferrer" target='_blank'>
            <p className='social-link-text' id='telegram-link-text'>
              <i className="fa-solid fa-at social-icon"></i>
              send a mail
            </p>
          </a>
        </div>

        </section>
      </main>
    </div>
  );
}

export default App;
