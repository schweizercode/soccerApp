import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';


const cardstyle = {
    display: "flex",
    flexDirection: "row",
}

const columstyle = {
    padding: "8px",
}

const rowstyle = {
    marginLeft: "8px",
    marginRight: "8px",
}

function Teamlist({ teams }) {
    return (
        <div>
            <h2> Club Overview | Season 2020-2021</h2>
            <Row style={rowstyle}>
                {teams && teams.map(team => (
                    <Col style={columstyle}
                        xs={12} md={6} lg={4}
                        key={team.idTeam}>

                        <Link to={`/teams/${team.idTeam}`}>

                            <Card style={cardstyle}>

                                <div style={{ width: '80%' }}>

                                    <Button variant="link" size="lg">
                                        {team.strTeam}
                                    </Button>

                                    <Card.Text>{team.strStadium}</Card.Text>
                                </div>

                                <Card.Img
                                    src={team.strTeamBadge}
                                    alt="Icon"
                                    style={{ width: '20%' }}>
                                </Card.Img>

                            </Card>

                        </Link>
                    </Col>
                ))
                }
            </Row>
        </div >

    );
}

export default Teamlist;