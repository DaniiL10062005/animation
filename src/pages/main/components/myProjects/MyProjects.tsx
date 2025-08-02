import { Block } from '../../../../shared'
import { Sub } from './components'
import './myProjects.css'

export const MyProjects = () => {
  return (
    <Block className="projects-block">
      <div className="header-container">
        <p className="header">
          Мои Проекты{' '}
          <img
            title="Ниже указаны самые крупные и значимые проекты в которых я принимал участие"
            className="info-icon"
            src="/images/information.png"
            alt="info"
          />
        </p>
      </div>

      <ol>
        <li>Универсальный интернет магазин</li>
        <Sub text="О проекте" />
        <p>
          Два связанных между собой приложения: пользовательская часть, где человек заказывает тот
          или иной товар и админ-панель, где администратор выставляет товары, отслеживает заказы,
          получает квитанции об оплате и может общаться с пользователями.
        </p>
        <Sub text="Технологии" />
        <p>
          TypeScript, React, React Native, Redux, Web Sockets, react-i18next, reacthook-form,
          ANTDesign, Tailwind, axios, JWT
        </p>
        <Sub text="Ссылка" />
        <p>На данный момент стартап находится в разработке (Репозиторий приватный)</p>

        <li>Система бронирования аудиторий</li>
        <Sub text="О проекте" />
        <p>
          Сайт для университета ЮФУ ИКТИБ, который имеет админ-панель и пользовательскую часть, где
          администратор добавляет аудитории, оборудование, время работы персонала и обрабатывает
          заявки, а пользователь в свою очередь может бронировать и присоединяться к коворкингам и
          мероприятиям.
        </p>
        <Sub text="Технологии" />
        <p>TypeScript, React, Next.js, Zustand, JWT, react-hook-form, Shadcn, Tailwind, axios</p>
        <Sub text="Ссылка" />
        <p>На данный момент стартап находится в разработке (Репозиторий приватный)</p>

        <li>Лендинг для компании по созданию технических масел</li>
        <Sub text="О проекте" />
        <p>Лендинг с заявками и информацией о компании </p>
        <Sub text="Технологии" />
        <p>TypeScript, React, react-hook-form, Tailwind, axios</p>
        <Sub text="Ссылка" />
        <a className="company-link" target="_blank" href="https://lubricore.ru/">
          LUBRICORE
        </a>
      </ol>
    </Block>
  )
}
