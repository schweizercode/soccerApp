import React, { useEffect, useState } from 'react';


function Table({ idLeague }) {

    console.log(idLeague)
    const [table, setTable] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDetail = () => {
            fetch(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${idLeague.toString()}&s=2020-2021`)
                .then(response => response.json())
                .then(result => setTable(result.table))
                .catch(error => console.log('error', error));
        }

        // .then(table => {
        //     console.log(table)
        //     // setTable(table.League[0])
        //     setLoading(false)
        // });

        fetchDetail()

    }, [])


    return (

        <div>
            <table>

                {table && table.map(team => (
                    <tr>
                        <td>{team.intRank}</td>
                        <td>{team.strTeam}</td>


                    </tr>))}

            </table>
        </div>
    )
}

export default Table;
