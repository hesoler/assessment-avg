import { useScheme } from '../hooks/useScheme'

export const Panel2 = () => {
  const { fortniteCharacterImageUrl } = useScheme()

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
      <img className='fortnite-character' src={fortniteCharacterImageUrl} alt='Fortnite Character' />
    </article>
  )
}
