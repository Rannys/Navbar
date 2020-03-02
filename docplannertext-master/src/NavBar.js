import React from 'react'
import MenuDrop from './MenuDrop'
function NavBar(props) {
    return (
        <div className='navbar'>
            <img className='logo'  src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' alt='Website logo'></img>
            <ul className ='menustyle'>
                {props.data.map(el => <li ><a className={el.active} href={el.link}>{el.menutext}</a>
                {el.menudrop && <li><MenuDrop items ={el.menudrop}/></li>}
                </li>)}
            </ul>          
        </div>
    )
}
export default NavBar