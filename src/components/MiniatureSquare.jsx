export const MiniatureSquare = ({ imageUrl, classPositionAndBadge }) => {
  return (
    <span className={`square ${classPositionAndBadge}`}>
      <img alt='Character' src={imageUrl} />
    </span>
  )
}
