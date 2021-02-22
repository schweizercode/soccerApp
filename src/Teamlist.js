import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';


function Teamlist({ teams }) {
    return (
        <div class="container-fluid">


            <h1> Club Overview</h1>

            <Card class="main" >
                <div class="clubs-page">

                    {teams && teams.map(team => (

                        <div class="clubtitle">

                            <Link to={`/teams/${team.idTeam}`}>

                                <div class="team-card">

                                    <div class="Icon">

                                        <img class="Icon"
                                            src={team.strTeamBadge}
                                            alt="Icon">
                                        </img>
                                    </div>

                                    <div class="Stadium"> {team.strStadium}</div>

                                    <div className="Teambutton">
                                        <button variant="primary" size="lg" bg="dark" block>
                                            {team.strTeam}
                                        </button>
                                    </div>
                                </div>


                            </Link>
                        </div>
                    ))
                    }
                </div>
            </Card>
        </div >

    );
}

export default Teamlist;