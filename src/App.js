import "./App.css";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { BsCircle,BsFillPencilFill } from 'react-icons/bs';
import {ImCross}from 'react-icons/im';
import Icon from "./Components/Icon";
const itemArray = new Array(9).fill("empty");
// BsCircle
function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  // console.log(itemArray);
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty");
  };
  const checkWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    }
  };

  const handleItem=(index)=>{
    if(winMessage){
      return alert("Won already")
    }
    else if(itemArray[index]==='empty'){
      itemArray[index]=isCross?"cross":"circle";
      setIsCross(!isCross);
    }else{
      return alert("already filled");
    }
    checkWinner();
    // console.log(itemArray);
  }

return (
    <div className="App">
      {winMessage?(
        <>
        <h1>{winMessage}</h1>
        <button onClick={reloadGame}>Restart</button>
        </>)
        :(
          <>
          <h1>{isCross?"cross":"circle"} Turn</h1>
          </>
        )
      }
      
      <div className="grid">
      
        {itemArray.map((item, index) => (
          <Card className="box" onClick={()=>handleItem(index)}>
            <Card.Body>
              {/* {switch ({item}) {
                case "circle":
                  return <BsCircle size={40}/>
                case "cross":
                  return <ImCross size={40}/>
                default:
                  return <BsFillPencilFill size={40}/>
              }}
              {if({item}==="circle"){
                return <BsCircle size={40}/>
              }} */}
              {/* {item} */}
              <Icon name={item} />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
