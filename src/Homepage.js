import React from 'react'
import { useNavigate } from "react-router-dom";
import Crud4 from "./images/Crud4.jpg";

function Homepage() {
    const cssStyle = {
        backgroundImage: `url(${Crud4})`,
        height:'100vh',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',

    }
    const navigate = useNavigate(useNavigate);
   
  return (
  
  <div style={cssStyle}>
    
    <div className='d-inline-flex p-5 m-5 bd-highlight '>
        <div className='shadow-lg p-3 mb-5 bg-body rounded'>
     <blockquote class="blockquote text-center">
  <p class="mb-0">Welcome to Kindle Bit Solution</p>
  <br/>
  <footer class="blockquote-footer">To login Into Crud App <cite title="Source Title">Please Click on LET'S START </cite></footer>
</blockquote> 
<div className=' d-flex justify-content-center'>
<button type="button" class="btn btn-info m-3" onClick={() => navigate("/Form")}>LET'S START</button>
{/* <button type="button" class="btn btn-warning m-3 "onClick={() => navigate("/List")}>List</button> */}

</div>
    </div>
    </div>
    </div>
    
  )
}

export default Homepage;