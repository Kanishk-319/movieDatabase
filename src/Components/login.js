import GoogleIcon from '@mui/icons-material/Google';
import { createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, googleProvider } from '../Helpers/firebase'
import { useState, useContext } from 'react';
import { StateContext } from '../Helpers/StateContext';

export const Login = () => {
    const { setState, username, setUsername, setCheckLogin, showAlert, checkLogin, setDisplayName } = useContext(StateContext)
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('Sign Up')


    const handleSignUp = async () => {
        try {
            if (auth.currentUser != null) return;
            await createUserWithEmailAndPassword(auth, username, password)
            localStorage.setItem('auth', true)
            setCheckLogin(true)
            setState('')
            showAlert('Sign Up Successful !!!', 'success')
            setDisplayName(auth.currentUser.displayName)

        } catch (err) {
            showAlert(err.message, 'danger')
        }
    }

    const handleGoogleLogin = async () => {
        try {
            if (auth.currentUser != null) return;
            await signInWithPopup(auth, googleProvider)
            localStorage.setItem('auth', true)
            setCheckLogin(true)
            setState('')
            showAlert('Log In Successfull !!', 'success')
            setDisplayName(auth.currentUser.displayName)
        } catch (err) {
            console.error(err)
            showAlert(err.message, 'danger')
        }
    }
    const handleLogIn = async () => {
        try {
            if (auth.currentUser != null) return;
            await signInWithEmailAndPassword(auth, username, password)
            localStorage.setItem('auth', true)
            setState('')
            setCheckLogin(true)
            showAlert('Log In Successfull !!', 'success')
            setDisplayName(username)
        } catch (err) {
            console.error(err)
            showAlert(err.message, 'danger')
        }
    }

    const logOut = () => {
        try {
            signOut(auth).then(() => {
                localStorage.setItem('auth', false)
                setCheckLogin(false)
                showAlert('Log Out Successful', 'primary')
            })
            setState('login')

        } catch (err) {
            console.error(err)
            showAlert(err.message, 'danger')
        }
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', width: '30%', height: '50vh', margin: 'auto', padding: '2vh', alignItems: 'center', marginTop: '5vh', justifyContent: 'center' }}>
                <h2>{title}</h2>
                <input onChange={(e) => setUsername(e.target.value)} style={{ width: '90%', margin: '2vh', padding: '0.8vh' }} type="text" placeholder="Enter Your Email..." />
                <input onChange={(e) => setPassword(e.target.value)} style={{ width: '90%', margin: '2vh', padding: '0.8vh' }} placeholder="Enter Your Password..." type="password" />
                <div style={{ display: 'flex' }}>
                    <button style={{ marginRight: '2vh' }} onClick={title == 'Sign Up' ? handleSignUp : handleLogIn} type="button" className={`btn btn-dark ${checkLogin == true && 'disabled'} `}>Submit</button>
                    <button onClick={logOut} type="button" className={`btn btn-dark ${checkLogin == false && 'disabled'} `}>LogOut</button>
                </div>



                <div onClick={handleGoogleLogin} className={`btn btn-success ${checkLogin == true && 'disabled'}`} style={{ width: '80%', margin: '2vh', border: '1px solid green', display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', padding: '1vh' }}>
                    <GoogleIcon style={{ color: 'white', marginRight: '10px' }} />
                    <div>{`${title} With Google`}</div>
                </div>

                <div>Already got an account?
                    <a onClick={() => title == 'Sign Up' ? setTitle('Log In') : setTitle('Sign Up')} href="/#">{title == 'Sign Up' ? 'Log In' : 'Sign Up'}</a>
                </div>
            </div >
        </>
    )
}