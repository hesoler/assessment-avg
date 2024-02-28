import { useScheme } from '../hooks/useScheme'

export const SchemeSwitch = () => {
  const { labelText, scheme, setLabelText, setScheme } = useScheme()
  const checked = scheme !== 'dark'

  const handleTheme = event => {
    if (!event.target.checked) {
      setScheme('light')
      setLabelText('Light theme')
      document.documentElement.setAttribute('toggleScheme', 'light')
    } else {
      setScheme('dark')
      setLabelText('Dark theme')
      document.documentElement.setAttribute('toggleScheme', 'dark')
    }
  }

  return (
    <>
      <input id='sliderRound' type='checkbox' defaultChecked={checked} onChange={handleTheme} />
      <label htmlFor='sliderRound'>{labelText}</label>
    </>
  )
}
