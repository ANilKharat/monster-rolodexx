import React from 'react'
import './SearchBoxStyles.css'

function SearchBox({placeholder, handleChange}) {
    return (
        <div>
            <input type='search' className="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox
