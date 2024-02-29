import { useScheme } from '../hooks/useScheme'

export const SchemeSwitch = () => {
  const { labelText, scheme, handleColorSchemeChange } = useScheme()
  const checked = scheme !== 'dark'

  return (
    <>
      <input id='sliderRound' type='checkbox' defaultChecked={checked} onChange={handleColorSchemeChange} />
      <label htmlFor='sliderRound'>{labelText}</label>
    </>
  )
}
