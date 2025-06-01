import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/provider/AuthProvider";


const Login = () => {
  const {userLogin,setUser} = useContext(AuthContext)
  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password})
    userLogin(email,password)
    .then(result => {
      const user = result.user;
      setUser(user)
     
    })
    .catch(error =>{
    alert(error.code)
    })
  }
    return (
        <div className="pt-[134px]  pb-[185px]">
        

   
    <div className="card flex items-center justify-center mx-auto rounded-none  bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 ">
       
      <div className="card-body">
         <h1 className="py-10 text-4xl font-semibold leading-auto text-center text-[#403F3F]">Login your account</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label text-xl text-[#403F3F] font-semibold">Email</label>
          <input 
          name="email"
          type="email" 
          className="input w-full" 
          placeholder="Enter your email address" />

          <label className="label text-xl text-[#403F3F] font-semibold">Password</label>
          <input 
          name="password"
          type="password" 
          className="input w-full"
           placeholder="Enter your password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        
        </form>
          <p className="text-base ">Dont’t Have An Account ?
             <Link to='/auth/register' className="text-red-500"> Resister</Link></p>
      </div>
    </div>
  </div>

    );
};

export default Login;