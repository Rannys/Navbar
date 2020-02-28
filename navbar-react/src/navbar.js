import React from 'react'




const MenuFunction = (props) => {
    return (
        <ul className="Navbar">
            {
                props.items.map(el => <li className="menu-item">
                    <a href={el.link}>
                        {el.menuName}
                    </a>
                    {el.dropdownmenu && <ul className="submenu"> {el.dropdownmenu.map(el => <li>{el}</li>)} </ul>}
                </li>)
            }
            {/* {props.items.map(el =>
                el.dropdownmenu ? el.dropdownmenu.map(el =>
                    <ul>
                        <li>{el.menuName}</li>
                        <li>{el}</li>
                    </ul>
                    )    :
                    <ul>
                        <li>{el.menuName}</li>
                    </ul>
             )} */}
        </ul>
    )
}



export default MenuFunction;

