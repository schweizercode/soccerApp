import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

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

    // const Cardtext = {
    //     fontSize: "16px",
    // }

    return (
        // <Link to={`/Teamslist/${team.idTeam}`}>
        //     <Button> Return</Button>
        // </Link>

        <Card>
            <Card.Img
                src={team.strTeamBadge}
                alt="Icon"
                style={{ width: '15%' }}>

            </Card.Img>



        </Card >
    );
}


export default Description;