import './header.css';
import { useState , useEffect } from 'react';

function Header() {
  const [HeaderContent , setHeaderContent] = useState();  

  useEffect(()=>{
    setTimeout(()=>{
    if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='admin')
    {
        setHeaderContent(<>
             {/* Topbar Start */}
             <div class="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
            <div class="row gx-0">
                <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    
                </div>
                <div class="col-md-6 text-center text-lg-end">
                    <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                        <div class="me-3 pe-3 border-end py-2">
                            <p class="m-0"><i class=""></i>Welcome Admin</p>
                        </div>
                        <div class="py-2">
                            <p class="m-0"><i class=""></i>{localStorage.getItem('email')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Topbar End */}
        </>);    
    }
    else if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='user')
    {
        setHeaderContent(<>
            {/* Topbar Start */}
            <div class="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
            <div class="row gx-0">
                <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    
                </div>
                <div class="col-md-6 text-center text-lg-end">
                    <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                        <div class="me-3 pe-3 border-end py-2">
                            <p class="m-0"><i class=""></i>Welcome User</p>
                        </div>
                        <div class="py-2">
                            <p class="m-0"><i class=""></i>{localStorage.getItem('email')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Topbar End */}
        </>);    
    }
    else
    {
    
        setHeaderContent(<>
      
        {/* Header Start */}
        <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                    <a href="" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 class="m-0 text-primary text-uppercase">PMS</h1>
                    </a>
                </div>
                <div class="col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">info@example.com</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">XXX XXX XXXX</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="" href=""><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Header End */}
{/*Topbar End*/}
        </>);

     }
    },10);
},[]);
    

return (
    <>{HeaderContent}</>
);
}
export default Header;