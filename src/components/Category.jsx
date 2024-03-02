export const Category = ({ title, imageUrl }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundBlendMode: 'lighten',
    backgroundColor: 'rgba(142, 61, 247, 0.7)'
  }

  return (
    <li className='category' style={imageUrl && style}>
      <h2>{title}</h2>
      <p>➡</p>
    </li>
  )
}
