const NewExpense = (props) =>{
    <div>
    <input type="text" onChange={props.handelchange}  value={props.data.text} name="text"></input>
    <input type="password" onChange={props.handelchange} value={props.data.password} name="password"></input>
    <input type="e-mail" onChange={props.handelchange} value={props.data.email} name="email"></input>

    <div>name:{props.data.text}</div>
    <div>password:{props.data.password}</div>
    <div>email:{props.data.email}</div>    
    </div>
    }
export default NewExpense;