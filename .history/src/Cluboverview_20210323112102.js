import React, { useContext, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { SoccerContext } from './context/SoccerContext';
import { BiHeart } from "react-icons/bi";
import { useAuth } from './context/AuthContext';


const cardstyle = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#bfc9ca  ",
}

const columstyle = {
    padding: "8px",
}

const rowstyle = {
    marginLeft: "8px",
    marginRight: "8px",
}

const textstyleteam = {
    fontFamily: "DFLWeb,Arial,sans-serif",
    fontSize: "16px",
    justifyContent: "flex-start",
    fontWeight: "650",
    textAlign: "left",
    alignItems: "center",
    color: "black",
}

const textstylestadium = {
    fontFamily: "DFLWeb,Arial,sans-serif",
    fontSize: "12px",
    justifyContent: "flex-start",
    fontWeight: "450",
    alignItems: "center",
    color: "black",
    marginTop: "10px",
}

const textstyleheader = {
    fontFamily: "DFLWeb,Arial,sans-serif",
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "400",
    paddingTop: "39px",
    paddingLeft: "15px",
    textAlign: "left",
}

function Cluboverview() {

    const { soccerData, soccer } = useContext(SoccerContext)
    const { addtoFavorites } = useAuth()

    useEffect(() => {
        soccerData()
    }, [])


    function handleclick() {
        this.setState({
            bgColor: 'blue'
        })
    }


    return (
        <div style={{ backgroundColor: '#e5e5e5' }}>

            <h2 style={textstyleheader}>
                Club Overview | Season 2020-2021
                </h2>

            <Row style={rowstyle}>

                {soccer && soccer.map(team => (

                    <Col style={columstyle}
                        xs={12} md={6} lg={4}
                        key={team.idTeam}>


                        <Card style={cardstyle}>

                            <div style={{ width: '80%' }}>
                                <Link to={`/teams/${team.idTeam}`}>
                                    <Button
                                        style={textstyleteam}
                                        variant="link"
                                        size="lg">
                                        {team.strTeam}



                                        <Card.Text
                                            style={textstylestadium}>
                                            {team.strStadium}
                                        </Card.Text>
                                    </Button>
                                </Link>

                                <Button
                                    style={{ color: 'red', backgroundColor: '#bfc9ca', borderColor: '#bfc9ca', marginBottom: '30px', }}
                                    onClick={() => addtoFavorites(team.idTeam){this.handleClick}}>
                                    <BiHeart />
                                </Button>

                            </div>

                        <div
                            style={{ width: '20%', padding: '8px', background: 'rgba(0,0,0,.2)' }}>
                            <Link to={`/teams/${team.idTeam}`}>
                                <Card.Img
                                    src={team.strTeamBadge}
                                    alt="Icon"
                                    style={{ width: '100%' }}>
                                </Card.Img>
                            </Link>
                        </div>

                        </Card>


                    </Col>
                ))
                }
            </Row >
        </div >

    );
}

export default Cluboverview;