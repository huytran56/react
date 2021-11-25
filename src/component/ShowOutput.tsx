import React, { ReactElement } from 'react'

interface Props {
    output : string
}

export default function ShowOutput({output}: Props): ReactElement {
    return (
        <div>
            <span>{output}</span>
        </div>
    )
}
