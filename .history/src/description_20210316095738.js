import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { BsChevronDoubleLeft } from "react-icons/bs";
import { GrInstagram, GrTwitter, GrFacebookOption } from "react-icons/gr";
import Table from './Table.js';
import { SoccerContext } from './context/soccercontext';


function Description() {

    const { idTeam } = useParams()
    const { team, fetchTeam, loading } = useContext(SoccerContext);
    const [moreDescription, setmoreDescription] = useState(false);
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
        alignItems: 'right',
        backgroundColor: 'rgba(68, 66, 64, 0.09)',
        height: '300px',
        marginLeft: '10%',
        marginRight: '10%',
    }

    const returnbuttonstyle = {
        fontSize: '28px',
        marginTop: '2%',
        marginLeft: '2%',
        marginBottom: '2%',
        color: 'grey',
    }

    function showDescription() {
        function handleClick(e) {
            e.prevemtDefault();
            console.log('The Link was clicked.')
        }

        <Card.Body style={{ paddingTop: '25px' }}>
            <p style={{
                backgroundColor: 'rgb(220, 218, 219)'
            }}> {team.strDescriptionEN}</p>

            <h4 > Current League: {team.strLeague}</h4>

            <h4 style={{ backgroundColor: 'rgb(220, 218, 219)' }}> Formed Year: {team.intFormedYear}</h4>

            <h4 > Stadium: {team.strStadium}</h4>

        </Card.Body>


    }

    function showTablet() {
        team &&
            <div style={{ display: 'flex', }}>

                <Table idLeague={team.idLeague}> </Table>
            </div>
    }

}



return (
    <>
        <div>
            <div
                style={{ flexcontainerstyle }}>
                {loading === true ? (<p>Loading..</p>) : (

                    <div>
                        <Link to={`/Cluboverview/`}>
                            <BsChevronDoubleLeft style={returnbuttonstyle} />
                        </Link>


                        {team &&
                            <Card style={flexitemcardstyle}>
                                <Card.Header>{team.strStadium}  </Card.Header>
                                <Card.Body>
                                    <div>
                                        <Card.Title style={{ fontSize: '25px', marginLeft: '3%' }}> {team.strAlternate} </Card.Title>

                                        <Card.Img style={{ width: '120px', height: '120px', display: 'flex', marginLeft: 'auto', marginRight: '5%' }} src={team.strTeamBadge}>
                                        </Card.Img>

                                    </div>
                                </Card.Body>

                                <div style={{ display: 'column' }}>
                                    <Card.Body style={{ marginLeft: '1%', marginTop: '10%', justifyContent: 'spaceAround' }}>
                                        <div>
                                            <Link to={{ pathname: `https://${team.strFacebook}` }} target="_blank" >
                                                <GrFacebookOption style={{ color: 'grey' }} />
                                            </Link></div>
                                        <div>
                                            <Link to={{ pathname: `https://${team.strInstagram}` }} target="_blank" >
                                                <GrInstagram style={{ color: 'grey' }} />
                                            </Link></div>
                                        <div>
                                            <Link to={{ pathname: `https://${team.strTwitter}` }} target="_blank" >
                                                <GrTwitter style={{ color: 'grey' }} />
                                            </Link></div>
                                    </Card.Body>
                                </div>

                                <div style={{ color: 'grey', hover: '' }}>

                                    <Button
                                        style={{ backgroundColor: '#515d69', borderColor: 'white' }}
                                        className="w-50 text-center mt-2"
                                        onCLick={handleClick}>
                                        <a>Description</a>
                                    </Button>

                                    <Button
                                        style={{ backgroundColor: '#515d69', borderColor: 'white' }}
                                        className="w-50 text-center mt-2">
                                        <a>Table</a>
                                    </Button>

                                </div>

                </div>

                    </div>
                      </>
                        }
            )
                        }
            
export default Description;