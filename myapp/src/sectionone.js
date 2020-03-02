import React from 'react'
const text = ["We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.","We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."]




function Sectionone(){
return (
<div className='title'>
    <img className='logosection' src='https://www.docplanner.com/img/sygnet.png' alt='lead logo'></img>
    <h1>Making the healthcare experience more human</h1>
    <div className='textStyle'>
{text.map(el=><p >{el}</p>)}
</div>
</div>


)



}
export default Sectionone ;