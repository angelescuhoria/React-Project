import './registerform.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../config/firebase';
import { ErrorText } from '../../components/ErrorText/index';


export const RegisterForm = () => {

  const [register, setRegister] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) setError('Please make sure your passwords match!');

    if (error !== '') setError('');

    setRegister(true);

    auth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      console.log(result);
      navigate('/login');
    })
    .catch(error => {
        console.log(error);

        if (error.code.includes('auth/weak-password'))
        {
          setError('Please enter a stronger password.');
        } else if (error.code.includes('auth/email-already-in-use'))
        {
          setError('E-mail already in use.');
        } else
        {
          setError('Unable to register. Please try again later.');
        }

        setRegister(false);
    });
  }

  return (
    <div className = "registerform">
      <h1>Sign up</h1>
        <form method = "post">
          <div className = "text_field">
            <input
              type =  "text"
              required
              onChange = {event => setUsername(event.target.value)}
              value = {username}
             />
            <label>Username:</label>
          </div>
          <div className = "text_field">
            <input
              type = "email"
              required
              onChange = {event => setEmail(event.target.value)}
              value = {email} />
            <label>E-mail:</label>
          </div>
          <div className = "text_field">
            <input
              autoComplete = "new-password"
              type = "password"
              required
              onChange = {event => setPassword(event.target.value)}
              value = {password} />
            <label>Password:</label>
          </div>
          <div className = "text_field">
            <input
              autoComplete = "new-password"
              type = "password"
              required
              onChange = {event => setConfirm(event.target.value)}
              value = {confirm} />
            <label>Confirm Password:</label>
          </div>
          <button
              disabled = {register}
              onClick = {() => signUpWithEmailAndPassword()}
          >
            Sign up!
          </button>
          <div className = 'login_link'>
            <p className = 'login_text'>Already a member?
              <Link to = "/login" className = 'link'> Log in!</Link>
            </p>
          </div>
          <ErrorText error = {error} />
        </form>
    </div>
  );
}
