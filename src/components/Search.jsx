import React,{useState} from 'react'

const Search = () => {

    const [cityForm, setCityForm] = useState('')

    const handleCityForm = (e) => {
        setCityForm(e.target.value)
    }

    const searchPressed = () => {
        console.log(cityForm);
    }

    return (
        <div className="row g-3">
            <div className="col-8">
                <input type="text" className="form-control" id="cityName" 
                placeholder="Enter City" value={cityForm} onChange={handleCityForm}/>
            </div>
            <div className="col-4">
                <button type="submit" className="btn btn-success 
                mb-3" style={{width:'100%'}} onClick={searchPressed}>Search Weather</button>
            </div>
        </div>
    )
}

export default Search