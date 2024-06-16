import React from 'react'

const Search = () => {
    return (
        <div class="row g-3">
            <div class="col-8">
                <input type="text" class="form-control" id="cityName" 
                placeholder="Enter City" />
            </div>
            <div class="col-4">
                <button type="submit" class="btn btn-success 
                mb-3">Search Weather</button>
            </div>
        </div>
    )
}

export default Search