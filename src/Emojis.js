import React from 'react';

function Emojis (props) {
    return props.parentState.map(function (ele) {
        return (
            <span>{ele}</span>
        )
    })
}


export default Emojis;
