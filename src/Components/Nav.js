
import { useState, useEffect } from 'react';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js';
import { Modal, Button, Form } from 'react-bootstrap';


import logo from '../MediaIcons/logo.png'
import "../Style/NavStyle.css"
import { About, Contact, Howits2, ResetPassword, Home, Privacy, Terms, Cookies, Profile , Chat} from '../Pages/index.js'



function Nav() {

  const navigate = useNavigate()

  const [token, setToken] = useState(false)

  //Login Modal kapatıp açmak için UseState
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Sign Up Modal kapatıp açmak için UseState
  const [showRegister, setShowRegister] = useState(false)
  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)


  //Sign Up datalarını tuttuğum UseState
  const [formData, setFormData] = useState({
    fullName: "", email: "", password: ""
  })

  //Login datalarını tuttuğum UseState
  const [loginData, setLoginData] = useState({
    email: "", password: ""
  })



  //Session kontrolü yaptığım useEffect
  const [session, setSession] = useState(null)

  /* useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    //buraya setShow gelecek, eğer session yoksa login ve register butonu gözükecek
  }
  else {
    return (<div>Logged in!</div>)
  } */




  //Değişen dataları yakalıyorum
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  //Değişen dataları yakalıyorum
  const handleChangeLogin = (event) => {
    setLoginData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }



  //Sign Up için Handle Butonu
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.fullName,
            }
          }
        }
      )
      alert("Check your email for verification ")
    } catch (error) {
      alert(error)
    }
  }

  //Login için Handle Butonu
  const handleSubmitLogin = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password
      })
      if (error) {
        // Şifre yanlış olduğunda yönlendirme yapmayın.
        console.log(error);
        alert("Giriş başarısız!");
      } else {
        console.log(data);
        setToken(data);
        handleClose();
        navigate("/profile");
        alert("Başarıyla giriş yapıldı!");
      }
    } catch (error) {
      alert(error)
    }
  }



  //Şifre sıfırlama anında modeli kapatma fonksiyonu
  const handleResetPasswordClick = () => {

    handleClose();
    navigate('/ResetPassword');
  };



  if (!token === null) {
    sessionStorage.setItem('token', JSON.stringify(token))

  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"))
      setToken(data)
    }
  })

  return (
    <div>
      <div class="container-lg">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={logo} class="img-thumbnail" alt="logo" className='logo' />
          </a>

          {/*NAVBAR MENU LISTE */}
          <ul class="nav col-12 col-md-auto mb-2 justify-content-space-between mb-md-0" id="liste">

            {/*TOKEN YOKSA NAV ELEMANLARINI GÖSTER VARSA GÖSTERME  */}
            {!token ? <NavLink to='/' className="nav-link px-2 link-dark " activeClassName="active" ><span className='item'><b>Home</b></span></NavLink> : ""}
            {!token ? <NavLink to='/howits' className="nav-link px-2 link-dark" activeClassName="active" ><span className='item'><b>How It Works</b></span></NavLink> :  <NavLink to='/chat' className="nav-link px-2 link-dark" activeClassName="active"><span className='item'><b>Chat</b></span></NavLink>}
            {!token ? <NavLink to='/about' className="nav-link px-2 link-dark" activeClassName="active"><span className='item'><b>About</b></span></NavLink> : ""}
            {!token ? <NavLink to='/contact' className="nav-link px-2 link-dark" activeClassName="active"><span className='item'><b>Contact Us</b></span></NavLink> : <NavLink to='/profile' className="nav-link px-2 link-dark" activeClassName="active"><span className='item'><b>Profile</b></span></NavLink>}

          </ul>

          {/*LOGIN VE SIGNUP MODA BUTONU */}

        {!token ?  <div class="col-md-3 ">
            <button class="buttn rounded-2  me-2 " id='loginbtns' onClick={handleShow}><b id='signupbold'>Login</b></button>



            <button class="buttn  rounded-2" id='signupbtns' onClick={handleShowRegister}><b id='loginbold'>Sign up</b></button>
          </div> : ""}

        </header>



        {/*LOGIN MODAL, SUPABASE AUTH UI İLE BİRLİKTE */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Sign in with your email and password.</h6>
            <Form>
              <Form.Group className="mb-3 my-4">
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control type="email" id="email" placeholder="email@example.com" name="email" onChange={handleChangeLogin} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" id="password" placeholder="at least 6 characters" name="password" onChange={handleChangeLogin} required />
              </Form.Group>
            </Form>
            <button className="nav-link px-2 link-dark mx-2" id='buttonreset' onClick={handleResetPasswordClick}><span className='item'><b>Reset your password</b></span></button>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" type="submit" id='LoginBTN' onClick={handleSubmitLogin} >
              Sign in
            </Button>

          </Modal.Footer>
        </Modal>

        {/*SIGN UP  MODAL, AUTH UI ILE BIRLIKTE  */}

        <Modal show={showRegister} onHide={handleCloseRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container" id="modalcontainer">
              <div className="row">
                <h5>Welcome, Could you introduce yourself?</h5>
                <Form>
                  <Form.Group className="mb-3 my-4">
                    <Form.Label htmlFor="email">Email address</Form.Label>
                    <Form.Control type="email" id="email" placeholder="email@example.com" name="email" onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="fullName">Full Name</Form.Label>
                    <Form.Control type="text" id="fullName" placeholder="Your Name" name="fullName" onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="at least 6 characters" name="password" onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="form-check ms-3 my-3">
                    <Form.Check
                      type="checkbox"
                      id="flexCheckpromotional"
                      label={
                        <>
                          I don't want to miss <span className="check">Coupling</span> discount and promotional emails
                        </>
                      }
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="nav-link px-2 link-dark mx-2" variant="secondary" data-bs-dismiss="modal" id="buttonreset2" data-bs-target="#LoginModal" data-bs-toggle="modal">
              <span className="item">Already a account</span>
            </button>
            <Button type='submit' variant="primary" id="registerBTN1" onClick={handleSubmit} >
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>


        {/* Burası  Kayıt olunduktan sonra yönlendirme sayfasına atacak ve orada doldurulacak olan form sayfası

        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Register</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container" id='modalcontainer'>
                  <div class="row">
                    <h5>Welcome, Could you introduce yourself?</h5>
                    <div class="mb-3 my-4">
                      <label for="firstname" class="form-label">First Name</label>
                      <input type="text" class="form-control" id='firstname' name="firstname" aria-describedby="firstname" required />
                    </div>
                    <div class="mb-3 my-4">
                      <label for="lastname" class="form-label">Last Name</label>
                      <input type="text" class="form-control" id='lastname' name="lastname" aria-describedby="lastname" required />
                    </div>
                    <div class="">
                      <label for="gender" class="form-label select">Your Gender</label>
                      <select name="gender" id="gender" class="form-select" aria-label="gender" required>
                        <option selected >Select your gender</option>
                        <option value="1" >Heterosexual</option>
                        <option value="2">Bisexual</option>
                        <option value="3">Non-binary</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button className="nav-link px-2 link-dark mx-2" data-bs-dismiss="modal" id='buttonreset2' data-bs-target="#LoginModal" data-bs-toggle="modal"><span className='item'>Already a account</span></button>
                <button class="btn btn-primary" id='registerBTN2' data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Continue</button>
              </div>
            </div>
          </div>

        </div>
        <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">Register</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container" id='modalcontainer'>
                  <div class="row">
                    <h5>Welcome, Could you introduce yourself?</h5>
                    <div class="">
                      <label for="country" class="form-label select" >Your Country</label>
                      <input name='country' list="datalistOptions" placeholder='Type to search your country' id='country' class="form-select" aria-label="country" required />
                      <datalist id="datalistOptions">
                        <option value="Turkey"></option>
                        <option value="United States"></option>
                        <option value="Japan"></option>
                      </datalist>
                    </div>
                    <div class="my-3">
                      <label for="city" class="form-label select">Your City </label>
                      <input type="text" class="form-control" id='city' placeholder='city' name="city" aria-describedby="city" required />
                    </div>
                    <div class="form-check ms-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckconfidentiality" required />
                      <label class="form-check-label" for="flexCheckconfidentiality" id='confidentiality'>I have read and understood the <span className="">confidentiality agreement.</span> </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">

                <button className="nav-link px-2 link-dark mx-2" data-bs-dismiss="modal" id='buttonreset2' data-bs-target="#LoginModal" data-bs-toggle="modal"><span className='item'>Already a account</span></button>
                <button class="btn btn-primary" type='sumbit' id='registerSumbit' data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Sign Up</button>
              </div>

            </div>
          </div>

                    </div> */}





      </div>

      {/*SAYFA YONLENDİRMELERİ */}
      <Routes>
        <Route path='/' element={<Home setToken={setToken} />} exact />
        {<Route path='/howits' element={<Howits2 />} />}
        {<Route path='/about' element={<About />} />}
        {<Route path='/contact' element={<Contact />} />}
        {token ? <Route path='/profile' element={< Profile setToken={setToken} token={token} />} /> : ""}
        {token ? <Route path='/chat' element={< Chat setToken={setToken} token={token} />} /> : ""}
        
        <Route path='/privacy' element={< Privacy />} />
        <Route path='/terms' element={< Terms />} />
        <Route path='/cookies' element={< Cookies />} />
        {<Route path='/ResetPassword' element={< ResetPassword />} />}
      </Routes>

    </div>

  )
}

export default Nav