import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { BsChevronDoubleLeft } from "react-icons/bs";
import { GrInstagram, GrTwitter, GrFacebookOption } from "react-icons/gr";
import Table from './Table.js';
import { SoccerContext } from './context/SoccerContext';
import { ChatContext } from './context/ChatContext'


function Description() {

    const { idTeam } = useParams()
    const { team, fetchTeam, loading, } = useContext(SoccerContext);
    const { writeMessages, getMessages, messages } = useContext(ChatContext);
    const [moreDescription, setmoreDescription] = useState(false);
    const [showTable, setshowTable] = useState(false);
    const [comment, setComment] = useState('');
    console.log(messages)


    useEffect(() => {
        fetchTeam(idTeam)
        getMessages(idTeam)

    }, [])



    const flexcontainerstyle = {
        width: '100%',
        paddingRight: '0',
        paddingLeft: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
    }

    const flexitemcardstyle = {
        alignItems: 'right',
        backgroundColor: 'rgba(68, 66, 64, 0.09)',
        height: '300px',
        marginLeft: '10%',
        marginRight: '10%',
    }

    const returnbuttonstyle = {
        fontSize: '28px',
        marginTop: '2%',
        marginLeft: '2%',
        marginBottom: '2%',
        color: 'grey',
    }


    function showDescription() {
        return (
            <Card style={{ paddingTop: "95px", textAlign: 'center', backgroundColor: 'rgba(68, 66, 64, 0.09)' }}>

                <p>{team.strDescriptionEN}</p>

                <h5> Current League: {team.strLeague}</h5>

                <h5> Formed Year: {team.intFormedYear}</h5>

                <h5> Stadium: {team.strStadium}</h5>
            </Card>
        );
    }

    function showTablefunction() {
        return (
            team && (
                <div >
                    <Table style={{ display: "flex" }} idLeague={team.idLeague}> </Table>
                </div>
            )
        );
    }

    const handleClick = (e) => {
        console.log(`e.target`, e.target.name);
        if (e.target.name === "description") {
            setmoreDescription(!moreDescription);
        } else {
            setshowTable(!showTable);
        }
    };

    function CommentAdd(props) {
        const { handleCommentSubmit } = props;
        let comment = '';
    }

    function handleCommentSubmit() {

        writeMessages(idTeam, comment)

    }


    return (
        <>
            <div>
                <div
                    style={{ flexcontainerstyle }}>
                    {loading === true ? (<p>Loading..</p>) : (

                        <div>
                            <Link to={`/Cluboverview/`}>
                                <BsChevronDoubleLeft style={returnbuttonstyle} />
                            </Link>


                            {team &&
                                <Card style={flexitemcardstyle}>
                                    <Card.Header>{team.strStadium}  </Card.Header>
                                    <Card.Body>
                                        <div>
                                            <Card.Title style={{ fontSize: '25px', marginLeft: '3%' }}> {team.strAlternate} </Card.Title>

                                            <Card.Img style={{ width: '120px', height: '120px', display: 'flex', marginLeft: 'auto', marginRight: '5%' }} src={team.strTeamBadge}>
                                            </Card.Img>

                                        </div>
                                    </Card.Body>

                                    <div style={{ display: 'column' }}>
                                        <Card.Body style={{ marginLeft: '1%', marginTop: '6%', justifyContent: 'spaceAround' }}>
                                            <div>
                                                <Link to={{ pathname: `https://${team.strFacebook}` }} target="_blank" >
                                                    <GrFacebookOption style={{ color: 'grey' }} />
                                                </Link></div>
                                            <div>
                                                <Link to={{ pathname: `https://${team.strInstagram}` }} target="_blank" >
                                                    <GrInstagram style={{ color: 'grey' }} />
                                                </Link></div>
                                            <div>
                                                <Link to={{ pathname: `https://${team.strTwitter}` }} target="_blank" >
                                                    <GrTwitter style={{ color: 'grey' }} />
                                                </Link></div>
                                        </Card.Body>
                                    </div>

                                    <div style={{ color: 'grey', hover: '' }}>

                                        <Button
                                            style={{
                                                backgroundColor: "#515d69",
                                                borderColor: "white",
                                            }}
                                            className="w-50 text-center mt-2"
                                            onClick={(e) => handleClick(e)}
                                            name="description">
                                            Description
                    </Button>
                                        <Button
                                            style={{
                                                backgroundColor: "#515d69",
                                                borderColor: "white",
                                            }}
                                            className="w-50 text-center mt-2"
                                            name="table"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            Table
                    </Button>

                                        {moreDescription && showDescription()}
                                        {showTable && showTablefunction()}
                                    </div>

                                    <div >

                                        <div className="card mt-4 mb-3" style={{ alignItems: 'center' }}>

                                            <div className="card-header"><strong>Comment Section</strong> </div>
                                            <div className="card-body">
                                                <textarea name="comment" className="from-control" placehodler='Add a new comment'
                                                    onChange={event => setComment(event.target.value)} value={comment}></textarea>
                                            </div>

                                        </div>


                                        <div style={{ alignItems: 'center', textAlign: 'center' }}>
                                            <button className="btn btn-primary mr-3"
                                                style={{
                                                    backgroundColor: "#515d69", borderColor: "white",
                                                }}
                                                onClick={event => {
                                                    handleCommentSubmit();
                                                }}>Comment</button>

                                        </div>
                                    </div>
                                </Card>

                            }

                        </div>
                    )
                    }
                </div >

            </div >
        </>
    );
}



export default Description;