import './Home.min.css';
import { Header } from '../../layout/header/Header';
import { Main } from '../../components/main/Main';

export const Home = () => {
  return (
    <div className = "home">
      <Header />
      <Main />
    </div>
  );
}
