import React, {useContext} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Posts from './components/Posts'
import logo from './images/logo.png'
import {LoginContext} from './contexts/LoginContext'
import Add_post from './components/Add_post'
import Contact from './components/Contact'
import About from './components/About'

function Bluestrokes() {

  const {isLogged, username, setLogged} = useContext(LoginContext)

  function LogOut(event){
    setLogged(false)
  }

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light color justify-content-between">
          <Link to='/' className="navbar-brand">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
            Bluestrokes
          </Link>         
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/posts' className="nav-link">Posts</Link>
              </li>
              <li className="nav-item">
                <Link to='/add_post' className="nav-link">New Post</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
              </li>
            </ul>

            <span className="navbar-text">
              <ul className="navbar-nav mr-auto">
                {isLogged?
                <>
                  <li className="nav-item">
                    <div className="nav-link">{username}</div>
                  </li>  
                  <li className="nav-item">
                    <Link to='#' className="nav-link" data-toggle="modal" data-target="#exampleModal">Log out</Link>
                  </li>  
              
                  {/* Modal */}
                  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          Are you sure you want to log out?
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-light" data-dismiss="modal">No</button>
                          <button type="button" className="btn btn-light" onClick={LogOut}>Yes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link to='/login' className="nav-link">Log in</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/signup' className="nav-link">Sign up</Link>
                  </li>
                </>
                }
              </ul>
            </span>  
          </div>
        </nav>
      <div className="margin"></div>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/posts' component={Posts}/>
          <Route path='/add_post' component={Add_post}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>  
      <div className="margin"></div>
      {/* <footer>Bluestrokes Est 2020</footer> */}
    </div>  
  )
}

export default Bluestrokes
