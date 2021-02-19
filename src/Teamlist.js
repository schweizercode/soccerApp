import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Teamlist({ teams }) {
    return (
        <list class="list">

            <h1> Teams</h1>

            {teams && teams.map(team => (

                <Link to={`/teams/${team.idTeam}`}>

                    <div class="teams">


                        <img class="Icon"

                            src={team.strTeamBadge}

                            alt="Icon"></img>

                        <button variant="primary" size="lg" bg="dark" block>{team.strTeam} </button>
                    </div>
                </Link>
            ))
            }
        </list >
    );
}

export default Teamlist;