
import { FaGoogle,FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
              <h1 className='font-semibold  font-poppinss text-xl text-3Fprimary'>Login With</h1>
              <div className="mt-5 flex flex-col gap-2">
                <button className="btn text-base text-blue-500"><FaGoogle />Login with Google</button>
                <button className="btn text-base"><FaGithub />Login with Github</button>
              </div>
        </div>
    );
};

export default SocialLogin;