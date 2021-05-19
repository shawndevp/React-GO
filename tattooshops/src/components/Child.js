import React from 'react'

function Child(props) {
    return (
        <div>
            {props.children}
            This is the child element
        </div>
    )
}

export default Child
