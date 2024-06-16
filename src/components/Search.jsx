import React,{useState} from 'react'

 {/* Lifting up state (2) pass props in component declaration */}
const Search = ({citySearch}) => {
// 1) Create the state to store value of form
    const [cityForm, setCityForm] = useState('')

    // 4) Update the state of the input into the state
    const handleCityForm = (e) => {
        setCityForm(e.target.value)
    }

     {/* Lifting up state (3) when the button is pressed pass the text inside props argument*/}
    const searchPressed = () => {
        citySearch(cityForm)
        setCityForm('')
    }

    return (
        <div className="row g-3">
            <div className="col-8">
                {/* 2. Add  value attribute on the input to link with the state*/}
                 {/* 3. Add onChange method on input to handle value change on the form */}
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