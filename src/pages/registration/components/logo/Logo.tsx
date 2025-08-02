import type { RootState } from '../../../../store/store'
import './logo.css'
import { useSelector } from 'react-redux'

export const Logo = () => {
  const { name } = useSelector((state: RootState) => state.user)
  return (
    <div className="logo block-animation">
      <p className="logo-animation-start logo-animation logo-picture">&#9995;</p>
      <p className="text-animation logo-p">Привет, {name}</p>
    </div>
  )
}
