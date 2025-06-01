import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null)
       console.log(user)
 
//   resigtration
    const creatNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
//  login 
    }
    const userLogin = (email,password) =>{
          return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        signOut(auth)
    }

    const authInfo={
        user,
        setUser,
        creatNewUser,
        logOut,
        userLogin,
        
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
             })
            return ()=>{
               unsubscribe()
            }
       
    },[])
    return (
     <AuthContext.Provider value={authInfo}>
            {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;