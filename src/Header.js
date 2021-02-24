import React from 'react';
import './App.css';
import { GiSoccerKick } from "react-icons/gi";

const headercontainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}
const flexitems = {
    flexWrap: 'wrap',
}

const headerlogo = {

}

const styleheadline = {

    // fontSize: "120%",
    // padding: '0.2%',
    // paddingLeft: "8%",


}

const stylelinks = {
    // display: 'flex',
    // alignSelf: 'stretch',
    // justifyContent: 'right',
    // paddingRight: '8%',
}

function Header() {
    return (

        <div style={headercontainer}>

            <div style={headerlogo}>
                <a > <GiSoccerKick /></a>
            </div>

            <div>
                <h2> Soccer League Germany</h2>
            </div>

            <div
                style={stylelinks}>
                <a> Soccer League</a>
                <a> Latest Results</a>
                <a> Virtual League</a>
                <a> DFL</a>
            </div>

        </div>

    )
}

export default Header;
