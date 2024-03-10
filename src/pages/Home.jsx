import { Panel1 } from '../components/Panel1'
import { Panel2 } from '../components/Panel2'
import { Panel3 } from '../components/Panel3'
import { Category } from '../components/Category'

const Home = () => {
  return (
    <>
      <section id='panels' className='section'>
        <Panel1 />
        <Panel2 />
        <Panel3 />
      </section>
      <section id='categories' className='section'>
        <h2>Trending Categories</h2>
        <ol className='categories-list'>
          <Category title='Action Games' />
          <Category title='Sports Games' />
          <Category title='adventure Games' />
          <Category title='Arcade Games' />
          <Category title='Fantasy Games' />
          <Category title='Strategy Game' />
          <Category title='Shooter Games' imageUrl='/src/assets/shooter-games.png' />
          <Category title='All Categories' last />
        </ol>
      </section>
    </>
  )
}

export default Home
