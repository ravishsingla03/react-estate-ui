import { useState } from 'react';
import './SearchBar.scss'
import { Link } from 'react-router-dom';
const types = ["Buy","Rent"];

function SearchBar(){

  const [query,setquery] = useState({
    type:"Buy",
    location:"",
    minprice:0,
    maxprice:0
  });

  const switchtype = (val)=>{
    setquery((prev)=>({...prev,type:val}));
  }
  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type)=>(
          <button key={type}onClick={()=>switchtype(type)} className={query.type===type ? "active" : ""}>{type}</button>
        ))}
      </div>
      <form >
        <input type="text" name='Location' placeholder='City Location'></input>
        <input type="number" placeholder='Min Price' min={0} max={1000000}></input>
        <input type="number" placeholder='Max Price'min={0} max ={1000000}></input>
        <button>
          <Link to="/list">
          <img src="./search.png" alt="" />
          </Link>
        </button>
      </form>
    </div>
  )
}

export default SearchBar