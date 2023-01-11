
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Howits2 from './Pages/Howits2'
import Signup from './Pages/Signup'
import './Style/NavStyle.css'
import logo from './logo.png'
import ResetPassword from './Pages/resetPass'
import Home from './Pages/Home'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import Cookies from './Pages/Cookies'
function Nav() {

  const navigate = useNavigate()
  return (
    <div>


      <div class="container-lg">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={logo} class="img-thumbnail" alt="logo" className='logo' />
          </a>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-space-between mb-md-0" id="liste">
            <NavLink to='/' className="nav-link px-2 link-dark " activeClassName="active" ><span className='item'><b>Home</b></span></NavLink>
            <NavLink to='/howits' className="nav-link px-2 link-dark" activeClassName="active" ><span className='item'><b>How It Works</b></span></NavLink>
            <NavLink to='/about' className="nav-link px-2 link-dark" activeClassName="active"><span className='item'><b>About</b></span></NavLink>
            <NavLink to='/contact' className="nav-link px-2 link-dark" activeClassName="active"><span className='item'><b>Contact Us</b></span></NavLink>
          </ul>

          <div class="col-md-3 ">
            <button class="buttn rounded-2  me-2 " id='loginbtns' data-bs-toggle="modal" data-bs-target="#LoginModal"><b id='signupbold'>Login</b></button>
            <button type="button" class="buttn  rounded-2" id='signupbtns' data-bs-toggle="modal" data-bs-target="#signupModal"><b id='loginbold'>Sign up</b></button>
          </div>

        </header>

        <div class="modal  fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h6>Sign in with your email and password.</h6>
                <div class="mb-3 my-4">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id='email' name="email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id='password' name="password" />
                </div>
              </div>
              <div class="mb-3">
              <button className="nav-link px-2 link-dark mx-2" data-bs-dismiss="modal" id='buttonreset' onClick={() => navigate('/ResetPassword')}><span className='item'><b>Reset your password</b></span></button>
              </div>
              <div class="modal-footer">
                <button class="btn btn-danger" type="submit" id='LoginBTN' >Sign in</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal modal-xl fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container" id='modalcontainer'>
                  <div class="row">
                    <h3><b>Welcome, Could you introduce yourself?</b> </h3>

                    <div class="col-md-4" >
                      <div class="mb-3 my-4">
                        <label for="firstname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id='firstname' name="firstname" aria-describedby="firstname" />
                      </div>
                    </div>
                    <div class="col-md-4 ms-5">
                      <div class="ms-5">
                        <label for="country" class="form-label select" >Your Country</label>
                        <select name='country' id='country' class="form-select" aria-label="country">
                          <option selected>Select your country</option>
                          <option value="1">Turkey</option>
                          <option value="2">United States</option>
                          <option value="3">Japan</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4" >
                      <div class="mb-3 my-4">
                        <label for="lastname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id='lastname' name="lastname" aria-describedby="lastname" />
                      </div>
                    </div>
                    <div class="col-md-4 ms-5">
                      <div class="ms-5 ">
                        <label for="city" class="form-label select">Your City</label>
                        <input type="text" class="form-control" id='city' name="city" aria-describedby="city" />
                      </div>
                    </div>
                    <div class="col-md-4" >
                      <div class="mb-3 my-4">
                        <label for="emailed" class="form-label">Email address</label>
                        <input type="email" class="form-control" id='emailed' name="emailed" aria-describedby="emailed" />
                      </div>
                    </div>
                    <div class="col-md-4 ms-5">
                      <div class="ms-5 ">
                        <label for="gender" class="form-label select">Your Gender</label>
                        <select name="gender" id="gender" class="form-select" aria-label="gender">
                          <option selected >Select your gender</option>
                          <option value="1" >Heterosexual</option>
                          <option value="2">Bisexual</option>
                          <option value="3">Non-binary</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4" >
                      <div class="mb-3">
                        <label for="pass" class="form-label">Password</label>
                        <input type="text" class="form-control" id='pass' name="pass" aria-describedby="pass" />
                      </div>
                    </div>
                    <div class="col-md-6 ms-5">
                      <div class="form-check ms-5 my-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckpromotional" />
                        <label class="form-check-label" for="flexCheckpromotional" id='flexCheckpromotional2'>
                          I want to be informed about <span className="check">Coupling discount and promotional</span> e-mails
                        </label>
                      </div>
                      <div class="col-md-4 ms-5">
                        <div class="form-check  ">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckconfidentiality" />
                          <label class="form-check-label" for="flexCheckconfidentiality" id='confidentiality'>I have read and understood the <span className="">confidentiality agreement.</span> </label>
                        </div>
                      </div>
                    </div>


                    <div class="modal-footer">
                      <button class="btn btn-danger" type="submit" id='signupBTN' >Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>





      </div>

      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/howits' element={<Howits2 />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={< Home />} />
        <Route path='/privacy' element={< Privacy />} />
        <Route path='/terms' element={< Terms />} />
        <Route path='/cookies' element={< Cookies />} />
        <Route path='/ResetPassword' element={< ResetPassword />} />
      </Routes>

    </div>

  )
}

export default Nav