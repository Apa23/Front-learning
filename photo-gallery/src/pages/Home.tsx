import Gallery from '../components/Gallery'
import Title from '../components/UI/Title'
import useAxios from '../hooks/useAxios'
import { GET_RANDOM_IMAGES } from '../services/getRandomImages'
import './styles/Home.scss'

const Home = () => {
  const { data: imageList, error, loading, fetch } = useAxios(GET_RANDOM_IMAGES)



  return (
    <main>
      <article>
        <Title text='Header' variant='primary' />
      </article>
      <Gallery images={imageList ?? []} onChangeImages={fetch}/>
      <article>
        <Title text='Footer' variant='secondary' />
        <p>Made by Andrés Aparicio</p>
      </article>
    </main>
  )
}

export default Home
