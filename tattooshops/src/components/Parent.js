import React from 'react'
import Child from "./Child"
import ChildChild from './ChildChild'

function Parent() {
    return (
        <div>
            <Child>
                <ChildChild/>
            </Child>
        </div>
    )
}

export default Parent
