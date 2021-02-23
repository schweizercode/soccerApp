import React from 'react';
import './App.css';
import { GiSoccerKick } from "react-icons/gi";

const styleheader = {
    fontSize: "25px",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "188px",
}

function Header() {
    return (

        <div>
            <h2 style={styleheader}>
                <GiSoccerKick />
            Soccer League Germany</h2>
        </div >


    )
}

export default Header;
