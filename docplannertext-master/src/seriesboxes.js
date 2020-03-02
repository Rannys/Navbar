import React from 'react'

function SeriesBoxes(props) {
    return (
        <div className='seriesboxes'>
            {props.data.map(el =>
                <div className ='container'>
                    <img src={el.imgUrl} alt={el.title}></img>
                    <h3>{el.title}</h3>
                    <p>{el.text}</p>
                </div>)}
        </div>
    )
}
export default SeriesBoxes;