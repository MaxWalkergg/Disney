import React from 'react'
import './nav.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Navbar() {
  return (
    <div class="nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                  <div class="container-fluid ms-5 me-4  ">

                    <span class="navbar-toggler-icon"></span>

                  <img src="https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1-2048x1111.png" className="ms-4 me-3 mb-2"/>

                  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    
                        <ul class="navbar-nav me-auto mb-lg-0">
                            <li class="nav-item">
                              <a class="nav-link active me-2" aria-current="page" href="#">ซีรีส์</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active me-2" href="#">ภาพยนตร์</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active me-2" href="#">Disney+</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">เอเซีย</a>
                            </li>
                        </ul>
                  
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 bg-dark text-light" type="search" placeholder="ค้นหา" aria-label="ค้นหา"/>
                        <button class="Search btn btn-primary" type="submit">Subscribe</button>
                        <div class="btn-group ms-2" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle border border-light text-light  " data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="fi fi-rs-globe"></span>
                            Thai
                            </button>
                            <ul class="dropdown-menu bg-dark border border-light" aria-labelledby="btnGroupDrop1">
                            <li><a class="dropdown-item text-light bg-dark" href="#">English</a></li>
                            </ul>
                        </div>
                    </form>
                <a className='nav-link text-light ms-3 mt-1' href="#">เข้าสู่ระบบ</a>
                  
                </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar