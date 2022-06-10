import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const country = ["Bangladesh", "India", "China", "Rasia"];
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <User></User>
    <ul>
      { 
        country.map(country => <li>{country}</li>)
      }
    </ul>
      <Person name = "Riad"></Person>
      <Person name = "Sabit" ></Person>
      <Person name = "Hridoy Vai" job = "Engineer"></Person>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle = {
    border:"2px solid red",
    margin:"10px",
    color: "yellowgreen",
    // backgroundColor: "aqua"
  } 
return(
  <div style = {personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Computer Engineer {props.job}</h3>
  </div>
)
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count -1)}>Decrease</button>
    </div>
  )
}

function User(){
  const [user, setUser] = useState();
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUser(data))
  })
  return(
    <div>
      <h1>User : {user.length}</h1>
      <ul>
        {
          user.map(usr => <li>{usr.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
