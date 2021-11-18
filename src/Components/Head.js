import React from "react"
import { Link } from "react-router-dom";
const Head = () => {
    return(
        <div>
          <a href="https://www.aiub.edu/" > Home </a>
            <Link to="/list">  StudentList  </Link>
            <Link to="/details">  StudentDetails  </Link>
            <Link to="/contact">  Contact</Link>

        </div>
    )
}
export default Head;