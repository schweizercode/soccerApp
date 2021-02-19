import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Teamlist({ teams }) {
    return (
        <div class="container-fluid">


            <h1> Club Overview</h1>

            <div class="cards">

                {teams && teams.map(team => (

                    <Link to={`/teams/${team.idTeam}`}>

                        <div class="teamlist-page container">


                            <img class="Icon"

                                src={team.strTeamBadge}

                                alt="Icon"></img>

                            <button variant="primary" size="lg" bg="dark" block>{team.strTeam} </button>
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>

    );
}

export default Teamlist;