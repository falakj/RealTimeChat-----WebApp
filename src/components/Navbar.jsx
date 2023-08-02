import { signOut } from 'firebase/auth';
import { useContext } from 'react'
import { auth } from '../firebase';
import { AuthContext } from './../context/AuthContext';

const Navbar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
        <span className="logo">CONVERSA</span>
        <div className="user">
          <img src={currentUser.photoURL} alt="" />
          <span>{currentUser.displayName}</span>
        </div>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>

      
  );
}

export default Navbar