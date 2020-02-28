import React from 'react';
import MenuFunction  from './navbar'
import './App.css'

const MenusItems = [
  { 
    menuName: "Home",
    link: '#1',
    active: true
  },
  {
    menuName: "Services", 
    link: '#2',
    dropdownmenu: ["For entrepreneurs", "For students", "For hobbyists"],
    active: false
  }, 
  { 
    menuName: "Contact",
    link: '#3',
    active: false
  }
]


function App() {
  return (
    <div className="App">
   <MenuFunction items={MenusItems}/>
  
    </div>
  );
}
export default App;