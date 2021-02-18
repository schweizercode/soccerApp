import React from 'react';
import './App.css';

function About() {
    return (
        <list class="list">

            <h1> Teams</h1>

            {this.state.teams.map(team => (

                <ol class="teams">

                    <img class="Icon"

                        src={team.strTeamBadge}

                        alt="Icon"></img>

                    <button variant="primary" size="lg" bg="dark" block>{team.strTeam} </button></ol>

            ))
            }
        </list >
    );
}

export default About;