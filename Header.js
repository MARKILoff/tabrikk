import React from 'react'

const users = [
    {
        name: "Samandar",
        surname: "Toxirov"
    },
    {
        name: "Uluqpan",
        surname: "Qo'shqarbayev"
    },
    {
        name: "Sirojiddin",
        surname: "Zuxriddinov"
    },
    {
        name: "Sardor",
        surname: "To'xtaboyev"
    },
    {
        name: "Iqbol",
        surname: "Nosirov"
    },
    {
        name: "Dauren",
        surname: "Meymankulov"
    },
];


const Header = (props) => {

    return (
        <>
        <div>
            {users.map((item, index) => (
                <div key={index}>
                    <table>
                        <td>
                            <h2>ism familiya</h2>
                            <tr>{item.name + item.surname}</tr>
                        </td>
                    </table>
                </div>
            ))}
        </div>
        <div>
            { props.text !== "" ?  props.text :  "xayr" }  

        </div>
        </>
    )
}

export default Header
