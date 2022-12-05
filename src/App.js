import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import teamsJson from "./lib/teams.json";
import "./assets/scss/style.css";
import "bootstrap/dist/css/bootstrap.css";



function App() {

  let [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamsJson);
  }, []);


  function incrementVoteCount(teamId) {
    teams = teams.map((team) => {
      if (team._id === teamId) {
        team.votes = team.votes + 1;
      }
      return team;
    });
    setTeams(teams);
  }

  return (
    
          <div className="app">
            <h1 className="title">Vote here</h1>
                <div className="app-row">
                  {teams.map((team) => {
                    return (
                      <div className="app-col">
                        <VotingCard
                          team={team}
                          incrementVoteCount={(teamId) => incrementVoteCount(teamId)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
  );
}

export default App;
