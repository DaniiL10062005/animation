import './footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-content-text" style={{ fontWeight: 'bold' }}>
          Иконки:
        </p>
        <a className="footer-content-text" href="https://www.flaticon.com/ru/" target="_blank">
          https://www.flaticon.com/ru/,
        </a>
        <a className="footer-content-text" href="https://icons8.ru/" target="_blank">
          https://icons8.ru/
        </a>
      </div>
    </div>
  )
}
