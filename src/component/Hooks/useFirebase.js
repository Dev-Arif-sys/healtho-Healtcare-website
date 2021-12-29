import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GithubAuthProvider } from 'firebase/auth'
import authenticationInit from "../../Firebase/firebase.init"
import { useHistory } from "react-router";

authenticationInit();
const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [errormsging, setError] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setLoading] = useState(true);



    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    //    google sign in method

    const signinWithGoogle = (redirect_uri, navigate) => {
        setLoading(true)
        
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setUser(user)
                navigate(redirect_uri)
            })
            .catch(error => {
                let errorMsg=(error.message);
                setError(errorMsg)
            }).finally(() => {
                setLoading(false)
            })
    }

    const signinWithGithub = (redirect_uri, navigate) => {
        setLoading(true)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setUser(user)
                navigate(redirect_uri)
            })
            .finally(()=>{
                setLoading(false)
            })

    }

    const updateName = (name) => {
        
        updateProfile(auth.currentUser,{displayName:name})
       .then(()=>{

       })

    }

    // create user with password and email

    const createUserWithEmail = (name, email, password, navigate) => {
              setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {

                const user = userCredential.user
                setName(name)
                updateName(name)
                setUser(user)
                navigate('/signin')
                window.location.reload()

            })
            .catch(error => {
                console.log(error.message)
                const errorMsg=error.message
                console.log(errorMsg)
                setError(errorMsg)
            })
            .finally(()=>{
                setLoading(false)
            })
    }


    const signinWithEmail = (email, password,redirect_uri,navigate) => {
           setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateName(name)
                const user = userCredential.user;
                console.log(user)
                navigate(redirect_uri)
            })
            .catch((error) => {
                
                 
                setError(error.message)
            }).finally(()=>{
                setLoading(false)
            })
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser(null)
            }).catch((error) => {

            })
            .finally(()=>{
                setLoading(false)
            })

    }
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                updateName(name)
                setUser(user)
                const uid = user.uid;
                
            } else {
                setUser()
            }
            setLoading(false)
        });

    }, [])
    console.log(errormsging)
    return {
        user,
        errormsging,
        isLoading,
        signinWithGoogle,
        createUserWithEmail,
        signinWithEmail,
        signinWithGithub,
        logOut
    }
}

export default useFirebase