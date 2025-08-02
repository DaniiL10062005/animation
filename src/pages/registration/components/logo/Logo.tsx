import type { RootState } from '../../../../store/store'
import './logo.css'
import { useSelector } from 'react-redux'

export const Logo = () => {
  const { name } = useSelector((state: RootState) => state.user)
  return (
    <div className="logo block-animation">
      <img
        className="logo-animation-start logo-animation logo-picture"
        src="/images/hand.png"
        alt="Logo"
      />
      <p className="text-animation logo-p">Привет, {name}</p>
    </div>
  )
}
