import React from 'react'

function MenuDrop(props){
return (
<ul className ='menudrop'>
    {props.items.map(el =>
        <li>{el}</li>)}
</ul>
)
}
export default MenuDrop;