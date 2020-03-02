import React from 'react'
import Box from './Box'
import EndSectionOne from './endsectionone'

const BoxContainer =[
    {
      text : "For patients",
      title : "Find a doctor, book a visit and solve any health-related doubt",
      img : "https://www.docplanner.com/img/screen-marketplace@2x.png",
      countries : ['Argentina','Australia','Brazil','Chile','Colombia','Czech','France']
    },
    {
      text : "For doctors",
      title : "Save time managing visits and cut no-shows by half",
      img : "https://www.docplanner.com/img/screen-saas@2x.png"
    }
  ]
  const BrandText = ["ZnanyLekarz,","Doctoralia,","MioDottore,","DoktorTakvimi,","ZnaymyLekar,"]
  

function SectionOne(props) {
    return (
        <div className="sectionOne">
            <img src='https://www.docplanner.com/img/sygnet.png' alt='lead-logo'></img>
            <h1>Making the healthcare experience more human</h1>
            <div className='sectiononetext'>
                {props.data.map(el => <p>{el}</p>)}
            </div>
            <Box data={BoxContainer} />
            <EndSectionOne data={BrandText} />
        </div>
    )


}
export default SectionOne;