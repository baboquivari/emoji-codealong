import React from 'react';

function Emojis (props) {
    return props.parentState.map(function (emojiObject) {
        return (
            <span>{emojiObject.symbol}</span>
        )
    })
}


export default Emojis;
