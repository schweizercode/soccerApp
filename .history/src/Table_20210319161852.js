import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'

function League({ idLeague }) {

    console.log(idLeague)
    const [league, setLeague] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDetail = () => {
            fetch(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${idLeague.toString()}&s=2020-2021`)
                .then(response => response.json())
                .then(result => setLeague(result.table))
            console.log(result.table)
                .catch(error => console.log('error', error));
        }

        fetchDetail()
    }, [])


    return (

        <Table striped bordered hover variant="dark"
            style={{
                marginTop: '10%',
                backgroundColor: 'rgb(81, 93, 105)'
            }}>

            <thead>
                <tr>
                    <th>Position</th>
                    <th> Team</th>
                    <th> Int Played</th>
                    <th> Int Win</th>
                    <th> Int Loss</th>
                    <th> Int Points</th>
                </tr>
            </thead>

            {league && league.map(team => (

                <tr>
                    <td>{team.intRank}</td>
                    <td >{team.strTeam}</td>
                    <td>{team.intPlayed}</td>
                    <td>{team.intWin}</td>
                    <td>{team.intLoss}</td>
                    <td>{team.intPoints}</td>
                </tr>))}
        </Table>
    )
}

export default League;
