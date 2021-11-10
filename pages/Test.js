import { React, useState } from 'react'
import "./topbar.css"
import ss from "../images/ssss.jpg"

const Test = () => {

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle(true);
        console.log(toggle);
    }

    return (
        <div className="container siroj">
            <h1 className="sty">
                Salom Sardor AKA
            </h1>
            <hr />
            <div>
                {
                    toggle ? (
                        <div className="row">
                            <h1 className="siroj2">
                                Tug'ilgan kunlariz bilan xardoim sog' bo'lin aka xar
                                doim bizaga akali qb yurin biza xammamiz siz yaxwi ko'ramiz
                            </h1>
                            <img className="height" src={ss} />
                        </div>
                    ) : (
                        ""
                    )
                }

                <button className="button" onClick={toggler}>BOSING</button>
            </div>
        </div>
    )
}

export default Test
