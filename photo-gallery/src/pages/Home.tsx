import { useCallback } from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/UI/Title'
import useAxios from '../hooks/useAxios'
import { GET_RANDOM_IMAGES } from '../services/getRandomImages'
import './styles/Home.scss'
import Button from '../components/UI/Button'

const Home = () => {
  const { data: imageList, error, loading, fetch } = useAxios(GET_RANDOM_IMAGES)

  const renderContent = useCallback(() => {
    if (loading) return <p>Loading...</p>
    if (error)
      return (
        <>
          <p>An error has occurred</p>
          <Button
            icon={
              <i
                className='fa-solid fa-rotate-right fa-2xl'
                style={{ color: '#f9fafa' }}
              />
            }
            onClick={fetch}
          />
        </>
      )
    if (!imageList) return <p>No images found</p>
    return <Gallery images={imageList} onChangeImages={fetch} />
  }, [loading, error, imageList, fetch])

  return (
    <main>
      <article>
        <Title text='Header' variant='primary' />
      </article>
      <article className='gallery-container'>{renderContent()}</article>
      <article>
        <Title text='Footer' variant='secondary' />
        <p>Made by Andrés Aparicio</p>
      </article>
    </main>
  )
}

export default Home
