import PropTypes from 'prop-types'

export const MiniatureSquare = ({ imageUrl, classPositionAndBadge }) => {
  return (
    <span className={`square ${classPositionAndBadge}`}>
      <img alt='Character' src={imageUrl} />
    </span>
  )
}

MiniatureSquare.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  classPositionAndBadge: PropTypes.string.isRequired
}
