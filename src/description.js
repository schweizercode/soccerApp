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
            {team && <img src={team.strTeamBadge} alt="Icon" ></img>}
            { team && <p> {team.strDescriptionEN}</p>}
            { team && <h4> {team.strLeague}</h4>}

        </div >
    );
}


export default Description;