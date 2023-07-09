import './nav.css';
import {Link} from 'react-router-dom';
function Nav(){
    return(
       
        
        <> 
         {/*Navbar start*/}
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
        <a href="index.html" class="navbar-brand d-block d-lg-none">
            <h1 class="m-0 text-primary text-uppercase">PMS</h1>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav mr-auto py-0">
                <a  class="nav-item nav-link active"><Link to ="/">Home</Link></a>
                <a  class="nav-item nav-link"><Link to ="/about">About</Link></a>
                <a  class="nav-item nav-link"><Link to ="/contact">Contact</Link></a>
                <a  class="nav-item nav-link"><Link to ="/service">Service</Link></a>
               
              
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a class="dropdown-item">Booking</a>
                        <a class="dropdown-item">Our Team</a>
                        <a class="dropdown-item">Testimonial</a>
                    </div>
                </div>
                <a  class="nav-item nav-link"><Link to ="/register">Register</Link></a>
                <a  class="nav-item nav-link"><Link to ="/login">Login</Link></a>
            </div>
          
        </div>
    </nav>
    {/*Navbar End*/}
</>

    );
}
export default Nav;