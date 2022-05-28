import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css'

const App =()=> {
let {id} =useParams();

const [robot,setRobot] = useState(null)
// const [searchfield, setSearchfield] = useState('')
// const [price, setPrice] = useState(0)
// const [badges, setBadges] = useState([])

useEffect(()=> {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(Response => Response.json())
    .then(data => {setRobot(data)})
},[])

if (!robot) return <h1> loading </h1>

console.log(robot)

return (
  <div>
    <img className="obj" src={`https://robohash.org/${id}?200x200" alt="robot`}/>
    <h4 className="obj">id : {robot.id}</h4>
    <h4 className="obj">name : {robot.name}</h4>
    <h4 className="obj">username : {robot.username}</h4>
    <h4 className="obj">city : {robot.address.city}</h4>
    <h4 className="obj">street : {robot.address.street}</h4>
    <h4 className="obj">email : {robot.email}</h4>
    <h4 className="obj">phone : {robot.phone}</h4>
    <h4 className="obj">website : {robot.website}</h4>
    
    <Link to={`/`}><button className="btn">  back to Home</button></Link>
  </div>
)
}
export default App