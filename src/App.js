import React,{useState} from "react";

const App = () => {
  
const[data , setData] = useState({
  text:"",
  password:"",
  email:"",
})
const handelchange = (e) => {
  setData({...data , [e.target.id] : e.target.value})
}
  return (
    <div>
      <input type="text" onChange={handelchange}  value={data.text} id="text"></input>
      <input type="password" onChange={handelchange} value={data.password} id="password"></input>
      <input type="e-mail" onChange={handelchange} value={data.email} id="email"></input>

      <div>name:{data.text}</div>
      <div>password:{data.password}</div>
      <div>email:{data.email}</div>    
    </div> 
  );
}
export default App;