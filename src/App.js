import React, {useState}from "react";
import './App.css'
 

const App = () =>{

    const [turn, setturn] = useState('X')
    const [cells, setcells] = useState(Array(9).fill(''))
    const [winner,setWinner] = useState()


    const reset = () => {
        setWinner(null)
        setcells(Array(9).fill(''))
    }

    const checkwinner = (squares) =>{
        let combos = {
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            side: [
                [0,4,8],
                [6,4,2]
            ]
        }
        for(let combo in combos){
            combos[combo].forEach( pattern => {
               if(squares[pattern[0]]=== '' || squares[pattern[1]]=== '' || squares[pattern[2]]===''){

               }else if(squares[pattern[0]]===squares[pattern[1]] && squares[pattern[1]]===squares[pattern[2]]){

                setWinner(squares[pattern[0]])
                alert(`winner is player ${squares[pattern[0]]}`)
               }
               
                   
            });
        }

    }

    const handleclick =(num) =>{
        if(cells[num] !==""){
            alert("already clicked")
            return;
        }
        let squares = [...cells]
        if(turn === "X"){
            squares[num] = 'X'
            setturn("O");
        }else{
            squares[num]= "O"
            setturn("X");
        }
        checkwinner(squares)
        setcells(squares)
    }

    
    

    return(
        <div className="container">
            <h1 className="intro">welcome to my tic tac toe using React</h1>
            Turn: {turn}
            <div className="tic-container">
                <div className="singlediv" onClick={()=> handleclick(0)}>{cells[0]}</div>
                <div className="singlediv" onClick={()=> handleclick(1)}>{cells[1]}</div>
                <div className="singlediv" onClick={()=> handleclick(2)}>{cells[2]}</div>
                <div className="singlediv" onClick={()=> handleclick(3)}>{cells[3]}</div>
                <div className="singlediv" onClick={()=> handleclick(4)}>{cells[4]}</div>
                <div className="singlediv" onClick={()=> handleclick(5)}>{cells[5]}</div>
                <div className="singlediv" onClick={()=> handleclick(6)}>{cells[6]}</div>
                <div className="singlediv" onClick={()=> handleclick(7)}>{cells[7]}</div>
                <div className="singlediv" onClick={()=> handleclick(8)}>{cells[8]}</div>

                <div className="player">
                    <label className="label">SELECT PLAYER
                        <select className="opt">
                            <option value="x">X</option>
                            <option value="o">O</option>
                         </select>
                    </label>
                </div>
                <div className="resetbut">
                    <button className="Reset" type="submit" onClick={()=> reset()}>Reset</button>
                </div>
            </div>
                
        </div>
    )
}

export default App