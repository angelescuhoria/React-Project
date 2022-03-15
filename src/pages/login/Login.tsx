import { Header } from '../../layout/header/Header';
import { LoginForm } from '../../modules/LoginForm/LoginForm';
import './login.min.css';

export const Login = () => {
  return (
    <div className = "login">
      <Header />
      <LoginForm />
    </div>
  );
}
