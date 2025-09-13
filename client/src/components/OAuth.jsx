import { AiFillGoogleCircle } from 'react-icons/ai';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../fiirebase';
import { useDispatch } from 'react-redux'
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from 'react-router-dom'

export default function OAuth() {

    const auth = getAuth(app)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({prompt: 'select_account'})
    try{
        const resultsFromGoogle = await signInWithPopup(auth,provider)
        // console.log(resultsFromGoogle);
        const res = await fetch('/api/auth/google',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
                googlePhotoUrl: resultsFromGoogle.user.photoURL,
            })
        })
        const data = await res.json()
        if(res.ok){
            // console.log(data);
            dispatch(signInSuccess(data))     
            navigate('/') 
        }
        
    }catch(error){
        console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 rounded-md shadow-md transition duration-300"
    >
      <AiFillGoogleCircle className="w-6 h-6" />
      <span>Continue With Google</span>
    </button>
  );
}
