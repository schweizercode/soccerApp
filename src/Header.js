import React from 'react';
import './App.css';
import { GiSoccerKick } from "react-icons/gi";

const styleheader = {
    display: 'flex',
    fontSize: "150%",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "8%",
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
