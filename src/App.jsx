import { Outlet } from 'react-router-dom';
import './App.scss';
import { DateWidget } from './components/DateWidget';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar/NavBar';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <DateWidget />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};
