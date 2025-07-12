import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/provider/AuthProvider";


const Register = () => {
  const {creatNewUser,setUser} = useContext(AuthContext)
const handleRegister = (e) =>{
     e.preventDefault()
 const form = new FormData(e.target)
 const name = form.get('name');
 const email = form.get('email');
 const photo = form.get('photo');
 const password = form.get('password');
 console.log(name,email,photo,password)
 creatNewUser(email,password)
 .then(result =>{
  const user = result.user;
  setUser(user)
  console.log(user);
  
 })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });

}
    return (
        <div className="pt-[134px]  pb-[185px]">
   
           <div className="card flex items-center justify-center mx-auto rounded-none  bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 ">
              
             <div className="card-body">
                <h1 className="py-10 text-4xl font-semibold leading-auto text-center text-[rgb(64,63,63)]">Login your account</h1>
                <div className="border border-b-[#F3F3F3] h-[1px] w-[400px]"></div>
               <form onSubmit={handleRegister} className="fieldset">
                 <label className="label text-xl text-[#403F3F] font-semibold">Full Name</label>
                 <input 
                 name="name"
                 type="text" 
                 className="input w-full bg-[#F3F3F3]" placeholder="full name" />

                 <label className="label text-xl text-[#403F3F] font-semibold">Photo URL</label>
                 <input 
                 name="photo"
                 type="text" 
                 className="input w-full bg-[#F3F3F3]" placeholder="Photo url" />

                 <label className="label text-xl text-[#403F3F] font-semibold">Email</label>
                 <input 
                 name="email"
                 type="email"
                  className="input w-full bg-[#F3F3F3] " placeholder="Enter your email address" />

                 <label className="label text-xl text-[#403F3F] font-semibold">Password</label>
                 <input 
                 name="password"
                 type="password" 
                 className="input w-full bg-[#F3F3F3]" placeholder="Enter your password" />
                 <div><a className="link link-hover">Forgot password?</a></div>
                 <button className="btn btn-neutral mt-4">Register</button>
               
               </form>
                 <p className="text-base ">Already have an Account?
                    <Link to='/auth/Login' className="text-red-500"> Login</Link></p>
             </div>
           </div>
         </div>
    );
};

export default Register;