import { Fragment, useState } from "react";
import Board from "./Board";

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove,setCurrentMove]=useState(0)
  const xIsNext=currentMove%2===0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory=[...history.slice(0,currentMove+1),nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  }


  function jumpTo(nextMove){
    setCurrentMove(nextMove)
  }

  const moves=history.map((squares,move)=>{
    let description;
    if(move>0){
        description="Go to move # "+move
    }else{
        description="Go to Game Start"
    }

    return (
        <li key={move} className="text-xl text-white uppercase my-2">
              <button onClick={()=>jumpTo(move)} className=" border-indigo-600 rounded-md px-2 py-1 transition hover:text-white hover:bg-indigo-300 cursor-pointer bg-indigo-400 uppercase border-0">
               {description}
              </button>
            </li>
    )
  })

  return (
    <Fragment>
      <div className="game w-screen h-screen  bg-indigo-400 p-10 flex gap-10">
        <div className="w-6/12 ">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>

        <div className="p-10 w-6/12 game-history content  bg-white rounded-2xl shadow flex gap-20 ">
          <ul>
            {moves}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

