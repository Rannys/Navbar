import React from 'react'
function EndSectionOne(props) {
    return (
        <div className='endsectionstyle'>
            <h2>We are a global 
               company 
                with local culture</h2>
        <ul>
            {props.data.map(el =>
                <li>
                    {el}
                </li>
                )}
        </ul>
        </div>
    )
}
export default EndSectionOne;