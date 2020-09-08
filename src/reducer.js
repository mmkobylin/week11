import './index.css';
import initial from './initial';

//here goes everything what went to 
//INDEX PREVIOUSLY, ALL THE FUNCTIONS 

  //helper function 
  const player1scores = (state) => {
    return {
        ...state,
        player1: state.player1 + 1
    }
  }

  const player2scores = (state) => {
    return {
        ...state,
        player2: state.player2 + 1
    }
  }

  const server = state => {
    return {
      ...state,
      serving: Math.floor((state.player1 + state.player2)/5) % 2 === 0 ? 1 : 2
      // dodajemy obie wartosci, dzielimy na 2. np. 3+ 4 = 7 / 5
      // module przez dwa, i dopiero wtedy //math.floor is zaokragla wartosc; 
      //sprawdz divider; jesli nie do zera, to zostaje serwowac 2. 
    }
  }

  //return a number // return a version of a state . 
  // i always want to take into functions state or action 
//they return functions

//did somone won???
const winning = state => state.player1 === 21 || state.player2 === 21; 

//who is winning? 
const getWinner = state => state.player1 > state.player2 ? 1 : 0; 

const winner = state => ({ 
  ...state,
  //this is where we get winner:  
  winner: winning(state) ? getWinner(state) : getWinner(state),
})

//dispatching the action 
const reducer = (state, action ) => {
    switch (action.type) {
                      //keep adding functions!!!
      case "PLAYER1_SCORES": return winner(server(player1scores(state)));
      case "PLAYER2_SCORES": return winner(server(player2scores(state)));
      case "RESET" : return initial;
      default: return state;
    }
  }

export default reducer;