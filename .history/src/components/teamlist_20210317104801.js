import {
    Link
} from "react-router-dom";
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'
const CharacterListItem = ({ item }) => {

    const { favorites } = useContext(AuthContext)

    return (
        <Link to={`/characters/${item.name}`} >
            {favorites.includes(item.name) && <p>favorite</p>}
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
        </Link>
    )
}
export default CharacterListItem