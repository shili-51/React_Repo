import React, {Component} from 'react';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import './App.css';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form';

 class App extends Component{
  render(){
    return (
      <div className="App">
        {/* error is className from appStyles.css */}
        {/* <h1 className='error'>Error</h1> */}
        <Form/>
        {/* success is classname from appStyles.module.css */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <Inline/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children</p>
        </Greet> */}
        {/* <Greet name="Diana" heroName="Superman"/> */}
        {/* <button>Action</button>
        <Greet name="Clark" heroName="Wonder Woman"/> */}
        {/* <Welcome name="Bruce" heroName="Batman"/> */}
        {/* <Welcome name="Diana" heroName="Superman"/>
        <Welcome name="Clark" heroName="Wonder Woman"/> */}
      </div>
    );
  }
 } 
  
  


export default App;
