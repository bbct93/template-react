import React from "react";

const BtnComp = React.forwardRef((props, ref) => {
    return (
        <button className="btn" ref={ref}>
            {props.children}
        </button>
    )
});

export default BtnComp