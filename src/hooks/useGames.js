import { useEffect, useState } from 'react'
import { games } from '../mock/games.json'
import { useAuth } from './useAuth'

export const useGames = () => {
  const { currentUser } = useAuth()
  const [teamsAddedUser, setTeamsAddedUser] = useState([])

  const searchGameByName = search => {
    return (games.filter(game => game.name.toLowerCase().includes(search.toLowerCase())))
  }

  const getTeamsByGame = (gameList) => {
    const teamList = []
    gameList.map(({ teams }) => teamList.push(teams))
    return teamList.flat()
  }

  const addUserToTeam = (team) => {
    if (currentUser) {
      team.members.push(currentUser)
      const newTeams = [...teamsAddedUser, team.id]
      window.localStorage.setItem('teams', JSON.stringify(newTeams))
      setTeamsAddedUser(newTeams)
    }
  }

  useEffect(() => {
    const savedTeams = window.localStorage.getItem('teams')
    if (savedTeams) {
      setTeamsAddedUser(JSON.parse(savedTeams))
    }
  }, [currentUser])

  return { teamsAddedUser, setTeamsAddedUser, searchGameByName, getTeamsByGame, addUserToTeam }
}
