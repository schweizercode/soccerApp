import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { BsChevronDoubleLeft } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

function Description() {
    const { idTeam } = useParams()

    const [team, setTeam] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDetail = () => {
            fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.teams[0])
                    setTeam(data.teams[0])
                    setLoading(false)
                });
        }
        fetchDetail()

    }, [])

    // const Cardtext = {
    //     fontSize: "16px",
    // }

    const cardstyle = {
        width: '55rem',

    }

    const returnbuttonstyle = {
        fontSize: '30px',
        color: 'grey',
        marginTop: '15px',
        marginLeft: '35px',
    }



    return (
        // <Link to={`/Teamslist/${team.idTeam}`}>
        //     <Button> Return</Button>
        // </Link>
        <div>
            { loading === true ? (<p>Loading..</p>) : (
                <div>
                    <Link to={`/teams/`}>
                        <BsChevronDoubleLeft
                            style={returnbuttonstyle} />
                    </Link>


                    <Card style={cardstyle}>
                        <Card.Img
                            src={team.strTeamBadge}
                            alt="Icon"
                            style={{ width: '15%' }}>
                        </Card.Img>

                        <Card.Text>
                            <h3> {team.strAlternate} </h3>
                            <p> {team.strDescriptionEN}</p>
                            <h4> Current League: {team.strLeague}</h4>
                            <h4> Formed Year: {team.intFormedYear}</h4>
                            <h4> Stadium: {team.strStadium}</h4>
                            {/* <ImFacebook <a href='{team.strFacebook}'> </a> </ImFacebook> */}

                        </Card.Text>

                    </Card >
                </div>
            )
            }
        </div >

    );
}


export default Description;