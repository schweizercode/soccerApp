import {
    Link
} from "react-router-dom";
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const CluboverviewItem = ({ item }) => {

    const { favorites } = useContext(AuthContext)

    return (
        <Link to={`/cluboverview/${team.idTeam}`} >
            {favorites.includes(item.name) && <p>favorite</p>}
            <img src={item.image} alt={team.idTeam} />
            <p>{team.idTeam}</p>
        </Link>
    )
}
export default CluboverviewItem