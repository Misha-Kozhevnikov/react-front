import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import { Card } from './components/Card/Card.jsx'
import style from './App.module.css'
import { Header } from './components/Header/Header.jsx'
import { ProgressBar } from './components/ProgressBar/ProgressBar.jsx'
import { MainBlock } from './components/MainBlock/MainBlock.jsx'
import { Row } from './components/Row/Row.jsx'

const FILTERS = {
  ALL: 'all',
  WORK_ENV: 'work_env',
  LIBRARIES: 'libraries',
  PASSED: 'passed',
  NOT_PASSED: 'not_passed',
}

const COURSES = [
  {
    id: 'start',
    title: 'Начало работы',
    categories: ['Для новичка', ' Основы работы'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    tag: 'work_env',
    passed: false,
  },
  {
    id: 'gpn',
    title: 'Работа с библиотеками GPN',
    categories: ['Профессионалу', 'Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    tag: 'libraries',
    passed: true,
  },
  {
    id: 'work-env-intro',
    title: 'Введение в рабочую среду',
    categories: ['Профессионалу', 'Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    tag: 'work_env',
    passed: true,
  },
  {
    id: 'start-2',
    title: 'Начало работы',
    categories: ['Для новичка', ' Основы работы'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    tag: 'work_env',
    passed: false,
  },
  {
    id: 'gpn-2',
    title: 'Работа с библиотеками GPN',
    categories: ['Профессионалу', 'Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    tag: 'libraries',
    passed: false,
  },
  {
    id: 'work-env-intro-2',
    title: 'Введение в рабочую среду',
    categories: ['Профессионалу', 'Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    tag: 'work_env',
    passed: true,
  },
]

function App() {
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL)

  const filteredCourses = useMemo(() => {
    if (activeFilter === FILTERS.ALL) return COURSES
    if (activeFilter === FILTERS.WORK_ENV) return COURSES.filter((c) => c.tag === 'work_env')
    if (activeFilter === FILTERS.LIBRARIES) return COURSES.filter((c) => c.tag === 'libraries')
    if (activeFilter === FILTERS.PASSED) return COURSES.filter((c) => c.passed)
    if (activeFilter === FILTERS.NOT_PASSED) return COURSES.filter((c) => !c.passed)
    return COURSES
  }, [activeFilter])

  return (
    <>
      <div className={style.container}>
        <Header title="Портал разработчика" learn="Мое обучение" task="Задачи" />

        <main className={style.main}>
          <section className={style.section}>
            <p className={style.headline}>Рекомендуемые темы</p>
            <div className={style.whiteBlock}>
              <div className={style.circle}>
                <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M85 8C101.261 8 117.104 13.1478 130.259 22.7057C143.415 32.2636 153.206 45.7408 158.231 61.2057C163.256 76.6706 163.256 93.3294 158.231 108.794C153.206 124.259 143.415 137.736 130.259 147.294C117.104 156.852 101.261 162 85 162C68.7392 162 52.8958 156.852 39.7405 147.294C26.5853 137.736 16.7935 124.259 11.7686 108.794C6.74378 93.3294 6.74378 76.6706 11.7687 61.2057"
                    stroke="#24C38E"
                    strokeWidth="16"
                  />
                </svg>
                <ProgressBar />
              </div>
              <MainBlock
                title="Начало работы"
                categories={['Для новичка', ' Основы работы']}
                desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                prButton="Продолжить тему"
              />
            </div>
          </section>

          <section className={style.section}>
            <div className={style.secondBlock}>
              <button className={style.secondaryButton} type="button">
                Показать еще
              </button>
            </div>
          </section>

          <section className={style.section}>
            <div className={style.secondBlocks}>
              <div className={style.sectionHeader}>
                <h2>Путь FrontEnd Developer</h2>
                <button className={style.lightButton} type="button">
                  Скрыть пройденные
                </button>
              </div>

              <div className={style.cardGrid}>
                <Card
                  title="Добро пожаловать!"
                  categories={['Для новичка', ' Основы работы']}
                  desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                />
                <Card
                  title="Начало работы"
                  categories={['Для новичка', ' Основы работы']}
                  desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                />
                <Card
                  title="Введение в рабочую среду"
                  categories={['Для новичка', ' Основы работы']}
                  desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                />
              </div>
            </div>
          </section>

          <section className={style.section}>
            <p className={style.headline}>Каталог тем</p>

            <Row activeFilter={activeFilter} onChange={setActiveFilter} />

            <div className={style.notWhiteBlock}>
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  title={course.title}
                  categories={course.categories}
                  desc={course.desc}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
