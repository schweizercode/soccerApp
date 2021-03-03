import React, { useEffect, useContext } from 'react';
import './App.css';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { BsChevronDoubleLeft } from "react-icons/bs";
import { GrInstagram, GrTwitter, GrFacebookOption } from "react-icons/gr";
import Table from './Table.js';
import { SoccerContext } from './context/soccercontext';


function Description() {

    const { idTeam } = useParams()
    const { team, fetchTeam, loading } = useContext(SoccerContext)
    console.log(team)


    useEffect(() => {
        fetchTeam(idTeam)

    }, [])


    const flexcontainerstyle = {
        width: '100%',
        paddingRight: '0',
        paddingLeft: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
    }

    const flexitemcardstyle = {
        alignItems: 'center',
        backgroundColor: 'rgba(68, 66, 64, 0.09)',
        height: '200px',
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

        <div>
            <div
                style={{ flexcontainerstyle }}>
                {loading === true ? (<p>Loading..</p>) : (

                    <div>
                        <Link to={`/teams/`}>
                            <BsChevronDoubleLeft style={returnbuttonstyle} />
                        </Link>
                        {team &&
                            <Card style={flexitemcardstyle}>
                                <div> {team.strStadium} </div>
                                <div> {team.strAlternate} </div>
                                <div style={{ boxSizing: 'inherit', }}>
                                    <div>
                                        <Card.Img src={team.strTeamBadge} style={{
                                            height: '100%',
                                            weight: '100%',
                                            display: 'inline-block',
                                        }}>
                                        </Card.Img>
                                    </div>
                                </div>

                                <Card.Text>
                                    {/* <p style={{
                                backgroundColor: 'rgb(220, 218, 219)'
                            }}> {team.strDescriptionEN}</p>


                            <h4 > Current League: {team.strLeague}</h4>

                            <h4 style={{ backgroundColor: 'rgb(220, 218, 219)' }}> Formed Year: {team.intFormedYear}</h4>

                            <h4 > Stadium: {team.strStadium}</h4> */}
                                    <div>
                                        <Link to={{ pathname: `https://${team.strFacebook}` }} target="_blank" >
                                            <GrFacebookOption />
                                        </Link>
                                        <Link to={{ pathname: `https://${team.strInstagram}` }} target="_blank" >
                                            <GrInstagram />
                                        </Link>
                                        <Link to={{ pathname: `https://${team.strTwitter}` }} target="_blank" >
                                            <GrTwitter />
                                        </Link>
                                    </div>
                                </Card.Text>
                                <nav>

                                    <Button> <a>Description</a></Button>
                                    <Button><a>Table</a></Button>

                                </nav>

                            </Card >
                        }
                        {team &&
                            <div style={{ display: 'flex', }}>

                                <Table idLeague={team.idLeague}> </Table>
                            </div>
                        }
                    </div>
                )
                }
            </div >
        </div >

    );
}


export default Description;