import { useScheme } from '../hooks/useScheme'

export const SchemeSwitch = () => {
  const { labelText, setWasDarkSchemeActivated } = useScheme()

  return (
    <span id='scheme'>
      <input
        id='sliderRound'
        type='checkbox'
        defaultChecked
        onChange={(event) => setWasDarkSchemeActivated(event.target.checked)}
      />
      <label htmlFor='sliderRound'>{labelText}</label>
    </span>
  )
}
