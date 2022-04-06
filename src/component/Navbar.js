import React from 'react'

export default function Navbar() {
  return (<>
    <div className="header">
     <a href='https://apps.paybooks.in/mylogin.aspx?_ga=2.67390482.288763997.1649144244-254414478.1649144244'><button  className="btn1">Login</button></a>
     <a href='#website-footer'><button className="btn2">contact us</button></a>
    </div>
    <div className="nav-right">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src="logo.png" alt="" width="100" height="auto"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
       <ul class=" navbar-nav ml-md-auto">
      
        <li className="nav-item">
          <a className="nav-link" href="/">PROUDUCT FEATURES</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRICING
          </a>
         
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
