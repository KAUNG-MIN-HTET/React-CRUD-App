import React from "react";

export const Clear = ({ clearAll }) => {
    return (
        <button className="btn" onClick={clearAll}>Clear All</button>
    )
}