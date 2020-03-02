import React from 'react';
import './App.css';
import Menu from "./nav"
import Sectionone from "./sectionone"
import BoxContainer from "./Boxes"
const NavBar = [
 { 
   title : "About us" , 
   link:"#1"
  }, 
 {
    title : "Career" , 
    link:"#1"
  }, 
 { 
   title : "Departments" , 
   link:"#1" , 
   subMenu : ["Marketing & PR","Customer Success & Sales","IT,Product,Design & UX,Data","Finance & Administration","HR & More"]
  }
]



function App() {
 
  return (
    <div className="App" >
      <Menu  items ={NavBar}/>
      <Sectionone/>
      <BoxContainer/>
    </div>
    
    
  );
}

export default App;
