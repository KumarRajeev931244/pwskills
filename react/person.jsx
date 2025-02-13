import React from "react";

export const Person = ({name, age}) => {
    return(
        <p> {`name: ${name} and age:${age}`} </p>
    )
}

export const Button = ({text, onClick}) => {
    return(
        <button onClick={onClick}>{text}</button>
    )
}

export const Header = ({title}) => {
    return(
        <>{title}</>
    )
}

export const List = ({items}) => {
    return(
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

