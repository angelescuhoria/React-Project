import './SignUp.min.css';
import { Header } from '../../layout/header/Header';
import { RegisterForm } from '../../modules/RegisterForm/RegisterForm';

export const SignUp = () => {
  return (
    <div className = "signup">
      <Header />
      <RegisterForm />
    </div>
  );
}
