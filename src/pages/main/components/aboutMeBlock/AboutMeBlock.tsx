import { Block } from '../../../../shared'
import './aboutMeBlock.css'

export const AboutMeBlock = () => {
  return (
    <Block className="about-me-block">
      <div className="photo-and-fullname">
        <img className="about-me-photo" src="/src/assets/myPhoto.png" alt="Мое фото" />
        <div>
          <p className="fullname">Рубан Даниил Андреевич</p>
          <p className="profession">Frontend-разработчик</p>
        </div>
      </div>
      <p className="description">
        Являюсь разработчиком, стремящимся к постоянному обучению и самосовершенствованию.
      </p>
      <p className="description">
        Имею упорство, целеустремленность, честность и хорошие коммуникативные навыки, что позволяет
        быстро и четко решать задачи как самостоятельно, так и в команде.
      </p>
    </Block>
  )
}
