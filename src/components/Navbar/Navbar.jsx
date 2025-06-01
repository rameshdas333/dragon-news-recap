
import Container from '../Container';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import user1 from '../../assets/user.png'
import { useContext } from 'react';


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    
    return (
        <div>
            <Container>

               <div className=' pt-5  md:flex  justify-between items-center'>
               
               <div>{user && user.email}</div>
                <div className='flex text-6Fprimary  gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/career'>Career</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className='flex items-center gap-2'>
                   <img className='w-[41px]' src={user1} alt="" />
                   {
                    user && user?.email ? (
                        <button onClick={logOut} className='btn px-6 rounded-none text-white btn-neutral'>LogOut</button>
                    )
                    :<Link to="/auth/login" className="btn px-6 rounded-none text-white btn-neutral">Login</Link>
                   }
                
                </div>
               </div>

            </Container>
        </div>
    );
};

export default Navbar;