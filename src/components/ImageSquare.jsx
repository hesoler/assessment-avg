export const ImageSquare = ({ imageUrl, className }) => {
  const style = {
    // backgroundImage: `url(${imageUrl})`,
  }

  return (
    <span className={`square ${className}`} style={style}>
      <img alt='Miniature' src={imageUrl} />
    </span>
  )
}
