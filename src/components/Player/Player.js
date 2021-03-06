import React from "react";

const Player = ({
    serving,
    player,
    handlePlayer, //don't need worry yet 
    winner,
    playerScore,
    //more general with the name; 
    playername

    

}) => {
    return(

        <div className="col-md-6 mt-4">          
            {/* if i want if statement, i need curly brackets */}
              <div className={ "card text-center" + (serving === player ? "card text-center bg-dark text-white" : "card text-center") }>
                    <h5 className="card-header"> { playername ? playername : player } </h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ playerScore }</p>
                    </div>

                    {/* <Buttons />  */}
                    <div className="card-footer">
                        <button 
                          onClick= { handlePlayer }
                          disabled= { winner !== null }
                          className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
    )
}

export default Player;