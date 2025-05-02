import { useMemo } from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/UI/Title'
import useAxios from '../hooks/useAxios'
import { GET_RANDOM_IMAGES } from '../services/getRandomImages'
import './styles/Home.scss'
import Error from '../components/Error'

const Home = () => {
  const { data: imageList, error, loading, fetch } = useAxios(GET_RANDOM_IMAGES)

  const renderContent = useMemo(() => {
    if (loading) return <p>Loading...</p>
    if (error) return <Error onClick={fetch} />
    if (!imageList) return <p>No images found</p>
    return <Gallery images={imageList} onChangeImages={fetch} />
  }, [loading, error, imageList, fetch])

  return (
    <main>
      <article className='header-container'>
        <Title text='Photo Gallery' variant='primary' />
      </article>
      <article className='gallery-container'>{renderContent}</article>
      <article className='footer-container'>
        <Title text='Made by Andrés Aparicio' variant='secondary' />
        <i
          className='fa-brands fa-github fa-2xl'
          style={{ color: '#f9fafa', cursor: 'pointer' }}
          onClick={() => {
            window.open('https://github.com/Apa23/', '_blank')
          }}
        />
      </article>
    </main>
  )
}

export default Home
