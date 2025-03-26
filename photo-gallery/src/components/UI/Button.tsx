import { ReactElement } from 'react'
import './styles/Button.scss'

type ButtonProps = {
  icon?: ReactElement
  text?: string
  onClick?: () => void
}

const Button = ({ icon, text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} >
      {icon}
      {text}
    </button>
  )
}

export default Button
