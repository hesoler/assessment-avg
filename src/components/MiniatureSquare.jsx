export const MiniatureSquare = ({ imageUrl, classPositionAndMiniIcon }) => {
  return (
    <span className={`square ${classPositionAndMiniIcon}`}>
      <img alt='Character' src={imageUrl} />
    </span>
  )
}
