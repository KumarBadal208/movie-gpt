import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { netflixIcon } from "../utils/constant";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { openGpt } from "../utils/movieGptSlice";

const Header = ({ parentPage }) => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const useGpt = useSelector(store=> store.movieGpt.openMovieGpt);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign in
        const { uid, email, displayName, photoURL } = user;
        // eslint-disable-next-line
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // eslint-disable-next-line
        navigate("/browse");
      } else {
        // User is signed out
        // eslint-disable-next-line
        dispatch(removeUser());
        // eslint-disable-next-line
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const OpenMovieGPT = ()=>{
    console.log("clicked");
    dispatch(openGpt());
  }

    return (
        <div className="flex justify-between items-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg')]">
            <img alt="logo" className="h-20 w-48 font-bold bg-gradient-to-b from-black text-red-950" src={netflixIcon} />
            {user && <div className="flex">
                <button onClick={OpenMovieGPT} className="mx-2 p-2 text-white bg-blue-950 rounded-lg">
                   {useGpt? "Home Page" : "MovieGPT"}
                </button>
                <img
                    className="h-10 mx-4"
                    alt="userIcon"
                    src={user && user.photoURL}
                />
                <button onClick={handleSignOut} className="p-2 mx-2 h-10 border border-black rounded-md bg-slate-800 text-white">Sign Out</button>
            </div>}
        </div>
    )
};

export default Header;
