
import Title from '../components/UI/Title'
import './styles/Home.scss'

const Home = () => {

  return (
    <main>
      <article className='header-container'>
        <Title text='Main title' variant='primary' />
      </article>
      <article className='content-container'></article>
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
