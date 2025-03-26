import { CustomImage } from '../config/types'
import Button from './UI/Button'
import Card from './UI/Card'
import './styles/Gallery.scss'

type GalleryProps = {
  images: CustomImage[]
  onChangeImages?: () => void
}

const Gallery = ({ images, onChangeImages }: GalleryProps) => {
  return (
    <article className='gallery-container'>
      <div className='gallery'>
        {images.map((image) => (
          <Card
            key={image.id}
            src={image.urls.raw}
            alt={image.alt_description}
          />
        ))}
      </div>
      <div className='action-button'>
        <Button
          onClick={onChangeImages}
          icon={
            <i
              className='fa-solid fa-circle-arrow-right fa-2xl'
              style={{ color: '#f9fafa' }}
            ></i>
          }
        />
      </div>
    </article>
  )
}

export default Gallery
