import { useEffect, useState } from 'react';
import './App.scss';

function App() {  
  const [lang, setLang] = useState('en');
  const [scrollDirection, setScrollDirection] = useState('up');
  const [displayNavbar, setDisplayNavbar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    function updateScrollDirection() {
      const scrollY = window.pageYOffset;
      const direction = (scrollY > lastScrollY) ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
        setDisplayNavbar(direction === 'down' && false);
      }
      lastScrollY = scrollY;
    };
    window.addEventListener("wheel", updateScrollDirection);
    window.addEventListener("touchmove", updateScrollDirection);

    return () => {
      window.removeEventListener("wheel", updateScrollDirection);
      window.addEventListener("touchmove", updateScrollDirection);
  };
  }, [scrollDirection]);

  return (
    <div className="App">
      <header
        className={"App-header" + ((scrollDirection === 'up') ? ' display' : ' hide')}>

        <nav className={'navbar' + ((displayNavbar) ? ' display' : ' hide')}>
          <a
            className="nav-link"
            href="#home"
            onClick={() => {setDisplayNavbar(false)}}>
            {lang === 'ru'
              ? <>в начало</>
              : <>hello</>}
          </a>
          <a
            className="nav-link"
            href="#projects"
            onClick={() => {setDisplayNavbar(false)}}>
            {lang === 'ru'
              ? <>портфолио</>
              : <>projects</>}
            </a>
          <a
            className="nav-link"
            href="#technologies"
            onClick={() => {setDisplayNavbar(false)}}>
            {lang === 'ru'
              ? <>технологии</>
              : <>technologies</>}
          </a>
          <a
            className="nav-link"
            href="#about-me"
            onClick={() => {setDisplayNavbar(false)}}>
            {lang === 'ru'
              ? <>обо мне</>
              : <>about</>}
          </a>
          <a
            className="nav-link"
            href="#contact"
            onClick={() => {setDisplayNavbar(false)}}>
            {lang === 'ru'
              ? <>контакты</>
              : <>contact</>}
          </a>

          <div id='header-social-links'>
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

          <div id='header-copyright'>
            <p>
              &#169; 2022 coded by <a href="https://github.com/mrsandw1ch" rel='noreferrer' target='_blank'>mrsandw1ch</a>
              <br/>
              designed by <a href="https://www.behance.net/DariaBorisovna" rel='noreferrer' target='_blank'>lil_soup</a>
            </p>
          </div>

        </nav>

        <div id='toggle-buttons'>

          <div id="toggle-lang">

            <button
                className='lang-btn'
                style={{textDecoration: lang === 'ru' ? 'underline' : 'none'}}
                onClick={() => {setLang('ru')}}>
                ru
            </button>

            <span className='lang-slash'>&nbsp;/&nbsp;</span>

            <button
                className='lang-btn'
                style={{textDecoration: lang === 'en' ? 'underline' : 'none'}}
                onClick={() => {setLang('en')}}>
                en
            </button>

            </div>

            <div
              id='toggle-navbar' className={(displayNavbar) ? 'clicked' : ''}
              onClick={() => {setDisplayNavbar(!displayNavbar)}}>
              <div id='bar-1'></div>
              <div id='bar-2'></div>
            </div>

        </div>
          

      </header>

      <main>

        <section id='home'>
          <h1 id="hello">
            {lang === 'ru'
              ? <>
                  Привет, 
                  <br className='line-break'/>
                  я Дима&nbsp;
                  <img className='otter-mobile' src={require('../assets/images/otter.png')} alt=''/>
                </>
              : <>
                  Hello <img className='otter-mobile' src={require('../assets/images/otter.png')} alt=''/>
                  <br className='line-break'/>
                  I'm Dmitry</>}
            <img id='otter-desktop' src={require('../assets/images/otter.png')} alt=''/>
          </h1>
          <p id="description">
            {lang === 'ru'
              ? <>Web разработчик. Специализируюсь на создании React-приложений. Ниже - примеры моих работ.<br/></>
              : <>A web developer. Specializing in building React applications. Feel free to take a look at my latest projects.<br/></>}
            <a id="email" href="mailto:dksviridenko@gmail.com">
              dksviridenko@gmail.com
            </a>
          </p>
        </section>

        <section id='projects'>
          <h2
            className='section-title'>
            {lang === 'ru'
                ? <>Мои проекты</>
                : <>Some of <br className='line-break'/>my projects</>}
          </h2>

          <div id='projects-gallery'>

            <a className='project-link' id='photo-gallery-link' rel="noreferrer" href='https://mrsandw1ch.github.io/react_photo_gallery' target='_blank'>
              <div className='project' id='photo-gallery'>
                <p className='project-name'>
                  {lang === 'ru'
                    ? <>Фотогалерея</>
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
                    ? <>Формульный <br className='line-break'/>
                      калькулятор</>
                    : <>Formula logic <br className='line-break'/>
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
                    : <>Product landing <br className='line-break'/>page</>}
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-black.png')} alt=''/>
                </p>
                <img className='project-image' src={require('../assets/images/product_landing_page.png')} alt='' />
              </div>
            </a>

            <a className='project-link' id='landing-page-link' rel="noreferrer" href='https://mrsandw1ch.github.io/landing_page' target='_blank'>
              <div className='project' id='landing-page'>
                <p className='project-name'>
                  {lang === 'ru'
                    ? <>Лендинг</>
                    : <>Landing page</>}
                  <img className='project-name-arrow' src={require('../assets/icons/arrow-white.png')} alt=''/>
                </p>
                <img className='project-image' src={require('../assets/images/landing_page.png')} alt='' />
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
              ? <p>Техно<span className='transfer'>- <br/></span>логии</p>
              : <p>Techno<span className='transfer'>- <br/></span>logies</p>}
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
                ? <p>
                  Мне нравится создавать сайты с нуля. Для меня важно видеть свои проекты полностью работающими.<br/>
                  Моя цель - освоить полный цикл разработки на стеке MERN и создавать безопасные высокопроизводительные адаптивные кроссбраузерные приложения.<br/>
                  <br/>
                  Также знаком с jQuery, Bootstrap, знаю, что такое AJAX, есть опыт работы с Figma.
                  Владею английским на уровне B2 (Intermediate), грамотно пишу и говорю на русском языке.
                  </p>

                : <p>
                  I like creating websites from scratch. I enjoy seeing my projects live on the internet.<br/>
                  My goal is to become a fullstack developer and build responsive cross-browser applications that provide safe and perfomant experiences.<br/>
                  <br/>
                  Familiarity with jQuery, Bootstrap, basic knowledge of AJAX, some experience with Figma.
                  Intermediate English communication skills.
                  </p>
              }
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
                      : <>Email</>}
                  </span>
                </div>
              </a>
           
            </div>

            <div id='copyright'>
              <p>
                &#169; 2022 coded by <a href="https://github.com/mrsandw1ch" rel='noreferrer' target='_blank'>mrsandw1ch</a>
                <br/>
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
