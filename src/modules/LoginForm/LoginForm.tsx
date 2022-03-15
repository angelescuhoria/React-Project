import './loginform.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../config/firebase';
import { ErrorText } from '../../components/ErrorText/index';

export const LoginForm = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== '') setError('');

    setAuthenticating(true);

    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log(result);
      navigate('/myprofile');
    })
    .catch(error => {
      console.log(error);
      setAuthenticating(false);

      if (error.code.includes('auth/invalid-email'))
      {
        setError('Please provide a valid email.');
      } else if (error.code.includes('auth/wrong-password'))
      {
        setError('Wrong Password. Try Again.');
      } else
      {
        setError('Unable to login. Please try again later.');
      }
    })
  }

  return (
    <div className = "loginform">
      <h1>Login</h1>
        <form method = "post">
          <div className = "text_field">
            <input
              type="email"
              required
              onChange = {event => setEmail(event.target.value)}
              value = {email}
            />
            <label>E-mail</label>
          </div>
          <div className = "text_field">
            <input
              autoComplete = "new-password"
              type="password"
              required
              onChange = {event => setPassword(event.target.value)}
              value = {password}
            />
            <label>Password</label>
          </div>
          <div className = "forgot_password">Forgot Password?</div>
          <button
            disabled = {authenticating}
            onClick = {() => signInWithEmailAndPassword()}
          >
            Login
          </button>
          <div className = 'signup_link'>
            <p className = 'signup_text'>Not a member?
              <Link to = "/register" className = 'link'> Sign Up!</Link>
            </p>
          </div>
          <ErrorText error = {error} />
        </form>
    </div>
  );
}
