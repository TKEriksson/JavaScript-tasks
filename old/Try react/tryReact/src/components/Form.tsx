import { useState } from "react";

type FormProps = {
  setMyNameGlobal: (v : string) => void; 
};

const Form = ({setMyNameGlobal} : FormProps) => {

  const [myName, setMyName] = useState("Namnlös? Skriv ditt namn!");

  function setName(v : string) {
    setMyName(v);
    console.log("MyName changed (locally in component Form) to: " + v);
    setMyNameGlobal(v);
  }

  return (
    <div>Namn:&nbsp;&nbsp;

    <input type="text" className="myInput" id="myNameInput" onChange={(e) => {setName(e.target.value);}}/>
    &nbsp;&nbsp;<button onClick={() => alert("Hej " + myName)}>Säg hej!</button>
    </div>
  )
}

export default Form
