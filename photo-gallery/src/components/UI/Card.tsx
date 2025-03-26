import './styles/Card.scss'

type CardProps = {
  src: string
  alt: string
}

const Card = ({ alt, src }: CardProps) => {
  return (
    <div className='card'>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Card
