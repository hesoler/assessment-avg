import { useEffect } from 'react'
import { useGenerateRandomColor } from '../hooks/useGenerateRandomColor'
import PropTypes from 'prop-types'

export const Category = ({ title, imageUrl, last }) => {
  const { color, generateColor } = useGenerateRandomColor()
  const style = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : '',
    backgroundBlendMode: 'lighten',
    backgroundColor: imageUrl ? 'rgba(142, 61, 247, 0.7)' : ''
  }

  useEffect(() => generateColor(), [])

  return (
    <span className='category' style={style}>
      <em style={{ color }}>
        {!last && <strong>/</strong>}
      </em>
      <li>
        <h2>{title}</h2>
        <p>➡</p>
      </li>
    </span>
  )
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  last: PropTypes.bool
}
