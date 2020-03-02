import React from 'react'

const Boxcomponenet =
    [
        {
            title: "for patients",
            text: "Find a doctor, book a visit and solve any health-related doubt",
            Choosecountries: ['Argentina', 'Australia', 'Brazil', 'Chile', 'Colombia', 'Czech', 'France', 'Italy', 'Mexico', 'Peru', 'Poland']
            , picture: "https://www.docplanner.com/img/screen-marketplace@2x.png"
        },
        {
            title: "For doctors",
            text: "Save time managing visits and cut no-shows by half"
            , picture: "https://www.docplanner.com/img/screen-saas@2x.png"
        }
    ];

function BoxContainer() {
    return (
        <div>
            {Boxcomponenet.map(el => <div>
                <h5>
                    {el.title}
                </h5>
                <h1>
                    {el.text}
                </h1>
                {el.Choosecountries &&
                    <select>
                        <option value="">CHOOSE COUNTRY</option>
                        {el.Choosecountries.map(el => <option value={el}>{el}</option>)}
                    </select>}
                <img src={el.picture} alt='pictured'></img>
            </div>

            )
            }
        </div>
    )
}







export default BoxContainer;