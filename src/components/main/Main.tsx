import './Main.min.css';
import phone from '../../photos/Phone.png';
import { useAuth } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';

export const Main = () => {

  const currentUser = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
   auth.signOut()
   .then(() => navigate('/'))
   .catch(error => console.log(error));
 }

  return (
    <div className = "mainDiv">
      <div className = "leftContent">
        <h1 className = "mainH1"><span className = "leftSpan">You</span> put in the <span className = "leftSpan">work</span>.</h1>
        <h2 className = "mainH2">We help you achieve <span className = "leftSpan">your</span> goals.</h2>
        <p className = "leftP">Using <span className = "paragraphSpan">Fitify</span>, we can help you get in shape wherever you are. From the comfort of your home, to a public gym, we got you covered. We also include workouts using only your bodyweight (no equipment needed!) or even training plans with generic equipment. This time around we decided to include various sports and make things more fun and challenging using daily or weekly goals. Be sure to check our app on <a target = "__blank" href = "https://apps.apple.com/us/app/fitify-fitness-home-workout/id1463386686" className = "anchor">iOS</a> and <a target = "__blank" href = "https://play.google.com/store/apps/details?id=com.fitifyworkouts.bodyweight.workoutapp&hl=en&gl=US" className = "anchor">Google Play Store!</a></p>
        <p className = "leftP">
        {currentUser?
          <>
            <button className = "mainButton">
              <Link to = "/myprofile" className = 'link'>My Profile</Link>
            </button>
              Or if you want to sign out for now:
            <button className = "mainButton" onClick={() => Logout()}>Log Out
            </button>
          </>
            :
          <>
            <button className = "mainButton">
              <Link to = "/register" className = 'link'>Sign Up</Link>
            </button>
              today, or if you're already an user:
            <button className = "mainButton">
              <Link to = "/login" className = 'link'>Login</Link>
            </button>
          </>
          }
        </p>
      </div>
      <div className = "rightContent">
        <img src = {phone} alt = "Statistics phone" className = "phone" />
        <div className = "light">

        </div>
      </div>
    </div>
  );
}
