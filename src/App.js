import React,{useState} from "react";

const App = () => {
const [newName,setnewName]=useState('')
const handelName = (event) =>{
  setnewName(event.target.value)
}
const [newPin,setnewPin]=useState('')
const handelPin = (event) =>{
  setnewPin(event.target.value)
}

const [eMail,seteMail] = useState('')
const handelMail = (event) => {
  seteMail(event.target.value)
}



  return (
    <div>
      <input type="text" onChange={handelName} value={newName}></input>
      <input type="password" onChange={handelPin}></input>
      <input type="e-mail" onChange={handelMail}></input>
      <div>name:{newName}</div>
      <div>password:{newPin}</div>
      <div>email:{eMail}</div>

    
    </div>
  );
}
export default App;