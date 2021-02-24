import React from 'react';
import './App.css';
import { GiSoccerKick } from "react-icons/gi";

const styleheadline = {
    display: 'flex',
    fontSize: "130%",
    padding: '0.2%',
    paddingLeft: "8%",
    flexDirection: 'row',
    // justifyContent: 'space-around',
}

const stylelinks = {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'left',
    paddingRight: '8%',
}

function Header() {
    return (


        <div style={styleheadline}>

            <h2
            >
                <GiSoccerKick />
            Soccer League Germany</h2>
            <div
                style={stylelinks}>
                <a> Soccer League</a>
                <a> Latest Results</a>
                <a> Virtual League</a>
                <a> DFL</a>
            </div>
        </div >


    )
}

export default Header;
