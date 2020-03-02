import React from 'react'

function Countries(props) {
    return (
        props.items.map(el =>
            <option value={el}>{el}</option>)
    )
}




export default Countries;