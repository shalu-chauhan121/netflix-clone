
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword,
     signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyArq19zirRH3Q_aB9SIGLlPWfzLBXVHVs0",
  authDomain: "netflix-clone-b01a6.firebaseapp.com",
  projectId: "netflix-clone-b01a6",
  storageBucket: "netflix-clone-b01a6.firebasestorage.app",
  messagingSenderId: "162023610977",
  appId: "1:162023610977:web:f6c2cf26a02e816e6b6820"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async({name,email,password})=>{
try{
 const res=await createUserWithEmailAndPassword(auth,email,password);
 const user=res.user;
 await addDoc(collection(db,"user"),{
 uid:user.uid,
 name,
 authProviider:"local",
 email,
 });
}catch(error){
 console.log(error);
 alert(error);
}
}

const login=async(email,password)=>{
    try{
    signInWithEmailAndPassword(auth,email,password);
    }catch(error){
 console.log(error);
 alert(error);
    }
}

const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout};