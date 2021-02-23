import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends=[
    {name:'Joy',Id:'01'},
    {name:'Potol',Id:'02'},
    {name:'Afra',Id:'03'}
  ]
  const nayoks = ['Anwar', 'Alomgir','mgkk', 'Salman','zihad','eto']
  const products = [{ name: 'Photoshop', price: '$90.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'PDF Reader', price: '$6.99' },
  { name: 'Premier Reader', price: '$6.99' }
  ]
 
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        {
          nayoks.map(n=><li>{n}</li>)
        }
       {
         products.map(pd=> <li>{pd.name}</li>)
       }
      </ul>
       {
         products.map(pd=> <Product product={pd}></Product>)
       }
       
      {
        friends.map(fr=> <Friend friend={fr}></Friend>)
      }
      <Counter></Counter>
      <Users></Users>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="developer"></Person>
        <Person name="Zihad" job="developer"></Person>

      </header>
    </div>
  );
}
function Users() {
  const [users,setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h1>Dynamic Users:{users.length}</h1>
     <ul>
       {
        users.map(user=> <li>{user.name}</li>) 
       }
     </ul>
    </div>
  )
}

function Counter() {
  const [count,setCount]=useState(0);
  const handleIncrease= () =>setCount(count + 1);
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Friend(props) {
  const FriendStyle={
    border:'2px solid green',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name,Id}=props.friend;
  return (
  
    <div style={FriendStyle}>
      <h3>{name}</h3>
      <h4>{Id}</h4>
    </div>
  )
}

function Product(props) {
  const ProductStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name,price}=props.product;
  
  return (
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: '2px solid red', width: '400px' }}>
      <h3>My Name:{props.name}</h3>
      <p>My Profession:{props.job}</p>
    </div>
  )
}
export default App;
