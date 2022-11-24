import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="containerfooter">
           <div className="all row">
           <div className="left col-lg-4">
            <Link  to="/"><img className='w-75 img' src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630f376f43db29ae1240bdc3_white-The-daily-work-logo.svg" alt="" /></Link>
            <div className="bottom">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">Image Licensing</Link>
            </div>
           </div>
            <div className="center col-lg-4 text-center">
                <div className="footcenttext">Socials</div>
                <div className="footicons">
                   <Link to="/"> <img src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630f759e65fd9e1f7102d03e_icons8-twitter%20(2).svg" alt="" /></Link>
                   <Link  to="/"> <img className='fb' src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630f759ef11e03fced2a642a_icons8-facebook-f%20(1).svg" alt="" /></Link>
                   <Link to="/"> <img src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630f759e116ccf35d3243457_icons8-linkedin-2%20(1).svg" alt="" /></Link>
                </div>
            </div>
            <div className="right col-lg-4 mt-5 text-center">
                <div className="copyright">© 2022  Made with <a className='golden' href="https://metro.co.uk/wp-content/uploads/2022/01/GettyImages-10093564.jpg?quality=90&strip=all">GOLDENCAT</a></div>
            </div>
           </div>
        </div>
    </footer>
  )
}

export default Footer