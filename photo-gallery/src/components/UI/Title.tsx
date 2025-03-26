
type TitleProps = {
  text: string
  variant?: 'primary' | 'secondary'
}

const Title = ({ text, variant }: TitleProps) => {
  const primary = () => {
    return <h1 className='text-3xl font-bold underline'>{text}</h1>
  }

  const secondary = () => {
    return <h2 className='text-3xl font-bold'>{text}</h2>
  }

  return <>{variant === 'primary' ? primary() : secondary()}</>
}
export default Title
