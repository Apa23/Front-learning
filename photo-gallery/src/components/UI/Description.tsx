import {  UserInfo } from '../../config/types'
import './styles/Description.scss'

type DescriptionProps = {
  userInfo: UserInfo
  likes: number
}

const Description = ({userInfo, likes}:DescriptionProps) => {
  return <div className='description-container'>
    {userInfo.name && <h3>{userInfo.name}</h3>}
    {<p>Likes: {likes}</p>}
  </div>
}

export default Description
