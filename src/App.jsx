import './App.scss';
import { DateWidget } from './components/DateWidget';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar/NavBar';
import { TodoActions } from './components/TodoActions/TodoActions';

export const App = () => {
  return <div className="App">
    <Header />
    <NavBar />
    <DateWidget />
    <TodoActions />
  </div>;
};
