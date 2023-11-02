import React,{useState} from "react";
import NewExpense from "./components/NewExpense";

const App = () => {
  
const[data , setData] = useState({
  text:"",
  password:"",
  email:"",
})
const handelchange = (e) => {
  setData({...data , [e.target.name] : e.target.value})
}
  return (
  <div>
    <NewExpense >{handelchange}</NewExpense>
  </div>
  );
}
export default App;