
import { useState, useEffect } from 'react';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js';
import { Modal, Button, Form, Badge } from 'react-bootstrap';


import logo from '../MediaIcons/logo.png'
import "../Style/NavStyle.css"
import { About, Contact, Howits2, ResetPassword, Home, Privacy, Terms, Cookies, Profile, Chat } from '../Pages/index.js'

import { FaUserCircle } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BiWorld } from "react-icons/bi"
import { BsGenderAmbiguous } from "react-icons/bs"


function Nav() {

  const navigate = useNavigate()
  const [showProfileModal, setShowProfileModal] = useState(false);
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
    fullName: "", email: "", password: "", gender: "", country: ""
  })

  //Login datalarını tuttuğum UseState
  const [loginData, setLoginData] = useState({
    email: "", password: ""
  })



  const handleProfileClick = () => {
    setShowProfileModal(true);
  }

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  }



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
    if (formData.email && formData.fullName && formData.password && formData.gender && formData.country) {
      try {
        const { data, error } = await supabase.auth.signUp(
          {
            email: formData.email,
            password: formData.password,
            options: {
              data: {
                first_name: formData.fullName,
                gender: formData.gender,
                country: formData.country,
              }
            }
          }
        )
        alert("Check your email for verification ")
      }
      catch (error) {
        alert(error)
      }
    } else {
      alert("Please fill out all fields before submitting.")
    }
  }

  const setOnlineUser = async () => {


    const { data, error } = await supabase
      .from('profiles')
      .update({ acount: true })
      .eq('email', loginData.email)
      .select()

    if (error) {
      console.log("something went wrong for online", error)
    }

  }

  //Login için Handle Butonu
  const handleSubmitLogin = async (e) => {
    e.preventDefault()

    // Form verilerinin dolu olup olmadığını kontrol et
    if (loginData.email && loginData.password) {
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


          await setOnlineUser()
          navigate("/chat");
          alert("Başarıyla giriş yapıldı!");



        }
      } catch (error) {
        alert(error)
      }
    } else {
      alert("Please fill out all fields before submitting.")
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

  const handleLogout = () => {
    // Clear the token from sessionStorage

    const signOutFunc = async () => {
      const { error } = await supabase.auth.signOut()
    }
    signOutFunc()
    sessionStorage.removeItem('token');
    // Reset the token state
    setToken(null);
    // Navigate to the home page
    navigate('/');
  }


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
            {!token ? <NavLink to='/howits' className="nav-link px-2 link-dark" activeClassName="active" ><span className='item'><b>How It Works</b></span></NavLink> : ""}
            {!token ? <NavLink to='/about' className="nav-link px-2 link-dark" activeClassName="active"><span className='item'><b>About</b></span></NavLink> : ""}
            {!token ? <NavLink to='/contact' className="nav-link px-2 link-dark" activeClassName="active"><span className='item'><b>Contact Us</b></span></NavLink> :

              <div className='d-flex align-items-center'>
                <Badge pill bg="#D23C3C" onClick={handleProfileClick} style={{ backgroundColor: "#FED9D5", color: "#D23C3C", cursor: 'pointer', width: '175px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                  <FaUserCircle size={32} style={{ backgroundColor: "transparent" }} /> {token.user.user_metadata.first_name}
                </Badge>
                <button variant="button danger" onClick={handleLogout} className="btn btn-danger ms-3" style={{ height: '48px', fontSize: '14px', padding: '8px 16px' }}>
                  Logout
                </button>
              </div>

            }

          </ul>

          {/*LOGIN VE SIGNUP MODA BUTONU */}

          {!token ? <div class="col-md-3 ">
            <button class="buttn rounded-2  me-2 " id='loginbtns' onClick={handleShow}><b id='signupbold'>Login</b></button>



            <button class="buttn  rounded-2" id='signupbtns' onClick={handleShowRegister}><b id='loginbold'>Sign up</b></button>
          </div> : ""}

        </header>


        {/* Profile Modal */}

        {token ?
          <Modal
            show={showProfileModal}
            onHide={handleCloseProfileModal}
            dialogClassName="profile-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Add your profile content here */}
              {/* Example: <Profile /> component */}
              <h6><FaUserCircle size={32} style={{ backgroundColor: "transparent", color: "#D23C3C" }} /> {token.user.user_metadata.first_name}</h6>
              <div className='row'>
                <p style={{ fontSize: "12px", fontWeight: 500, lineHeight: "16px", marginTop: "15px" }}><HiOutlineMail style={{ color: "#D23C3C" }} size={20} />  {token.user.email} </p>
              </div>
              <div className='row'>
                <p style={{ fontSize: "12px", fontWeight: 500, lineHeight: "16px", marginTop: "15px" }}><BsGenderAmbiguous size={20} style={{ color: "#D23C3C" }} />  {token.user.user_metadata.gender}</p>
              </div>
              <div className='row'>
                <p style={{ fontSize: "12px", fontWeight: 500, lineHeight: "16px", marginTop: "15px" }}><BiWorld style={{ color: "#D23C3C" }} size={20} />  {token.user.user_metadata.country}</p>
              </div>
              <div className='row'>
                <p style={{ fontSize: "12px", fontWeight: 500, lineHeight: "16px", marginTop: "15px" }}> Acount Status: </p>
              </div>

            </Modal.Body>
          </Modal>
          : ""

        }



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
                  <Form.Group className="mb-3 my-4">
                    <Form.Label htmlFor="gender">Gender</Form.Label>
                    <Form.Select id="gender" name="gender" onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="woman">Woman</option>
                      <option value="man">Man</option>
                      <option value="couple">Couple</option>
                      <option value="trans">Trans</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3 my-4">
                    <Form.Label htmlFor="country">Country</Form.Label>
                    <Form.Select id="country" name="country" onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      {/* Diğer ülkeleri buraya ekleyin */}
                    </Form.Select>
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

    </div >

  )
}

export default Nav