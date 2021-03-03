import { createContext, useState, setState } from 'react';

export const SoccerContext = createContext()


export const SoccerContextProvider = ({ children }) => {

    const [data, setData] = useState()
    const [team, setTeam] = useState()
    const [loading, setLoading] = useState(false)
    const [league, setLeague] = useState
    const [soccer, setSoccer] = setState


    const fetchData = async () => {
        setLoading(true)
        const response = await fetch("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=138434")
        const data = await response.json()
        console.log('data', data)
        setLoading(false)
        setData(data.results)
    }


    const fetchTeam = async (idTeam) => {
        setLoading(true)
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        const data = await response.json()
        console.log(data.teams[0])
        setLoading(false)
        setTeam(data.teams[0])
    }


    const fetchLeague = async (idLeague) => {
        setLoading(true)
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${idLeague.toString()}&s=2020-2021`)
        const data = await response.json()
        console.log(data.league)
        setLoading(false)
        setLeague(data.League)
    }


    const soccerData = async () => {
        setLoading(true)
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Germany')
        const data = await response.json()
        console.log(soccer)

    }

    return (
        <SoccerContext.Provider value={{ data, setData, fetchData, team, fetchTeam, loading }}>
            { children}
        </SoccerContext.Provider >
    )
}

