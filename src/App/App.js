import { useEffect, useState } from 'react';
import './App.scss';

function App() {  
  const [lang, setLang] = useState('en')
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    function updateScrollDirection() {
      const scrollY = window.pageYOffset;
      const direction = (scrollY > lastScrollY) ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY
    }
    window.addEventListener("wheel", updateScrollDirection)
    return () => {
      window.removeEventListener("wheel", updateScrollDirection)
    }
  }, [scrollDirection]);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{transform: (scrollDirection === 'down') ? 'translateY(-100%)' : 'translateY(0%)',
                WebkitTransform: (scrollDirection === 'down') ? 'translateY(-100%)' : 'translateY(0%)'}}>

        <nav id="navbar">
          <a
            className="nav-link"
            href="#top">
            {lang === 'ru'
              ? <>в начало</>
              : <>hello</>}
          </a>
          <a
            className="nav-link"
            href="#projects">
            {lang === 'ru'
              ? <>портфолио</>
              : <>projects</>}
            </a>
          <a
            className="nav-link"
            href="#technologies">
            {lang === 'ru'
              ? <>технологии</>
              : <>technologies</>}
          </a>
          <a
            className="nav-link"
            href="#about-me">
            {lang === 'ru'
              ? <>обо мне</>
              : <>about</>}
          </a>
          <a
            className="nav-link"
            href="#contact">
            {lang === 'ru'
              ? <>контакты</>
              : <>contact</>}
          </a>
        </nav>

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

      </header>

      <main>

        <section id='home'>
          <h1 id="hello">
            {lang === 'ru'
              ? <>Привет, я Дима</>
              : <>Hello I'm Dmitry</>}
            <img src={require('../assets/images/vydra.png')} alt=''/>
          </h1>
          <p id="description">
            {lang === 'ru'
              ? <>Начинающий web разработчик. Специализируюсь на создании React-приложений. Ниже - примеры моих работ.<br/></>
              : <>A beginner web developer. Specializing in building React applications. Feel free to take a look at my latest projects.<br/></>}
            <a id="email" href="mailto:dksviridenko@gmail.com">
              dksviridenko@gmail.com
            </a>
          </p>
        </section>

        <section id='projects'>
          <h2
            className='section-title'>
            {lang === 'ru'
                ? <>Проекты</>
                : <>Some of my projects</>}
          </h2>

          <div id='projects-gallery'>

            <a className='project-link' id='photo-gallery-link' rel="noreferrer" href='https://mrsandw1ch.github.io/react_photo_gallery' target='_blank'>
              <div className='project' id='photo-gallery'>
                <p className='project-name'>
                  {lang === 'ru'
                    ? <>Галерея крабов</>
                    : <>Crab photo gallery</>}
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-white.png')} alt=''/>
                </p>
                <p id='photo-gallery-text'>
                  <span className='helvetica uppercase'>charybdis</span>
                  <br/>
                  <span id='editorial'>hellerii</span>
                </p>
                <img className='project-image' src={require('../assets/images/photo_gallery.png')} alt='' />
              </div>
            </a>

            <a className='project-link' id='calculator-link' rel="noreferrer" href='https://mrsandw1ch.github.io/react_calculator' target='_blank'>
              <div className='project' id='calculator'>
                <p className='project-name'>
                  {lang === 'ru'
                    ? <>Формульный<br/>
                      калькулятор</>
                    : <>Formula logic<br/>
                      calculator</>}
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-black.png')} alt=''/>
                </p>
                <img className='project-image' src={require('../assets/images/calculator.png')} alt='' />
              </div>
            </a>
            
            <a className='project-link' id='random-quote-machine-link' rel="noreferrer" href='https://mrsandw1ch.github.io/react_random_quote_machine' target='_blank'>
              <div className='project' id='random-quote-machine'>
                <p className='project-name'>
                  {lang === 'ru'
                    ? <>Генератор цитат</>
                    : <>Random quote machine</>}
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-white.png')} alt=''/>
                </p>
                <img className='project-image' src={require('../assets/images/random_quote_machine.png')} alt='' />
              </div>
            </a>

            <a className='project-link' id='technical-documentation-page-link' rel="noreferrer" href='https://mrsandw1ch.github.io/technical_documentation' target='_blank'>
              <div className='project' id='technical-documentation-page'>
                <p className='project-name'>
                  {lang === 'ru'
                    ? <>Страница технической документации</>
                    : <>Technical documentation page</>}
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-black.png')} alt=''/>
                </p>
                <img className='project-image' src={require('../assets/images/technical_documentation_page.png')} alt='' />
              </div>
            </a>

            <a className='project-link' id='product-landing-page-link' rel="noreferrer" href='https://mrsandw1ch.github.io/product_landing_page' target='_blank'>
              <div className='project' id='product-landing-page'>
                <p className='project-name'>
                  {lang === 'ru'
                    ? <>Лендинг</>
                    : <>Product landing<br/>page</>}
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-black.png')} alt=''/>
                </p>
                <img className='project-image' src={require('../assets/images/product_landing_page.png')} alt='' />
              </div>
            </a>
          </div>

          
          <a className='social-link' href='https://github.com/mrsandw1ch' rel="noreferrer" target='_blank'>
            <p className='social'>
              <i className="fa-brands fa-github social-icon"></i>
              <span className='social-text uppercase'>
                {lang === 'ru'
                  ? <>Мой GitHub</>
                  : <>Visit my GitHub</>}
              </span>
            </p>
          </a>

        </section>

        <section id='technologies'>
          <h2 className='section-title'>
            {lang === 'ru'
              ? <>Технологии</>
              : <>Technologies</>}
          </h2>

          <div id='technologies-flexbox'>

            <div className='technologies-list' id='web-development'>
              <h3 className='list-title uppercase'>
                {lang === 'ru'
                  ? <>Web разработка</>
                  : <>Web Development</>}
              </h3>
              <ul className='list-items'>
                <li className='technology'>HTML</li>
                <li className='technology'>CSS, SASS</li>
                <li className='technology'>Vanilla JavaScript</li>
                <li className='technology'>ReactJS</li>
                <li className='technology'>Redux, React-Redux</li>
              </ul>
            </div>

            <div className='technologies-list' id='package-managing'>
              <h3 className='list-title uppercase'>
                {lang === 'ru'
                  ? <>Менеджер пакетов</>
                  : <>Package Managing</>}
              </h3>
              <ul className='list-items'>
                <li className='technology'>npm</li>
              </ul>
            </div>

            <div className='technologies-list' id='version-control'>
              <h3 className='list-title uppercase'>
                {lang === 'ru'
                  ? <>Контроль версий</>
                  : <>Version Control</>}
              </h3>
              <ul className='list-items'>
                <li className='technology'>Git, GitHub</li>
              </ul>
            </div>

            <div className='technologies-list' id='ide'>
              <h3 className='list-title uppercase'>
                {lang === 'ru'
                  ? <>Среда разработки</>
                  : <>IDE</>}
              </h3>
              <ul className='list-items'>
                <li className='technology'>Visual Studio Code</li>
              </ul>
            </div>

            <div className='technologies-list' id='operating-system'>
              <h3 className='list-title uppercase'>
                {lang === 'ru'
                  ? <>ОС</>
                  : <>Operating System</>}
              </h3>
              <ul className='list-items'>
                <li className='technology'>Ubuntu</li>
                <li className='technology'>Windows</li>
              </ul>
            </div>

            <div className='technologies-list' id='command-language'>
              <h3 className='list-title uppercase'>
                {lang === 'ru'
                  ? <>Командная оболочка</>
                  : <>Command Language</>}
              </h3>
              <ul className='list-items'>
                <li className='technology'>Bash</li>
              </ul>
            </div>

          </div>
          
        </section>

        <section id='about-me'>
          <h2 className='section-title'>
            {lang === 'ru'
              ? <>Обо мне</>
              : <>About me</>}
          </h2>
          <div id='about-me-container'>
            <img id='about-me-container-image' src={require('../assets/images/mrsandw1ch_coding.png')} alt='me coding'/>
            <div id='about-me-container-text'>
              {lang === 'ru'
                ? <><p>
                  Мне нравится создавать сайты с нуля. Для меня важно видеть свои проекты полностью работающими. Моя цель - освоить полный цикл разработки и создавать безопасные высокопроизводительные адаптивные кроссбраузерные приложения.</p>
                  <br/>
                  <p>Обычно я использую React<br/>
                  Есть опыт работы с jQuery, Bootstrap<br/>
                  Знаком с AJAX<br/>
                  При создании своих проектов работал с Figma<br/>
                  Часто пользуюсь терминалом, знаю Git на базовом уровне<br/>
                  Владею английским языком на уровне B2 (Intermediate)
                </p></>

                : <><p>
                  I like creating websites from scratch. I enjoy seeing my projects live on the internet. My goal is to become a fullstack developer and build responsive cross-browser applications that provide safe and perfomant experiences.</p>
                  <br/>
                  <p>Beginner React skills<br/>
                  Familiarity with jQuery, Bootstrap<br/>
                  Minimal understanding of AJAX<br/>
                  Some experience with Figma<br/>
                  Basic knowledge of Git<br/>
                  Intermediate English communication skills
                </p></>}
            </div>
          </div>
         
        </section>

        <section id='contact'>
          <h2 className='section-title'>
            {lang === 'ru'
              ? <>Контакты</>
              : <>Contact me</>}</h2>
  
          <div>
            
            <div id='social-links'>

              <a className='social-link' href='https://t.me/mrsandw1ch' rel="noreferrer" target='_blank'>
                <div className='social'>
                <i className="fa-brands fa-telegram social-icon"></i>
                  <span className='social-text uppercase'>
                    Telegram
                  </span>
                </div>
              </a>

              <a className='social-link' href='mailto:dksviridenko@gmail.com' rel="noreferrer" target='_blank'>
                <div className='social'>
                  <i className="fa-regular fa-at social-icon"></i>
                  <span className='social-text uppercase'>
                    {lang === 'en'
                      ? <>Send a mail</>
                      : <>Написать письмо</>}
                  </span>
                </div>
              </a>
           
            </div>

            <div id='copyright'>
              <p>
                &#169; 2022 coded by <a href="https://github.com/mrsandw1ch" rel='noreferrer' target='_blank'>mrsandw1ch</a>
              </p>
              <p>
                designed by <a href="https://www.behance.net/DariaBorisovna" rel='noreferrer' target='_blank'>lil_soup</a>
              </p>
            </div>

          </div>
          

        </section>
      </main>
    </div>
  );
}

export default App;
