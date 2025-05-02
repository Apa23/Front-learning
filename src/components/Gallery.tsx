import { CustomImage } from '../config/types'
import Button from './UI/Button'
import Card from './Card'
import './styles/Gallery.scss'

type GalleryProps = {
  images: CustomImage[]
  onChangeImages?: () => void
}

const Gallery = ({ images, onChangeImages }: GalleryProps) => {
  return (
    <>
      <div className='gallery'>
        {images.map((image) => (
          <Card
            key={image.id}
            photoInfo={image}
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
            />
          }
        />
      </div>
    </>
  )
}

export default Gallery
