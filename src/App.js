import React, { useState } from "react";
import './App.css';

const App=()=>{
  const grid=[
    ["white","white","white"],
    ["white","white","white"],
    ["white","white","white"],
  ];
  const[grids,setGrid]=useState(grid);
  const[clickGrid,setClickGrid]=useState([]);

  const handleClick=(row,col)=>{
    const gridsClick=grids.map((row)=>[...row]);
    if(gridsClick[row][col]==="white"){
      gridsClick[row][col]="green";
      setClickGrid([...clickGrid,{row,col}])
    }
    if(row===2 && col==2){
      clickGrid.forEach((i,index)=>{
        setTimeout(()=>{
          gridsClick[i.row][i.col]="orange";
          setGrid([...gridsClick])
        },index*500);
      })
    }
    setGrid(gridsClick)
  }
  return(
    <div className="bg">
      {grids.map((row,rowIndex)=> row.map((col,colIndex)=>(
        <div 
        className="grid-box" 
        key={`${rowIndex}-${colIndex}`}
        style={{backgroundColor: col}}
        onClick={()=> handleClick(rowIndex,colIndex)}>
        </div>
      )))}
    </div>
  )
}

export default App;
