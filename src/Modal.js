import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, TextField } from '@material-ui/core';
import './Modal.css'
import { auth } from './Firebase';




const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    marginTop: '30vh',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  // the hooks for storeing values
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user ,setuser] = useState("");


  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //data change on event

  const updateUserName = (e) => {
    setUserName(e.target.value)
  };
  const updateEmail = (e) => {
    setEmail(e.target.value)
  };
  const updatePassword = (e) => {
    setPassword(e.target.value)
  };


  //sign in and signup handlers

  const handleclickSignIn = () => {
    console.log('sign-in')
    console.log(email, password, username)
  };

  const handleclickSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((authuser=>{
      return authuser.user.updateProfile({
        displayName:username
      });
    }))
    .catch(function(error) {
      // Handle Errors here.
      console.log(error.code);
     alert(error.message) ;
      // ...
    });  };

//use Effect



  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser){
        console.log(authuser);
        setuser(authuser)
      }
      else{
        setuser(null);
      }
    })
  }, [])



  const body = (

    <div className={classes.paper}>
      <img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JK42TiBH9apltQsgx9B5-qDGkeB9JvZ1dg&usqp=CAU" alt="logo" />
      <form className='sign-up'>

        <TextField id="outlined-basic1" label="UserName" variant="outlined" onChange={updateUserName} /><br></br><br />
        <TextField id="outlined-basic3" label="Email" variant="outlined" onChange={updateEmail} /><br></br><br />
        <TextField id="outlined-basic2" label="Password" variant="outlined" type="password" onChange={updatePassword} /><br></br>
        <br /><br />
        <div className="signButtons">
          {user ? (          <Button variant="contained" color="primary" onClick={handleclickSignUp} >sign out</Button>):
          (<Button variant="contained" color="primary" onClick={handleclickSignUp} >sign up</Button> )
          }
          {/* <Button variant="contained" color="primary" onClick={handleclickSignUp} >sign up</Button> */}
          {/* <Button variant="contained" color="primary" onClick={handleclickSignIn} >sign in</Button> */}
        </div>
      </form>

    </div>
  );

  return (

    <div>
      <button type="button" onClick={handleOpen}>
        Sign up
      </button>
      <Modal className='modalsignin'
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}
