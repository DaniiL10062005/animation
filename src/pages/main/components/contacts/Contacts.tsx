import './contacts.css'

export const Contacts = () => {
  return (
    <div className="contacts-block">
      <div>
        <img src="/src/assets/mail.png" alt="Почта" />
        <p>
          danya.ruban.2005@mail.ru
        </p>
      </div>
      <div>
        <img src="/src/assets/github_con.png" alt="GitHub" />
        <a target="_blank" href="https://github.com/DaniiL10062005">
          https://github.com/DaniiL10062005
        </a>
      </div>
      <div>
        <img src="/src/assets/tg.png" alt="Telegram" />
        <a target="_blank" href="https://t.me/YukiRDA">
          {' '}
          https://t.me/YukiRDA
        </a>
      </div>
    </div>
  )
}
