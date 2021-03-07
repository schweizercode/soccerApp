import React from "react";


export default class Fetch extends React.Component {
    state = {
        loading = false
    };

    async componentDidMount() {
        const url = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=138434";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <div> person.. </div>
                )}
            </div>
        );
    }
}