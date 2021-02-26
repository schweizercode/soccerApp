import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { BsChevronDoubleLeft } from "react-icons/bs";
import { GrInstagram, GrTwitter, GrFacebookOption } from "react-icons/gr";
import Table from './Table.js';

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

    const flexcontainerstyle = {
        // display: 'flex',
        flexDirection: 'row',

    }

    const flexitemcardstyle = {
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(68, 66, 64, 0.09)',
        marginLeft: '10%',
        marginRight: '10%',


    }

    const returnbuttonstyle = {
        // fontSize: '28px',
        marginTop: '2%',
        marginLeft: '2%',
        marginBottom: '2%',
        color: 'grey',
    }


    return (

        <div
            style=
            {{ flexcontainerstyle }}>

            { loading === true ? (<p>Loading..</p>) : (


                <div>
                    <Link to={`/teams/`}>
                        <BsChevronDoubleLeft
                            style={returnbuttonstyle} />
                    </Link>


                    <Card style={flexitemcardstyle}>

                        <Card.Header>
                            <h4 style={{
                                // backgroundColor: 'rgb(220, 218, 219)'
                            }}> {team.strAlternate} </h4>
                        </Card.Header>

                        <Card.Img
                            src={team.strTeamBadge}
                            // alt="Icon"
                            style={{ width: '15%' }}>
                        </Card.Img>

                        <Card.Text>
                            <p style={{
                                backgroundColor: 'rgb(220, 218, 219)'
                            }}> {team.strDescriptionEN}</p>


                            <h4 > Current League: {team.strLeague}</h4>

                            <h4 style={{ backgroundColor: 'rgb(220, 218, 219)' }}> Formed Year: {team.intFormedYear}</h4>

                            <h4 > Stadium: {team.strStadium}</h4>

                            <Link to={{ pathname: `https://${team.strFacebook}` }} target="_blank" >
                                <GrFacebookOption />
                            </Link>

                            <Link to={{ pathname: `https://${team.strInstagram}` }} target="_blank" >
                                <GrInstagram />
                            </Link>
                            <Link to={{ pathname: `https://${team.strTwitter}` }} target="_blank" >
                                <GrTwitter />
                            </Link>

                        </Card.Text>

                    </Card >

                    <Table idLeague={team.idLeague}>


                    </Table>
                </div>
            )
            }
        </div >

    );
}


export default Description;