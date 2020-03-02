import React from 'react'

function SectionThreeBoxes(props) {
    return (
        <div className ='boxesthreestyle'>
            {props.data.map(el =>
                <div className='singleboxe'>
                    <img src={el.imgUrl} alt={el.title}></img>
                    <p>{el.title}</p>
                    <button>SEE OPENINGS</button>
                </div>)}
        </div>
    )
}
export default SectionThreeBoxes