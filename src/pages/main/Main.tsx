import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useNavigate } from 'react-router-dom'
import './main.css'
import { AboutMeBlock, Contacts, Education, MyProjects, MyStackBlock } from './components'
import { Footer } from '../../components'

export const Main = () => {
  const { name } = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (name === null || name === '') {
      navigate('registration')
    }
  }, [])

  return (
    <div className="main">
      <p className="welcome-message welcome-message-animation">
        Добро пожаловать на мой сайт, {name}!
      </p>
      <div className=" main-content-animation">
        <div className="main-container">
          <AboutMeBlock />
          <MyStackBlock />
          <Contacts />
          <MyProjects />
          <Education />
        </div>
        <Footer />
      </div>
    </div>
  )
}
