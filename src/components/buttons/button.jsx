import { useState } from 'react';
import { Link, Scripts } from 'react-router-dom';


export default function Button() {

  
  return (
    <>

    
      <Link to="/" className="btn btn-danger">
        Read More
      </Link>

     


      
    </>
  );
}

export function CardBtn() {
    return(
      <>
      <Link to="/" className="btn btn-danger">
        Read More
      </Link>
      </>
    )
}



