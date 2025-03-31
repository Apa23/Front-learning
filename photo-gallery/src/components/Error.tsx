import Button from './UI/Button'
import './styles/Error.scss'

type ErrorProps = {
  onClick: () => void
}

const Error = ({ onClick }: ErrorProps) => {
  return (
    <div className='error-container'>
      <i
        className='fa-solid fa-triangle-exclamation'
        style={{ color: '#ffd43b', fontSize: '4rem' }}
      ></i>
      <p>An error has occurred</p>
      <Button
        icon={
          <i
            className='fa-solid fa-rotate-right fa-2xl'
            style={{ color: '#f9fafa' }}
          />
        }
        onClick={onClick}
      />
    </div>
  )
}

export default Error
