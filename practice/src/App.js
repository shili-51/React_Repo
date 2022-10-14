import React, {Component} from 'react';
import Navbar from './Components/Layout/Navbar';
// import UserItem from './Components/Users/UserItem';
import Users from './Components/Users/Users';
import './App.css';


//Functional Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from React</h1>
//     </div>
//   );
// }

//Class Component extending
class App extends Component {
  
  //in order to return HTML
  render(){
    return (
      <div className="App">
        {/* <h1>Hello from React</h1>
        <h2>Goodbye</h2> */}
        <Navbar/>
        {/* <UserItem/> */}
        <div className="container"></div>
        <Users/>
      </div>
    );
  }
  
}

export default App;
