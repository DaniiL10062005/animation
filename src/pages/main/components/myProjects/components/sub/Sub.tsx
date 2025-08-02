import './sub.css'

type Props = {
  text: string
}

export const Sub = ({ text }: Props) => {
  return <div className="about-project">{text}</div>
}
