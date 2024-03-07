import { games } from '../mock/games.json'

export const useGames = () => {
  const searchGameByName = search => {
    return (games.filter(game => game.name.toLowerCase().includes(search.toLowerCase())))
  }

  const getTeamsByGame = (gameList) => {
    const teamList = []
    gameList.map(({ teams }) => teamList.push(teams))
    return teamList.flat()
  }

  const addUserToTeam = (teamId) => {
    const team = games.teams.filter({ id: teamId })
    // team.members.push()
    console.log(team)
  }

  return { searchGameByName, getTeamsByGame, addUserToTeam }
}
