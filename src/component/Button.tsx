import React, { ReactElement } from 'react'

interface Props {
    label: string;
    onClick: any;
    colorChange: string;
}

export default function Button({label, onClick, colorChange}: Props): ReactElement {
    return (
            <button onClick={onClick} style={{backgroundColor: colorChange}}>{label}</button>
    )
}

//destructure