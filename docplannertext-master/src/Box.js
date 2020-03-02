import React from 'react'
import Countries from './countries'
function Box(props) {
    return (
        <div className='box-style'>
            {props.data.map(el => (

                <div className={el.countries ? 'Cgreen' : 'Cblue'}>
                    <p>
                        {el.text}
                    </p>
                    <h3>
                        {el.title}
                    </h3>
                    {el.countries && <select ><option value="">CHOOSE A COUNTRY</option><Countries items={el.countries} /></select>}
                    <figure>
                    <img src={el.img} alt='Box img'></img>
                    </figure>
                </div>
            ))}
        </div>
    )
}
export default Box;