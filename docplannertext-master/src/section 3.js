import React from 'react'

import SectionThreeBoxes from './SectionThreeBoxes'

const sectionthreeboxes = [
    {
        imgUrl :'https://www.docplanner.com/images/warsaw.png',
        title : 'Warsaw'
    },
    {
        imgUrl :'https://www.docplanner.com/images/barcelona.png',
        title : 'Barcelona'
    },
    {
        imgUrl :'https://www.docplanner.com/images/istanbul.png',
        title : 'Istanbul'
    },
    {
        imgUrl :'https://www.docplanner.com/images/rome.png',
        title : 'Rome'
    },
    {
        imgUrl :'https://www.docplanner.com/images/mexico-city.png',
        title : 'Mexico-City'
    },
    {
        imgUrl :'https://www.docplanner.com/images/curitiba.png',
        title : 'Curitiba'
    },
]


function SectionThree() {
    return (
        <div className ='inline'>
            <h1>Improve the lives of millions. Change yours forever</h1>
            <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            <SectionThreeBoxes data ={sectionthreeboxes}/>
        </div>
        

    )
}





export default SectionThree