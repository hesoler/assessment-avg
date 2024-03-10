import { useState } from 'react'
import { useGames } from '../hooks/useGames.js'
import filterButton from '../assets/filter.svg'

export const FilterGames = () => {
  const { teamsAddedUser, searchGameByName, getTeamsByGame, addUserToTeam } = useGames()
  const [filterGames, setFilterGames] = useState('')
  const [gameTeams, setGameTeams] = useState([])

  const handleSearch = event => setFilterGames(event.target.value)

  const makeSearch = (event) => {
    if (event.keyCode === 13 || /* pressed Enter? */
      event.target.className === 'search-button') {
      const games = searchGameByName(filterGames)
      const teams = getTeamsByGame(games)
      setGameTeams(teams)
    }
  }

  return (
    <span className='filter-games'>
      <span className='top-filter'>
        <input type='search' className='search-field' placeholder='Search Game' onChange={handleSearch} onKeyDownCapture={makeSearch} />
        <input type='image' src={filterButton} alt='Change Filter' />
      </span>
      <table className='search-results' cellPadding='0'>
        <tbody>
          {gameTeams.map((team, index) => {
            return (
              <tr key={team.id}>
                <td className='row-index'><span>{index + 1}</span></td>
                <td className='team-name'>{team.name}</td>
                <td>
                  <span className='avatar-group'>
                    {team.members.map(member => {
                      return (
                        <span key={member.id} className='avatar-card'>
                          <span className='member-name'>
                            {member.username}
                          </span>
                          <input
                            type='image'
                            src={member.image}
                            className='member-avatar'
                            alt='Avt'
                          />
                        </span>
                      )
                    })}
                  </span>
                </td>
                <td>
                  {!teamsAddedUser.includes(team.id)
                    ? <input className='add-to-team' type='button' value='+' onClick={() => addUserToTeam(team)} />
                    : ''}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <span className='gradient' />
      <input type='button' className='search-button' value='Search Now' onClick={makeSearch} />
    </span>
  )
}
