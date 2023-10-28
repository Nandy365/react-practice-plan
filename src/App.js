import React,{useState} from "react";

const App = () => {
  const allvalue = () => {
    all'',
    password'',``
    mail''
  }
const[data,setData] = useState(allvalue)
const handelchange = (e) =>{
  setData({ ...data,[e,target.name]: e.target.value})
}
  return (
    <div>
      <input type="text" onChange={handelchange} value={newName}></input>
      <input type="password" onChange={handelchange} value={newPin}></input>
      <input type="e-mail" onChange={handelchange} value={eMail}></input>
      <div>name:{newName}</div>
      <div>password:{newPin}</div>
      <div>email:{eMail}</div>    
    </div>
  );
}
export default App;