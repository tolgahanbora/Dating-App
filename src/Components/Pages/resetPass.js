import React from 'react'

function resetPass() {
  return (
    <div class="container">
        <div class="row">
            <div class="col"> 
            <p>Enter your email address and we'll send you a link to reset your password.</p> 
        <label for="inputPassword5" class="form-label ">E-mail</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />

<button class="btn btn-danger my-4" type="submit" id="resetpass">Reset Password</button>
</div>
</div>

    </div>
  )
}

export default resetPass