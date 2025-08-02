import { Block } from '../../../../shared'
import './contacts.css'

export const Contacts = () => {
  return (
    <Block className="box">
      <div className="contacts-container">
        <img className="icon" src="/public/images/mail.png" alt="Почта" />
        <p className="link">danya.ruban.2005@mail.ru</p>
      </div>
      <div className="contacts-container">
        <img className="icon" src="/public/images/github_con.png" alt="GitHub" />
        <a className="link" target="_blank" href="https://github.com/DaniiL10062005">
          https://github.com/DaniiL10062005
        </a>
      </div>
      <div className="contacts-container">
        <img className="icon" src="/public/images/tg.png" alt="Telegram" />
        <a className="link" target="_blank" href="https://t.me/YukiRDA">
          https://t.me/YukiRDA
        </a>
      </div>
    </Block>
  )
}
