import React from 'react'

const Menu = (props) => {
    return (
        <div className='flexStyle'>
            <img className='logo' src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' alt='Docplanner logo'></img>
            <ul className='menuStyling'>
                {props.items.map(el =>
                    <li><a href={el.link}>
                        {el.title}
                    </a>
                        {el.subMenu && <ul className='subMenuStyling'>{el.subMenu.map(el => <li>{el}</li>)}</ul>}
                    </li>)}
            </ul>
        </div>


    )
}





export default Menu;