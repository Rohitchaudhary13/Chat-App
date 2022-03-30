import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { Button } from '@mui/material';



const auth = firebase.auth();



export default function SignOut() {
    return auth.currentUser && (
      <Button variant="contained" size="large" sx={{backgroundColor: '#8112ff', color: 'white', textAlign: 'center'}} className="sign-out" onClick={() => auth.signOut()}>Sign Out</Button>
      )
  }