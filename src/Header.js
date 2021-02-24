import React from 'react';
import './App.css';
import { GiSoccerKick } from "react-icons/gi";

const styleheader = {
    display: 'flex',
    fontSize: "130%",
    padding: '0.2%',
    paddingLeft: "8%",
    flexDirection: 'row',
    // justifyContent: 'space-around',

}

function Header() {
    return (


        <div>

            <h2
                style={styleheader}>
                <GiSoccerKick />
            Soccer League Germany</h2>
        </div >

    )
}

export default Header;
