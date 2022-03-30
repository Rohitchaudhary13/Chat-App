import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { Button, Container, Typography } from '@mui/material';



firebase.initializeApp({
    apiKey: "AIzaSyChgBjN9lKS7NNeuxUOBMGGk7H_5I0BYPQ",
//     authDomain: "fir-chat-dcf96.firebaseapp.com",
    authDomain: "https://chat-app-delta-seven.vercel.app/",
    databaseURL: "https://fir-chat-dcf96-default-rtdb.firebaseio.com",
    projectId: "fir-chat-dcf96",
    storageBucket: "fir-chat-dcf96.appspot.com",
    messagingSenderId: "1059552531371",
    appId: "1:1059552531371:web:583a7404d176ad313b78ee",
    measurementId: "G-1XDQ9Q0ELH"
  })

const auth = firebase.auth();


export default function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <Container>
        <Button variant="contained" mb={8} size="large" sx={{backgroundColor: '#8112ff', color: 'white', textAlign: 'center'}} className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
      </Container>
    )
  
  };
