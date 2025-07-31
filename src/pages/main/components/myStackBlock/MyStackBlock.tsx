import './myStackBlock.css'

export const MyStackBlock = () => {
  return (
    <div className="my-stack-block">
      <p className="header">Мой стек технологий</p>
      <div className="stack-container react">
        <img src="/src/assets/react.png" alt="React" className="stack-image" />
        <p>
          React (Hooks, Context, react-router, react-hook-form, react-i18next, react-redux), React
          Native
        </p>
      </div>
      <div className="stack-container">
        <img src="/src/assets/html.png" alt="HTML" className="stack-image" />
        <img src="/src/assets/js.png" alt="JavaScript" className="stack-image" />
        <img src="/src/assets/css.png" alt="CSS" className="stack-image" />
        <p>JavaScript, TypeScript, HTML, CSS</p>
      </div>
      <div className="stack-container git">
        <img src="/src/assets/git.png" alt="Git" className="stack-image" />
        <img src="/src/assets/github.png" alt="GitHub" className="stack-image" />
        <p>Git, GitHub</p>
      </div>
      <div className="stack-container tailwind">
        <img src="/src/assets/tailwind.png" alt="Tailwind" className="stack-image" />
        <p>Axios, MUI, ANTDesign, React Native Paper, Zustand, zod, Tailwind, Fetch</p>
      </div>
      <div className="stack-container sql">
        <img src="/src/assets/postgresql.png" alt="PostgreSQL" className="stack-image" />
        <p>PostgreSQL</p>
      </div>
    </div>
  )
}
