import { useScheme } from '../hooks/useScheme'

export const SchemeSwitch = () => {
  const { labelText, setChecked } = useScheme()
  return (
    <span id='scheme'>
      <input id='sliderRound' type='checkbox' defaultChecked onChange={event => setChecked(event.target.checked)} />
      <label htmlFor='sliderRound'>{labelText}</label>
    </span>
  )
}
