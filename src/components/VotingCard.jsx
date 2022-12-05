import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";



function VotingCard(props) {

  let { team, incrementVoteCount } = props;
  const [clicked, setClicked]= useState(false);

  function handleClick(){
    incrementVoteCount(team._id)
    setClicked(true)

   }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/assets/image/${team.logo}`} />
      <Card.Body>
        <Card.Title>{team.name}</Card.Title>
        <Button style={{
          opacity: clicked ? 0 : 1
        }} variant="success" onClick={handleClick}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {team.votes}</Card.Footer>
    </Card>
  );
}
export default VotingCard;