import React from 'react';
import Healthcare from './healthcare';
import SeriesBoxes from './seriesboxes';


const Boxes =[
    {
        imgUrl : "https://www.docplanner.com/img/flag.png",
        title :'Leader in 10 countries',
        text : 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile',
        active : 'true'
    },
    {
        imgUrl: 'https://www.docplanner.com/img/patients.png',
        title :'30 million unique patients',
        text: 'visit us every month',
        active : 'true'
    },
    {
        imgUrl: 'https://www.docplanner.com/img/visits.png',
        title :'1.5 million appointments',
        text: 'booked last month',
        active : 'false'
    },
    {
        imgUrl: 'https://www.docplanner.com/img/doctors.png',
        title :'2 million active doctors',
        text: 'trust in our solutions',
        active : 'false'
    },
]


function Sectiontwo(){
return (
    <div className='sectiontwostyle'>
<Healthcare/>
<SeriesBoxes data ={Boxes}/>
    </div>

)
}



export default Sectiontwo;