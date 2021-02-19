import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';


function Description() {
    const { idTeam } = useParams()

    const [team, setTeam] = useState(null)

    useEffect(() => {
        const fetchDetail = () => {
            fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.teams[0])
                    setTeam(data.teams[0])
                });
        }
        fetchDetail()

    }, [])



    return (
        <div className="Description">
            {/* <h2>{idTeam}</h2> */}
            {team && <h2> {team.strAlternate}</h2>}
            {team && <img src={team.strTeamBadge} alt="Teambadge" ></img>}
            { team && <p> {team.strDescriptionEN}</p>}
            { team && <h4> League: {team.strLeague}</h4>}
            { team && <h4> Formed Year: {team.intFormedYear}</h4>}
            { team && <h4> Stadium: {team.strStadium}</h4>}

        </div >
    );
}


export default Description;