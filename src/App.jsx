import './App.scss';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar/NavBar';

export const App = () => {
  return <div className="App">
    <Header />
    <NavBar />
  </div>;
};
