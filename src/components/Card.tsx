import { type CustomImage } from '../config/types'
import Caption from './UI/Description'
import './styles/Card.scss'

type CardProps = {
  photoInfo: CustomImage
}

const Card = ({ photoInfo }: CardProps) => {
  return (
    <div
      className='card'
      onClick={() =>
        photoInfo.user.portfolio_url
          ? window.open(photoInfo.user.portfolio_url, '_blank')
          : window.open(photoInfo.links.html, '_blank')
      }
    >
      <img src={photoInfo.urls.raw} alt={photoInfo.alt_description} />
      <Caption userInfo={photoInfo.user} likes={photoInfo.likes} />
    </div>
  )
}

export default Card
