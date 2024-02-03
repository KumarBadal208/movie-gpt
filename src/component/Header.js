import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = ()=>{
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div className="flex justify-between bg-slate-300 items-center">
            <img alt="logo" className="h-20 w-48 font-bold bg-gradient-to-b from-black text-red-950" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
            <div className="flex">
                <img
                    className="h-10 mx-4"
                    alt="userIcon"
                    src={user && user.photoURL}
                />
                <button onClick={handleSignOut} className="p-2 mx-2 h-10 border border-black rounded-md bg-slate-800 text-white">Sign Out</button>
            </div>
        </div>
    )
};

export default Header;