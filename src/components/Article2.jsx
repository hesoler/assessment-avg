import { useEffect, useState } from 'react'
import { useScheme } from '../hooks/useScheme'

export const Article2 = () => {
  const [imageUrl, setImageUrl] = useState('')
  const { scheme } = useScheme()

  useEffect(() => {
    const newImageUrl = scheme === 'dark'
      ? 'src/images/fortnite-character-2.png'
      : 'src/images/fortnite-character-1.png'
    setImageUrl(newImageUrl)
  }, [scheme])

  return (
    <article className='panel-2'>
      <h2>Fortnite New Season</h2>
      <h3>Join Live Stream</h3>
      <span>
        <input type='image' className='addUser' src='/src/assets/add_user_profile_person_avatar_icon.svg' alt='Add user icon' />
        <button className='timeLeft'>
          <p>11&nbsp;&nbsp;:&nbsp;&nbsp;45</p>
        </button>
      </span>
      <img className='fortnite-character' src={imageUrl} alt='Fortnite Character' />
    </article>
  )
}
