import React from "react";

function Stick (props) {
    
    var extraName = props.length;

    return (
        <div className = {extraName}></div>
    );
}

export default Stick;