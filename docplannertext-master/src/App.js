import React from 'react';
import './App.css';
import NavBar from './NavBar'
import SectionOne from './section1'
import Sectiontwo from './section2'
import SectionThree from './section 3'
import Footer from './footer'

const MenuItems = [
  {
    menutext : "About us",
    link : "#1",
    active : 'true'
  },
  {
    menutext : "Career",
    link : "#2"
  },
  {
    menutext : "Departments",
    link : "#3",
    menudrop : [
    "Marketing & PR",
    "Customer Success & Sales",
    "IT, Product, Design & US, Data",
    "Finance & Administration",
    "HR & more"
  ]
  },
]
const Text = [
"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
]




function App() {
  return (
    <div className="App">
     <NavBar data={MenuItems}/>
     <SectionOne data={Text}/>
     <Sectiontwo/>
     <SectionThree/>
     <Footer/>
    </div>
  );
}

export default App;
