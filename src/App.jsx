import './App.scss';
import { DateWidget } from './components/DateWidget';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar/NavBar';
import { TodoActions } from './components/TodoActions';
import { TodoContent } from './components/TodoContent';

export const App = () => {
  return <div className="App">
    <Header />
    <NavBar />
    <DateWidget />
    <TodoActions />
    <TodoContent />
  </div>;
};
