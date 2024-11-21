import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://res.cloudinary.com/djqlbswbb/image/upload/fl_preserve_transparency/v1732038075/recommendus_1_nlty3e.jpg?_s=public-apps" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/random" style={{textDecoration: "none"}}><span>Random</span></Link>
                <Link to="/list" style={{textDecoration: "none"}}><span>List</span></Link>
                <Link to="/about" style={{textDecoration: "none"}}><span>About Me</span></Link>
                
            </div>
        </div>
    )
}

export default Header