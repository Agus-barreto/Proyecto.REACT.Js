import React from "react";

function Filter ({filterState}) {
    return(
        <select id="filter" value={filterState}>
            <option value="stock">Stock</option>
            <option value="sinStock">Sin Stock</option>
        </select>
    )
}

export default filter